import { House } from 'lucide-react';

const AppLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-500 shadow-[0_10px_25px_rgba(59,130,246,0.25)]">
        <House className="h-9 w-9 text-white" strokeWidth={2.2} />
      </div>
    </div>
  );
};

export default AppLogo;