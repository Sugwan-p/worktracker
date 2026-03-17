'use client';

import Image from 'next/image';
import BottomNavigation from '../molecules/BottomNavigation';
import GpsStatusCard from '../molecules/GpsStatusCard';
import TimeCard from '../molecules/TimeCard';
import TodayWorkCard from '../molecules/TodayWorkCard';
import WeeklyWorkCard from '../molecules/WeeklyWorkCard';
import { weeklyWorkList } from '../../constants/weeklyWorkData';

const CommuteHomeSection = () => {
  return (
    <main className="min-h-screen bg-[#f7f8fb]">
      <section className="w-full px-4 pb-[120px] pt-6 max-[360px]:px-[14px] max-[360px]:pb-[116px] max-[360px]:pt-5">
        <header className="mb-5 flex items-center gap-3 pt-1">
          <button
            className="flex h-7 w-7 shrink-0 items-center justify-center"
            type="button"
            aria-label="뒤로가기"
          >
            <Image
              src="/icons/icon-arrow-left.svg"
              alt="뒤로가기"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>

          <h1 className="m-0 text-[clamp(20px,5vw,24px)] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#111111]">
            2026.03.14 (토)
          </h1>
        </header>

        <GpsStatusCard />

        <TimeCard currentTime="07 : 12" buttonText="출근하기" />

        <TodayWorkCard title="오늘 근무 시간" value="6시간 24분" />

        <WeeklyWorkCard
        title="이번주 근무"
        weeklyWorkList={weeklyWorkList}
        />

        <WeeklyWorkCard
        title="이번주 근무 시간"
        weeklyWorkList={weeklyWorkList}
        />
      </section>

      <BottomNavigation />
    </main>
  );
};

export default CommuteHomeSection;