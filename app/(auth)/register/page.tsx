import RegisterForm, {
  RegisterFormSchema,
} from "@/components/forms/register-form";
import { BackButton } from "../components/back-button";

export default function Page() {
  return (
    <main className="min-h-screen min-w-full flex items-center justify-center">
      <BackButton />

      <div>
        <RegisterForm />
      </div>
    </main>
  );
}
