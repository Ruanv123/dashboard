"use client";

import LoginForm from "@/components/forms/login-form";

import { BackButton } from "../components/back-button";

export default function Page() {
  return (
    <main className="min-h-screen min-w-full flex items-center justify-center">
      <BackButton />
      <div>
        <LoginForm />
      </div>
    </main>
  );
}
