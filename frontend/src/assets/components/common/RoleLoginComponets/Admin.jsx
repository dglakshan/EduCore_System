import { useState } from "react";
import {
  ArrowRightIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  LoginIcon,
  MailIcon,
  ShieldIcon,
} from "../Icons";
import { login } from "../../services/authService";

export const AdminCard = ({ onClick }) => {
  return (
    <section
      onClick={onClick}
      className="flex flex-col group gap-4 py-8 px-6 h-rolecard-h md:h-rolecard-h-md w-rolecard-w md:w-rolecard-w-md border border-border rounded-card-lg hover:border-admin-border hover:shadow-glow-lg hover:bg-linear-to-br from-admin-gradient-from to-transparent hover:-translate-y-1 bg-surface transition-all duration-(--duration-base) ease-in  "
    >
      <div className="w-14 h-14 rounded-icon border flex items-center justify-center bg-admin-muted text-admin border-admin-border">
        <ShieldIcon size={26} />
      </div>
      <div className=" uppercase text-size-sm text-admin font-bold tracking-wide">
        Administrator
      </div>
      <div className="text-size-xl font-extrabold text-text leading-1">
        Admin Portal
      </div>
      <div className="text-size-sm tracking-wide text-muted">
        Full system access - manage staff, students, classes, and school
        settings
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-avatar bg-admin" />
          <div className="text-size-sm text-muted">User & role management</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-avatar bg-admin" />
          <div className="text-size-sm text-muted">Reports & analytics</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-avatar bg-admin" />
          <div className="text-size-sm text-muted">System configuration</div>
        </div>
      </div>
      <div className="w-full h-px bg-border mt-4 " />
      <div className="w-full h-fit mt-3 flex justify-between items-center">
        <div className="text-size-sm text-admin font-medium invisible group-hover:translate-x-1 group-hover:visible transition-all duration-(--duration-fast) ease-in">
          Continue as Admin
        </div>
        <div className="w-fit h-fit rounded-chip p-1.5 text-admin bg-admin-muted group-hover:translate-x-1 transition-all duration-(--duration-base) ease-in">
          <ArrowRightIcon size={14} />
        </div>
      </div>
    </section>
  );
};

export const AdminLoginForm = () => {
  const [inputType, setInputType] = useState("password");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // remmember: null,
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-loginbox-w h-loginbox-h flex flex-col gap-y-5 rounded-card-lg shadow-card border border-border p-8 bg-surface">
      <div className="w-14 h-14 rounded-icon border flex items-center justify-center bg-admin-muted text-admin border-admin-border">
        <ShieldIcon size={26} />
      </div>
      <div className="w-fit h-fit px-2 py-1 bg-admin-muted text-admin text-size-sm rounded-card-lg border border-admin-border">
        Administrator Portal
      </div>
      <div className="text-size-2xl text-text font-extrabold leading-5">
        Welcome back
      </div>
      <div className="text-xs text-muted-2 leading-0">
        Sign in to access the full school management dashboard.
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(formData);
        }}
        className="text-sm text-muted-2 mt-5"
      >
        <label htmlFor="_email" className="text-xs font-medium">
          Email address
        </label>
        <div className="relative text-xs flex items-center justify-center mt-0.5 mb-4">
          <input
            onChange={(e) => {
              handleFormData(e);
            }}
            type="email"
            name="email"
            id="_email"
            placeholder="admin@school.com"
            required
            className="w-full h-10 bg-surface-2 placeholder:text-muted border border-border rounded-input focus:outline-none px-8 focus:border-admin focus:shadow-admin-inpiut"
          />
          <div className="absolute -translate-y-1/2 top-1/2 left-2.5">
            <MailIcon size={14} />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-medium">
          <label htmlFor="_password">Password</label>
          <button className="text-admin ">Forget password?</button>
        </div>
        <div className="relative text-xs flex items-center justify-center mt-0.5">
          <input
            onChange={(e) => {
              handleFormData(e);
            }}
            type={inputType}
            name="password"
            id="_password"
            placeholder="••••••••"
            required
            className="w-full h-10 bg-surface-2 placeholder:text-muted border border-border rounded-input focus:outline-none px-8 focus:border-admin focus:shadow-admin-inpiut"
          />
          <div className="absolute -translate-y-1/2 top-1/2 left-2.5">
            <LockIcon size={14} />
          </div>
          <div className="absolute -translate-y-1/2 top-1/2 right-2.5 cursor-pointer">
            {inputType === "password" ? (
              <button
                type="button"
                onClick={() => {
                  setInputType("text");
                }}
              >
                <EyeOffIcon size={14} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setInputType("password");
                }}
              >
                <EyeIcon size={14} />
              </button>
            )}
          </div>
        </div>
        <div className="text-size-base text-muted mt-3 flex items-center gap-x-1">
          <input type="checkbox" />
          Remember me for 7 days
        </div>
        <button className="w-full h-10 flex items-center justify-center gap-1.5 rounded-btn bg-admin text-white  cursor-pointer hover:-translate-y-0.5 mt-3 font-medium transition-all duration-(--duration-fast) ease-in">
          <div>
            <LoginIcon size={16} />
          </div>
          <div>Sign in as a Admin</div>
        </button>
        <div className="text-xs text-muted-2 w-full h-fit flex gap-1 items-center justify-center mt-6">
          <span>Don't have an account?</span>

          <span className="text-admin"> Register here</span>
        </div>
      </form>
    </div>
  );
};
