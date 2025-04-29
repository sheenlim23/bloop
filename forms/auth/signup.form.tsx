"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/shared/fields/input.component";
import Checkbox from "@/components/shared/fields/checkbox.component";
import Link from "@/components/shared/fields/link.component";
import { signin, signup } from "@/actions/auth/auth.action";
import { showToast } from "@/components/shared/toast.component";
import { ErrorIcon } from "@/components/shared/icons.component";

type SignupFormValues = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  passwordConfirm: string;
};

type InputField = {
  name: keyof SignupFormValues;
  label: string;
  type: string;
  placeholder: string;
  validation: {
    [key: string]: any;
  };
};

const inputFields: InputField[] = [
  {
    name: "firstname",
    label: "First name",
    type: "text",
    placeholder: "First name",
    validation: {
      required: "First name is required",
    },
  },
  {
    name: "lastname",
    label: "Last name",
    type: "text",
    placeholder: "Last name",
    validation: {
      required: "Last name is required",
    },
  },
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
  {
    name: "passwordConfirm",
    label: "Confirm Password",
    type: "password",
    placeholder: "••••••••",
    validation: {
      required: "Confirm Password is required",
    },
  },
];

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      firstname: "",
      lastname: "",
    },
  });

  const handleSignup = async (formData: SignupFormValues) => {
    try {
      const response = await signup(formData);
      console.log("🚀 ~ handleSignup ~ response:", response);
      if (response.isError) {
      }
    } catch (error) {
      showToast(
        "An unexpected error occurred. Please try again.",
        "danger",
        5000,
        <ErrorIcon />,
        "top-center"
      );
    }
  };

  return (
    <form
      className="space-y-4 md:space-y-6"
      onSubmit={handleSubmit(handleSignup)}
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
        Sign up
      </button>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/signin"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
