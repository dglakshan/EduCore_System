import { BellFilledIcon, ProfileIcon } from "./Icons";
import { ThemeSwitch } from "./RoleLoginComponets/Theme/ThemeSwitch";

export const TopBar = ({ name }) => {
  return (
    <div className="w-full h-14 bg-topbar glass shadow-topbar flex items-center justify-between px-5">
      <div className="text-text text-size-lg font-bold">{name}</div>

      <div className="w-fit h-fit flex gap-x-4">
        <div className="w-9 h-9 rounded-avatar border border-border flex items-center justify-center">
          <ProfileIcon />
        </div>
        <div className="w-9 h-9 rounded-btn border border-border hover:border-teacher-border flex items-center justify-center">
          <BellFilledIcon />
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
