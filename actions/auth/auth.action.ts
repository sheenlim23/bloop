"use server";

import axios from "axios";
import { Config } from "@/constants/config.constant";
import { Auth } from "@/enums/auth.enum";
import {
  IAuthResponse,
  ISigninPayload,
  ISignupPayload,
} from "@/types/auth/auth.interface";
import api from "@/services/axios.services";

export async function checkConnection(): Promise<boolean> {
  try {
    const res = await axios.get(`${Config.base_url}`);
    return res.status === 200;
  } catch (err) {
    console.error("DB Check Error:", err);
    return false;
  }
}

export async function signin(formdata: ISigninPayload): Promise<IAuthResponse> {
  try {
    const res = await api.post<IAuthResponse>(Auth.signin, formdata,{
      withCredentials: true,
    });
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
}

export async function signup(formdata: ISignupPayload): Promise<IAuthResponse> {
  try {
    const res = await api.post<IAuthResponse>(Auth.signup, formdata);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
}
