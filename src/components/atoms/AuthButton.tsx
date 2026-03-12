import { AuthButtonProps } from '../../types/auth';

const AuthButton = ({ text, onClick }: AuthButtonProps) => {
  return (
    <button
      className="h-[64px] w-full rounded-full bg-linear-to-r from-sky-400 to-blue-500 text-[20px] font-semibold text-white shadow-[0_12px_24px_rgba(96,165,250,0.35)] transition-transform duration-200 active:scale-[0.98]"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default AuthButton;