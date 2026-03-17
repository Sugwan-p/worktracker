type AppIconProps = {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
};

const AppIcon = ({ src, alt = '', size = 24, className = '' }: AppIconProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
};

export default AppIcon;