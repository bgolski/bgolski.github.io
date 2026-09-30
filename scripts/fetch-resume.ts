import { randomUUID } from 'node:crypto';
import { mkdir, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const MAX_PDF_BYTES = 10 * 1024 * 1024;
const MIN_PDF_BYTES = 1024;

interface Options {
  sha?: string;
  fetchImpl?: typeof fetch;
  destination?: string;
}

export async function fetchResume({
  sha = process.env.RESUME_COMMIT_SHA,
  fetchImpl = fetch,
  destination = resolve('public/resume.pdf'),
}: Options = {}): Promise<void> {
  if (sha !== undefined && !/^[a-f\d]{40}$/i.test(sha)) {
    throw new Error('RESUME_COMMIT_SHA must be a 40-character hexadecimal commit SHA');
  }

  const ref = sha ?? 'main';
  const url = `https://raw.githubusercontent.com/bgolski/resume/${ref}/BradleyGolskiResume.pdf`;
  const response = await fetchImpl(url, { signal: AbortSignal.timeout(20_000) });
  if (!response.ok) {
    throw new Error(`Resume download failed with HTTP ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < MIN_PDF_BYTES || bytes.length > MAX_PDF_BYTES) {
    throw new Error(`Resume PDF size is outside the allowed range (${bytes.length} bytes)`);
  }
  if (bytes.subarray(0, 5).toString() !== '%PDF-' ||
      !bytes.subarray(-2048).includes(Buffer.from('%%EOF'))) {
    throw new Error('Resume download is not a complete PDF');
  }

  await mkdir(dirname(destination), { recursive: true });
  const temporary = `${destination}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, bytes, { flag: 'wx' });
    await rename(temporary, destination);
  } finally {
    await rm(temporary, { force: true });
  }
  console.log(`Fetched resume PDF from ${ref} (${bytes.length} bytes)`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await fetchResume();
}
