export const Badge = ({ icon, number, text, bg_color, text_color }) => {
  return (
    <div
      className={`w-fit h-fit px-1 py-px text-size-xs font-semibold flex items-center justify-center gap-x-0.5 rounded-modal ${bg_color} ${text_color} `}
    >
      <div>{icon}</div>
      <div>{number}</div>
      <div>{text}</div>
    </div>
  );
};
