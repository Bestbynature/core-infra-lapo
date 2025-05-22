interface WhiteButtonProps {
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
}
const WhiteButton = ({ onClick, icon, label }: WhiteButtonProps) => {
  return (
    <button
      className="bg-white border rounded-[4px] border-gray-300 text-[#344054] text-xs font-medium flex items-center gap-2 py-2 px-2 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default WhiteButton;
