import { useEffect, useState } from "react";
import {
  AdminCard,
  AdminLoginForm,
} from "../../assets/components/common/RoleLoginComponets/Admin";
import { ThemeSwitch } from "../../assets/components/common/RoleLoginComponets/Theme/ThemeSwitch";
import {
  ArrowLeftIcon,
  EduCenterLogo,
  LoginIcon,
  ShieldIcon,
} from "../../assets/components/common/Icons";
import {
  TeacherCard,
  TeacherLoginForm,
} from "../../assets/components/common/RoleLoginComponets/Theacher";
import {
  StudentCard,
  StudentLoginForm,
} from "../../assets/components/common/RoleLoginComponets/Student";

export const Login = () => {
  const [role, setRole] = useState("");
  const [active, setActive] = useState(false);

  const ChangeRole = () => {
    setRole("");
    setActive(false);
  };

  const renderdLoginForm = () => {
    switch (role) {
      case "admin":
        return <AdminLoginForm />;

      case "teacher":
        return <TeacherLoginForm />;

      case "student":
        return <StudentLoginForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center bg-bg">
      {/* Topbar */}
      <div className="glass w-full h-16 bg-topbar z-100 sticky top-0 shadow-topbar flex items-center justify-between">
        <div className="mx-main-m">
          <EduCenterLogo />
        </div>
        <div className="mx-main-m flex gap-x-1 items-center">
          {active && (
            <button
              onClick={() => {
                ChangeRole();
              }}
              className="w-fit h-fit text-size-sm rounded-card-sm border border-border text-muted hover:border-border-2 hover:text-text"
            >
              <div className="flex items-center gap-1 p-2">
                <div>
                  <ArrowLeftIcon size={14} />
                </div>
                <div className="uppercase">Change Role</div>
              </div>
            </button>
          )}
          <ThemeSwitch />
        </div>
      </div>

      {/* Main content */}
      <main className="w-full h-full">
        {!active ? (
          <div className="w-full h-full flex flex-col gap-y-4 items-center pt-10 pb-10 overflow-auto animate-fade-up">
            <span className="w-fit h-fit px-5 py-1 flex items-center justify-center font-medium rounded-btn text-size-sm gap-x-1 text-admin bg-admin-muted border border-admin-border">
              <ShieldIcon />
              <p>EduCore School Management</p>{" "}
            </span>
            <span className="flex flex-col">
              <h1 className="text-size-4xl font-black text-text flex flex-col items-center font-custom-display ">
                <span className="h-10"> Step in.</span>
                <span className="text-gradient-brand">
                  {" "}
                  Your portal is waiting.
                </span>
              </h1>
              <p className="flex flex-col items-center justify-center gap-1 text-muted-2 text-size-base tracking-wide">
                <span>
                  Each portal is tailored to your role and responsibilities.
                </span>
                <span>Choose yours to continue.</span>
              </p>
            </span>

            <span className="w-full mt-10 flex-wrap flex md:flex-nowrap items-center gap-grid-gap justify-center ">
              <AdminCard
                onClick={() => {
                  setRole("admin");
                  setActive(true);
                }}
              />
              <TeacherCard
                onClick={() => {
                  setRole("teacher");
                  setActive(true);
                }}
              />
              <StudentCard
                onClick={() => {
                  setRole("student");
                  setActive(true);
                }}
              />
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-screen">
            {renderdLoginForm()}
          </div>
        )}
      </main>
    </div>
  );
};
