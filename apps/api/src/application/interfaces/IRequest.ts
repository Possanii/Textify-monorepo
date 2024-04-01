export interface IRequest {
  body: Record<string, any>;
  params: Record<string, string>;
  headers: Record<string, string>;
  user?: {
    id: string;
    role: string;
  };
}
