import AuthCard from "@/components/auth/authCard.component";
import SignupForm from "@/forms/auth/signup.form";

const SignIn = async () => {
  return (
    <AuthCard title="Create an account">
      <SignupForm />
    </AuthCard>
  );
};

export default SignIn;
