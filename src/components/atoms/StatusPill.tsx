import Image from 'next/image';

type StatusPillProps = {
  text: string;
  leftIconSrc: string;
  rightIconSrc: string;
};

const StatusPill = ({
  text,
  leftIconSrc,
  rightIconSrc,
}: StatusPillProps) => {
  return (
    <button
      className="flex min-h-[62px] w-full items-center justify-between rounded-[18px] bg-gradient-to-br from-[#73addf] to-[#6aa7dc] px-[22px] shadow-[0_6px_16px_rgba(0,0,0,0.12)] max-[360px]:px-[18px]"
      type="button"
    >
      <div className="flex items-center gap-[14px]">
        <Image
          src={leftIconSrc}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6"
          aria-hidden="true"
        />

        <span className="text-[clamp(16px,4vw,18px)] font-bold tracking-[-0.03em] text-white">
          {text}
        </span>
      </div>

      <Image
        src={rightIconSrc}
        alt=""
        width={22}
        height={22}
        className="h-[22px] w-[22px]"
        aria-hidden="true"
      />
    </button>
  );
};

export default StatusPill;