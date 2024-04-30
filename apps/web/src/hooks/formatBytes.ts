export function bytesToMegabytes(bytes: number): number {
  return parseFloat((bytes / 1048576).toFixed(2));
}
