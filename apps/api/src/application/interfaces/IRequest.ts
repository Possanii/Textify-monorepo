import { Request } from "express";

export interface IRequest extends Partial<Request> {
  body: Record<string, any>;
  params: Record<string, string>;
  headers: Record<string, string>;
  user?: {
    id: string;
  };
}
