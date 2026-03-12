import { AuthInputProps } from '../../types/auth';

const AuthInput = ({ placeholder, type = 'text' }: AuthInputProps) => {
  return (
    <input
      className="h-[52px] w-full border-none bg-transparent px-5 text-[17px] text-slate-700 outline-none placeholder:text-slate-400"
      placeholder={placeholder}
      type={type}
    />
  );
};

export default AuthInput;
