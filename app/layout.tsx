import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Contract Work Tracker',
  description: '출퇴근 기록 앱',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
