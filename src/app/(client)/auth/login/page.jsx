import LoginPageHeader from "@/components/pages/Login/LoginPageHeader";
import LoginForm from "@/components/pages/Login/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <section className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <LoginPageHeader />
            <LoginForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
