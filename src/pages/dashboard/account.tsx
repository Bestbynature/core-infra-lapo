import { useState, type ChangeEvent } from "react";
import { EyeIcon } from "../../assets/icons";
import { Header } from "../../components";

const Account = () => {
  return (
    <main className="">
      <Header title="Account" description="Change your password here." />
      <hr className="my-2 border-t border-[#98A2B3]" />
      <AccountForm />
    </main>
  );
};

export default Account;

const AccountForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  return (
    <form className="flex flex-col gap-4 bg-white border border-[#E2E2E2] p-4 rounded-xl max-w-xl">
      <h2 className="text-lg font-medium text-primary">Change Password</h2>
      <AccountPasswordField
        label="Old Password"
        name="oldPassword"
        value={formData.oldPassword}
        onChange={(e) =>
          setFormData({ ...formData, oldPassword: e.target.value })
        }
      />
      <div className="flex flex-col gap-0.5">
        <AccountPasswordField
          label="New Password"
          name="newPassword"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData({ ...formData, newPassword: e.target.value })
          }
        />
        <span className="text-xs text-[#475467]">
          Password required to be at least 8 characters long
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <AccountPasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <span className="text-xs text-[#475467]">Passwords must match</span>
      </div>
      <button
        type="submit"
        className="bg-[#014DAF] text-white py-[10px] px-[18px] rounded-lg font-medium w-[60%]"
      >
        Submit
      </button>
    </form>
  );
};

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AccountPasswordField: React.FC<PasswordFieldProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const inputType = showPassword ? "text" : "password";
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[#344054]">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg px-[14px] py-[10px]">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Enter your password"
          className="flex-1 outline-none text-[#667085] text-base placeholder:text-secondary placeholder:text-base"
          autoComplete="new-password"
          required
        />
        <span className="ml-2 cursor-pointer" onClick={handleToglePassword}>
          <EyeIcon />
        </span>
      </div>
    </div>
  );
};
