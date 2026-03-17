import PrimaryButton from '../atoms/PrimaryButton';

type TimeCardProps = {
  currentTime: string;
  buttonText: string;
};

const TimeCard = ({ currentTime, buttonText }: TimeCardProps) => {
  return (
    <section className="mb-[22px] flex min-h-[264px] w-full flex-col justify-center gap-[26px] rounded-[22px] bg-gradient-to-br from-[#5ca2e3] to-[#4f90d8] px-6 pb-[22px] pt-7 shadow-[0_6px_16px_rgba(0,0,0,0.12)] max-[360px]:min-h-[240px] max-[360px]:px-[18px] max-[360px]:pb-[18px] max-[360px]:pt-6">
      <div className="text-center text-[clamp(48px,12vw,58px)] font-light leading-none tracking-[-0.05em] text-white">
        {currentTime}
      </div>

      <PrimaryButton
        text={buttonText}
        leftIconSrc="/icons/icon-home-outline.svg"
      />
    </section>
  );
};

export default TimeCard;