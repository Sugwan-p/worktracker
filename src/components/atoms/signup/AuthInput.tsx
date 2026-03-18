type AuthInputProps = {
  type?: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isLast?: boolean;
};

const AuthInput = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  isLast = false,
}: AuthInputProps) => {
  const borderClassName = isLast ? '' : 'border-b border-[#e7ecf3]';

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`py-4 ${borderClassName}`}>
      <input
        className="w-full border-none bg-transparent text-[18px] font-medium text-[#111827] outline-none placeholder:text-[#b1bccb]"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
};

export default AuthInput;