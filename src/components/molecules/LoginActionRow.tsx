import AppText from '../atoms/AppText';
import { LoginActionRowProps } from '../../types/auth';

const LoginActionRow = ({ leftText, rightText }: LoginActionRowProps) => {
  return (
    <div className="flex items-center justify-between px-5">
      <button className="text-left" type="button">
        <AppText
          className="text-[16px] font-semibold text-sky-500"
          text={leftText}
        />
      </button>

      <button className="text-right" type="button">
        <AppText
          className="text-[16px] font-semibold text-sky-500"
          text={rightText}
        />
      </button>
    </div>
  );
};

export default LoginActionRow;
