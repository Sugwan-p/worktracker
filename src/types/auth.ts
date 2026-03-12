export type AuthInputProps = {
  placeholder: string;
  type?: 'text' | 'password' | 'email';
};

export type AppTextProps = {
  text: string;
  className?: string;
};

export type AuthButtonProps = {
  text: string;
  onClick?: () => void;
};

export type LoginActionRowProps = {
  leftText: string;
  rightText: string;
};