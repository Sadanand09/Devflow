"use client";

import React from "react";
import { signIn } from "next-auth/react";

import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={async (data) => {
        const res = await signIn("credentials", {
          redirect: false, // so you can handle errors manually
          email: data.email,
          password: data.password,
        });

        if (res?.error) {
          return { success: false, error: res.error };
        }

        return { success: true, data: res };
      }}
    />
  );
};

export default SignIn;
