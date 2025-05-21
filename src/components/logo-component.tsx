import { Logo } from "../assets/images";

const LogoComponent = () => {
  return (
    <div className="w-[138px] h-[45px]">
      <img src={Logo} alt="Lapo logo" className="object-contain" />
    </div>
  );
};

export default LogoComponent;
