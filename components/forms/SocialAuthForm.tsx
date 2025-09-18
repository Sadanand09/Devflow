"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

import ROUTES from "@/constants/routes";
import { toast } from "sonner";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 mx-1";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      const result = await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Sign-in failed. Please try again.");
      } else {
        toast.success(
          `Signed in with ${provider === "github" ? "GitHub" : "Google"}`
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong during sign-in");
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Logo"
          height={20}
          width={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          height={20}
          width={20}
          className="mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
