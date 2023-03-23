class ApiError extends Error {
  status: number;
  error: Error[];
  constructor(status: number, message: string, error: Error[] = []) {
    super(message);
    this.status = status;
    this.error = error;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static RegistrationError(message: string) {
    return new ApiError(400, message);
  }

  static BadRequest(message: string, errors: Error[]) {
    return new ApiError(400, message, errors);
  }
}

export default ApiError;
