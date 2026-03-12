import AppLogo from '../atoms/AppLogo';
import AppText from '../atoms/AppText';
import AuthButton from '../atoms/AuthButton';
import AuthInputGroup from '../molecules/AuthInputGroup';
import LoginActionRow from '../molecules/LoginActionRow';
import { LOGIN_TEXT } from '../../constants/login';

const LoginFormSection = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-6 py-10">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <AppLogo />
          <AppText
            className="mt-8 text-center text-[26px] font-semibold tracking-[-0.02em] text-slate-900"
            text={LOGIN_TEXT.title}
          />
        </div>

        <div className="mt-20">
          <AuthInputGroup />
        </div>

        <div className="mt-10">
          <AuthButton text={LOGIN_TEXT.loginButton} />
        </div>

        <div className="mt-8">
          <LoginActionRow
            leftText={LOGIN_TEXT.signUp}
            rightText={LOGIN_TEXT.findPassword}
          />
        </div>
      </div>
    </section>
  );
};

export default LoginFormSection;