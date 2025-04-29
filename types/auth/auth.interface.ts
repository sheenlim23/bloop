export interface ISigninPayload {
  email: string;
  password: string;
}
export interface ISignupPayload {
  email: string;
  password: string;
  passwordConfirm: string;
  firstname: string;
  lastname: string;
}

export interface IAuthSuccessResponse {
  success: true;
  statusCode: number;
  isError: boolean;
  status: string;
  message: string;
  data: {
    token: string;
    user: {
      _id: string;
      firstname: string;
      lastname: string;
      email: string;
      profileImage: string;
      password: string;
      userType: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  };
}

export interface IValidationError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

export interface IAuthErrorResponse {
  success: false;
  message: string;
  statusCode: number;
  isError: boolean;
  status?: string;
  error?: {
    [key: number]: IValidationError;
  };
}

