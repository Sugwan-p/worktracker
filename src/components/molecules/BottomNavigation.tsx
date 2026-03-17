import Image from 'next/image';

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 grid h-[82px] w-full max-w-[430px] -translate-x-1/2 grid-cols-4 items-center rounded-t-[20px] bg-[rgba(255,255,255,0.94)] px-[14px] pb-[calc(env(safe-area-inset-bottom)+4px)] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
      <button
        className="flex h-full items-center justify-center"
        type="button"
        aria-label="홈"
      >
        <Image
          src="/icons/icon-nav-home.svg"
          alt="홈"
          width={28}
          height={28}
          className="h-7 w-7 opacity-95"
        />
      </button>

      <button
        className="flex h-full items-center justify-center"
        type="button"
        aria-label="목록"
      >
        <Image
          src="/icons/icon-nav-stack.svg"
          alt="목록"
          width={28}
          height={28}
          className="h-7 w-7 opacity-95"
        />
      </button>

      <button
        className="flex h-full items-center justify-center"
        type="button"
        aria-label="기록"
      >
        <Image
          src="/icons/icon-nav-clock.svg"
          alt="기록"
          width={28}
          height={28}
          className="h-7 w-7 opacity-95"
        />
      </button>

      <button
        className="flex h-full items-center justify-center"
        type="button"
        aria-label="마이페이지"
      >
        <Image
          src="/icons/icon-nav-user.svg"
          alt="마이페이지"
          width={28}
          height={28}
          className="h-7 w-7 opacity-95"
        />
      </button>
    </nav>
  );
};

export default BottomNavigation;