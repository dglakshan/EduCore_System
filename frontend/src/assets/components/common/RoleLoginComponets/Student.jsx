import { useState } from "react";
import { login } from "../../services/authService";
import {
  ArrowRightIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  LoginIcon,
  MailIcon,
  StudentCapIcon,
} from "../Icons";

export const StudentCard = ({ onClick }) => {
  return (
    <section
      onClick={onClick}
      className="flex flex-col group gap-4 py-8 px-6 h-rolecard-h md:h-rolecard-h-md w-rolecard-w md:w-rolecard-w-md border border-border rounded-card-lg hover:border-student-border hover:shadow-glow-teal hover:bg-linear-to-br from-student-gradient-from to-transparent hover:-translate-y-1 bg-surface transition-all duration-(--duration-base) ease-in  "
    >
      <div className="w-14 h-14 rounded-icon border flex items-center justify-center bg-student-muted text-student border-student-border">
        <StudentCapIcon size={26} />
      </div>
      <div className="uppercase text-size-sm text-student font-bold tracking-wide">
        Student
      </div>
      <div className="text-size-xl font-extrabold text-text leading-1">
        Student Portal
      </div>
      <div className="text-size-sm tracking-wide text-muted">
        View your results, attendance record, timetable and upcoming assignments
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-avatar bg-student" />
          <div className="text-size-sm text-muted">Exam results & grades</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-avatar bg-student" />
          <div className="text-size-sm text-muted">Attendance record</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-avatar bg-student" />
          <div className="text-size-sm text-muted">Timetable & notices</div>
        </div>
      </div>
      <div className="w-full h-px bg-border mt-4 " />
      <div className="w-full h-fit mt-3 flex justify-between items-center">
        <div className="text-size-sm text-student font-medium invisible group-hover:translate-x-1 group-hover:visible transition-all duration-(--duration-fast) ease-in">
          Continue as Student
        </div>
        <div className="w-fit h-fit rounded-chip p-1.5 text-student bg-admin-muted group-hover:translate-x-1 transition-all duration-(--duration-base) ease-in">
          <ArrowRightIcon size={14} />
        </div>
      </div>
    </section>
  );
};

export const StudentLoginForm = () => {
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
    <div className="w-loginbox-w h-loginbox-h flex flex-col gap-y-5 rounded-card-lg shadow-card border border-border p-8 bg-surface animate-fade-up">
      <div className="w-14 h-14 rounded-icon border flex items-center justify-center bg-student-muted text-student border-student-border">
        <StudentCapIcon size={26} />
      </div>
      <div className="w-fit h-fit px-2 py-1 bg-student-muted text-student text-size-sm rounded-card-lg border border-student-border">
        Student Portal
      </div>
      <div className="text-size-2xl text-text font-extrabold leading-5">
        Student Sign In
      </div>
      <div className="text-xs text-muted-2 leading-0">
        View your results, attendance, timetable and assignments.
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
            placeholder="student@school.com"
            required
            className="w-full h-10 bg-surface-2 placeholder:text-muted border border-border rounded-input focus:outline-none px-8 focus:border-student focus:shadow-student-inpiut"
          />
          <div className="absolute -translate-y-1/2 top-1/2 left-2.5">
            <MailIcon size={14} />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-medium">
          <label htmlFor="_password">Password</label>
          <button className="text-student ">Forget password?</button>
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
            className="w-full h-10 bg-surface-2 placeholder:text-muted border border-border rounded-input focus:outline-none px-8 focus:border-student focus:shadow-student-inpiut"
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
          Remember me
        </div>
        <button className="w-full h-10 flex items-center justify-center gap-1.5 rounded-btn bg-student text-white  cursor-pointer hover:-translate-y-0.5 mt-3 font-medium transition-all duration-(--duration-fast) ease-in">
          <div>
            <LoginIcon size={16} />
          </div>
          <div>Sign in as a Student</div>
        </button>
        <div className="text-xs text-muted-2 w-full flex items-center justify-center h-fit mt-6">
          <span className="text-muted-2">
            Problems signing in? Contact your{" "}
            <span className="text-admin">class teacher</span> or admin.
          </span>
        </div>
      </form>
    </div>
  );
};
