'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SignupForm from '../molecules/SignupForm';
import AuthSubLink from '../atoms/AuthSubLink';

const SignupFormSection = () => {
  const router = useRouter();

  const handleMoveLogin = () => {
    router.push('/login');
  };

  return (
    <section className="flex min-h-screen flex-col px-6 pt-[88px]">
      <div className="mb-12 flex flex-col items-center">
        <div className="mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-gradient-to-br from-[#19b5f1] to-[#2f7df0] shadow-[0_12px_24px_rgba(47,125,240,0.28)]">
          <Image
            src="/icons/icon-home-outline.svg"
            alt="앱 로고"
            width={36}
            height={36}
          />
        </div>

        <h1 className="text-center text-[24px] font-extrabold leading-[1.3] tracking-[-0.03em] text-[#111827]">
          회원가입
        </h1>

        <p className="mt-2 text-center text-[15px] font-medium text-[#94a3b8]">
          이메일, 비밀번호, 이름을 입력해주세요
        </p>
      </div>

      <SignupForm />

      <div className="mt-8 flex items-center justify-center">
        <AuthSubLink text="이미 계정이 있으신가요? 로그인" onClick={handleMoveLogin} />
      </div>
    </section>
  );
};

export default SignupFormSection;