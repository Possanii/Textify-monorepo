export interface IVIdeo {
  id: string;
  fileName: string;
  sizeInBytes: number;
  durationInSeconds: number;
  type: "public" | "private";
  publicURL?: string;
}
