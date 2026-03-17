import Image from 'next/image';

type PrimaryButtonProps = {
  text: string;
  leftIconSrc?: string;
};

const PrimaryButton = ({ text, leftIconSrc }: PrimaryButtonProps) => {
  return (
    <button
      className="min-h-[54px] w-full rounded-full bg-gradient-to-br from-[#7db8ec] to-[#6dafe9] shadow-[0_6px_14px_rgba(70,136,206,0.24)]"
      type="button"
    >
      <div className="flex items-center justify-center gap-[14px] text-[clamp(16px,4vw,18px)] font-bold text-white">
        {leftIconSrc ? (
          <Image
            src={leftIconSrc}
            alt=""
            width={23}
            height={23}
            className="h-[23px] w-[23px]"
            aria-hidden="true"
          />
        ) : null}

        <span>{text}</span>
      </div>
    </button>
  );
};

export default PrimaryButton;