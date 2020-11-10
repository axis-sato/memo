const Tag: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <span
      className={`${
        className ?? ""
      } text-sm font-medium bg-gray-200 py-1 px-2 rounded text-grey-500 align-middle`}
    >
      {children}
    </span>
  );
};

export default Tag;
