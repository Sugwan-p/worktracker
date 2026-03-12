import AuthInput from '../atoms/AuthInput';
import { LOGIN_TEXT } from '../../constants/login';

const AuthInputGroup = () => {
  return (
    <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <AuthInput placeholder={LOGIN_TEXT.emailPlaceholder} type="email" />
      <div className="mx-5 h-px bg-slate-200" />
      <AuthInput placeholder={LOGIN_TEXT.passwordPlaceholder} type="password" />
    </div>
  );
};

export default AuthInputGroup;
