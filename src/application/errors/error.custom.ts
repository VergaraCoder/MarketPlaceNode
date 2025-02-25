enum HttpStatus {
  NOT_FOUND = 404,
  CONFLIC = 409,
  OK = 200,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export class ManageError extends Error {
  constructor({
    type,
    message,
  }: {
    type: keyof typeof HttpStatus;
    message: string;
  }) {
    super(`${type} :: ${message}`);
  }

  public static signedError(message: string) {
    const name: any = message.split(' :: ')[0];

    if (name) {
      throw new Error(name, { cause: message });
    } else {
      throw new Error(message);
    }
  }
}
