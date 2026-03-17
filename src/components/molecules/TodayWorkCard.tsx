import SectionTitle from '../atoms/SectionTitle';

type TodayWorkCardProps = {
  title: string;
  value: string;
};

const TodayWorkCard = ({ title, value }: TodayWorkCardProps) => {
  return (
    <section className="mb-[26px] flex min-h-[86px] w-full items-center justify-between gap-3 rounded-[20px] bg-white px-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] max-[360px]:px-[18px]">
      <SectionTitle title={title} />

      <strong className="whitespace-nowrap text-[clamp(18px,4.6vw,20px)] font-extrabold leading-[1.3] tracking-[-0.03em] text-[#3f73b8]">
        {value}
      </strong>
    </section>
  );
};

export default TodayWorkCard;