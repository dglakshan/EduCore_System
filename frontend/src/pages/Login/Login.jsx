import { useState } from "react";
import { AdminCard } from "../../assets/components/common/RoleLoginComponets/Admin";

export const Login = () => {
  const [role, selectRole] = useState("");
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div></div>
      <AdminCard />
    </section>
  );
};
