interface BlueButtonProps {
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
}
const BlueButton = ({ onClick, icon, label }: BlueButtonProps) => {
  return (
    <button
      className="bg-[#014DAF] border rounded-[4px] border-gray-300 text-white text-xs font-medium flex items-center gap-2 py-2 px-2"
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default BlueButton;
