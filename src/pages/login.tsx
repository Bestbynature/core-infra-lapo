import { LoginCard, Noise } from "../assets/images";
import { LoginForm, LogoComponent } from "../components";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Noise})` }}
    >
      <div className="flex-1 px-[80px] pt-10 pb-6  h-full">
        <div className="flex flex-col justify-between h-full ">
          <LogoComponent />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-[28px] leading-[30px] text-primary">
                Hi, Welcome Back!
              </h1>
              <p className="text-sm text-primary font-medium">
                Please sign in using your credentials.
              </p>
            </div>
            <LoginForm />
          </div>

          <p className="text-secondary text-sm">
            © 2024 Mercator Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex-1 py-5 pr-5 h-full w-full">
        <img src={LoginCard} alt="login card" className="fitted" />
      </div>
    </div>
  );
};

export default Login;
