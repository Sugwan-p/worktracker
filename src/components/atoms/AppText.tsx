import { AppTextProps } from '../../types/auth';

const AppText = ({ text, className = '' }: AppTextProps) => {
  return <p className={className}>{text}</p>;
};

export default AppText;
