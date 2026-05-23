export const StatCardContainer = ({
  fromColor,
  viaColor,
  toColor,
  content,
}) => {
  return (
    <div className="relative w-full group h-44 bg-surface border border-border rounded-card px-3 py-4 flex flex-col items-start transition-all duration-(--duration-fast) ease-in overflow-hidden hover:-translate-y-0.5 hover:shadow-card-hover">
      <span
        className={`absolute top-0 left-0 w-full h-[1.5px] bg-linear-to-r ${fromColor} ${viaColor} ${toColor} invisible group-hover:visible transition-all duration-(--duration-fast) ease-in`}
      />
      {content}
    </div>
  );
};
