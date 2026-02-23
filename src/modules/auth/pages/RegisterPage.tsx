import AuthImage from "../../../assets/authImage/authImage";
import RegisterForm from "../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <div>
      <div className="container m-auto h-dvh lg:flex bg-background">
        <div className="flex flex-col items-center justify-center flex-1 h-full border-x-2 ">
          <div className="grid place-items-center"></div>
          <p className="mb-2 text-emerald-700 text-2xl font-bold md:mb-4 md:text-3xl">
            Crea tu Cuenta
          </p>
          <RegisterForm />
        </div>
        <div className="hidden w-1/2 overflow-hidden lg:grid place-content-center ">
          <AuthImage />
        </div>
      </div>
    </div>
  );
};
