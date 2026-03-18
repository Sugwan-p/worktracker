type AuthPrimaryButtonProps = {
  text: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const AuthPrimaryButton = ({
  text,
  type = 'button',
  disabled = false,
}: AuthPrimaryButtonProps) => {
  return (
    <button
      className="flex h-[68px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#18b2ef] to-[#2f7df0] text-[20px] font-bold text-white shadow-[0_14px_28px_rgba(47,125,240,0.24)] transition-transform duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default AuthPrimaryButton;