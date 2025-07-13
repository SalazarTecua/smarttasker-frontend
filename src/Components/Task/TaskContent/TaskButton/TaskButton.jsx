export default function TaskButton({ variant = "edit", IconButton }) {
  const baseClasses = "text-[#a1a1aa] transition-colors p-1 rounded";
  const variantClasses = {
    edit: "hover:text-white hover:bg-[#2a2a4a]",
    delete: "hover:text-[#ff4757] hover:bg-[#2a2a4a]",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={IconButton} />
      </svg>
    </button>
  );
}