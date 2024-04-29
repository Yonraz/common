import { ErrorResponse } from "../../../auth/src/types/error-response-type";

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
  }

  abstract serializeErrors(): ErrorResponse[];
}
