type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="m-0 text-[clamp(18px,4.6vw,20px)] font-extrabold leading-[1.3] tracking-[-0.03em] text-[#111111]">
      {title}
    </h2>
  );
};

export default SectionTitle;