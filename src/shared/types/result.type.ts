export class ResultType {
  public statusCode: number = 0;
  public message: string = '';
  public error: string = '';
}

export class ResultLogin {
  public role: string = '';
  public token: string = '';
}

export class ResultError {
  public error: string = '';
  public message: string = '';
  public statusCode: number = 200;
}
