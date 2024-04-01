declare namespace Express {
  interface Request {
    metadata?: {
      user?: {
        id: string;
        role: string;
      };
    };
  }
}
