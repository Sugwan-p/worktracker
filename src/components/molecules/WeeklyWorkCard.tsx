import SectionTitle from '../atoms/SectionTitle';

type WeeklyWorkItem = {
  dayLabel: string;
  startTime: string;
  endTime: string;
};

type WeeklyWorkCardProps = {
  title: string;
  weeklyWorkList: WeeklyWorkItem[];
};

const WeeklyWorkCard = ({
  title,
  weeklyWorkList,
}: WeeklyWorkCardProps) => {
  // 👉 오늘 요일 index (월:0 ~ 금:4)
  const getTodayIndex = () => {
    const today = new Date().getDay(); // 일:0 ~ 토:6

    if (today === 0 || today === 6) return -1; // 주말 제외

    return today - 1;
  };

  const todayIndex = getTodayIndex();

  return (
    <section className="mb-[22px] w-full rounded-[22px] bg-white px-6 pb-[18px] pt-[22px] shadow-[0_6px_16px_rgba(0,0,0,0.12)] max-[360px]:px-[18px] max-[360px]:pb-4 max-[360px]:pt-5">
      
      {/* 헤더 */}
      <div className="flex items-center justify-between gap-3">
        <SectionTitle title={title} />
      </div>

      {/* 상단 구분선 */}
      <div className="my-[18px] h-px w-full bg-[rgba(17,17,17,0.16)]" />

      {/* 요일 grid */}
      <div className="relative">
        <div className="grid grid-cols-5 gap-2 max-[360px]:gap-1">
          {weeklyWorkList.map((workItem) => {
            return (
              <div
                className="flex min-w-0 flex-col items-center gap-2"
                key={workItem.dayLabel}
              >
                <span className="text-[clamp(15px,3.8vw,18px)] font-bold text-[#111111]">
                  {workItem.dayLabel}
                </span>

                <span className="text-[clamp(14px,3.6vw,16px)] text-[#202020]">
                  {workItem.startTime}
                </span>

                <span className="text-[clamp(14px,3.6vw,16px)] text-[#202020]">
                  {workItem.endTime}
                </span>
              </div>
            );
          })}
        </div>

        {/* ✅ 오늘 표시 바 */}
        {todayIndex !== -1 && (
  <div
    className="absolute bottom-[-6px] h-1 w-[28px] rounded-full bg-[#111111]"
    style={{
      left: `calc(${(100 / 5) * todayIndex + (100 / 5) / 2}% - 14px)`,
    }}
  />
)}
      </div>

      {/* 하단 구분선 */}
      <div className="mt-4 h-px w-full bg-[rgba(17,17,17,0.16)]" />
    </section>
  );
};

export default WeeklyWorkCard;