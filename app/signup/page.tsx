import AuthCard from "@/components/auth/authCard.component";
import SigninForm from "@/forms/auth/signin.form";

const SignIn = async () => {
  return (
    <AuthCard title="Create an account">
      <SigninForm />
    </AuthCard>
  );
};

export default SignIn;
