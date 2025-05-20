"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/shared/fields/input.component";
import Checkbox from "@/components/shared/fields/checkbox.component";
import Link from "@/components/shared/fields/link.component";
import { signin } from "@/actions/auth/auth.action";
import { showToast } from "@/components/shared/toast.component";
import { useAppDispatch } from "@/store/global/hooks";
import { setAuthState } from "@/store/slice/auth.slice";
import {
  ErrorIcon,
  CheckCircleIcon,
} from "@/components/shared/icons.component";
import { setCookie } from "@/services/cookies.services";
import { useRouter } from 'next/navigation';

type SigninFormValues = {
  email: string;
  password: string;
};

type InputField = {
  name: keyof SigninFormValues;
  label: string;
  type: string;
  placeholder: string;
  validation: {
    [key: string]: any;
  };
};

const inputFields: InputField[] = [
  {
    name: "email",
    label: "Your email",
    type: "text",
    placeholder: "name@company.com",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    validation: {
      required: "Password is required",
    },
  },
];

const SigninForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (formData: SigninFormValues) => {
    try {
      const response = await signin(formData);
      if (response.isError) {
        showToast(
          response.message,
          "danger",
          5000,
          <ErrorIcon />,
          "top-center"
        );
        return;
      } else {
        setCookie("isAuthenticated", "true");
        dispatch(setAuthState(response.data));
        showToast(
          response.message,
          "success",
          5000,
          <CheckCircleIcon />,
          "top-center"
        );
        router.push('/');
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleSignin)}
    >
      {inputFields.map((field) => (
        <div key={field.name}>
          <Input
            {...register(field.name, field.validation)}
            label={field.label}
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            error={
              errors[field.name] && (
                <small className="mt-1 text-sm text-red-500">
                  {errors[field.name]?.message}
                </small>
              )
            }
            required
          />
        </div>
      ))}

      <div className="flex items-center justify-between">
        <Checkbox
          label="Remember me"
          id="remember"
          aria-describedby="remember"
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
        />
        <Link
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Sign in
      </button>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
