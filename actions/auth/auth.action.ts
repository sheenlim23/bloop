"use server";

import axios, { AxiosError, AxiosResponse } from "axios";
import { Config } from "@/constants/config.constant";
import { Auth } from "@/enums/auth.enum";
import {
  IAuthErrorResponse,
  ISigninPayload,
  IAuthSuccessResponse,
  ISignupPayload,
} from "@/types/auth/auth.interface";

export async function checkConnection(): Promise<boolean> {
  try {
    const res = await axios.get(`${Config.base_url}`);
    return res.status === 200;
  } catch (err) {
    console.error("DB Check Error:", err);
    return false;
  }
}

export async function signin(
  formdata: ISigninPayload
): Promise<IAuthSuccessResponse | IAuthErrorResponse> {
  try {
    const res = await axios.post<IAuthSuccessResponse>(
      `${Config.base_url}${Auth.signin}`,
      formdata
    );
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
}


export async function signup(
  formdata: ISignupPayload
): Promise<IAuthSuccessResponse | IAuthErrorResponse> {
  try {
    const res = await axios.post<IAuthSuccessResponse>(
      `${Config.base_url}${Auth.signup}`,
      formdata
    );
    return res.data;
  } catch (err: any) {
    const axiosError = err as AxiosError<IAuthErrorResponse>;
    if (axiosError.response && axiosError.response.data) {
      const data = axiosError.response.data;
      if (!data.success) {
        return data;
      }
    }

    return {
      success: false,
      message: "An unexpected error occurred.",
      statusCode: 500,
      isError: true,
    } as IAuthErrorResponse;
  }
}

