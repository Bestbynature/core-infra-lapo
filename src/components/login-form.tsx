import React, { useState } from "react";
import { EyeIcon, LockIcon, ProfileIcon } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../routes/routes-config";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify(formData));
    navigate(routePaths.dashboard);
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium text-primary">Username</label>
        <div className="flex items-center border border-gray-300 rounded-lg px-[14px] py-[10px]">
          <span className="mr-2">
            <ProfileIcon />
          </span>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="flex-1 outline-none text-primary placeholder:text-secondary placeholder:text-sm"
            required
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-medium text-primary">Password</label>
        <div className="flex items-center border border-gray-300 rounded-lg px-[14px] py-[10px]">
          <span className="mr-2">
            <LockIcon />
          </span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="flex-1 outline-none text-primary placeholder:text-secondary placeholder:text-sm"
            autoComplete="new-password"
            required
          />
          <span className="ml-2 cursor-pointer">
            <EyeIcon />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-sm">
        <a href="#" className="text-primary">
          Forgot password
        </a>
        <label className="flex items-center gap-3 text-primary-16">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="w-5 h-5 rounded-[4px] border-gray-300"
          />
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="bg-lapo-blue text-white font-medium text-base py-3 rounded-xl mt-2 cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
