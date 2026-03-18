'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { signInWithEmailPasswordApi } from '../../../api/authApi';

const LoginFormSection = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleMoveSignup = () => {
    router.push('/signup');
  };

  const handleSubmitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setErrorMessage('이메일을 입력해주세요.');
      return;
    }

    if (!password.trim()) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage('');

      await signInWithEmailPasswordApi(email, password);

      router.push('/commute');
    } catch (error: unknown) {
      console.error(error);
      setErrorMessage('로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center px-6 pt-[120px]">
      <div className="mb-10 flex flex-col items-center">
        <div className="mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-gradient-to-br from-[#19b5f1] to-[#2f7df0] shadow-[0_12px_24px_rgba(47,125,240,0.28)]">
          <Image
            src="/icons/icon-home-outline.svg"
            alt="앱 로고"
            width={36}
            height={36}
          />
        </div>

        <h1 className="text-[24px] font-extrabold text-[#111827]">
          Contract Work Tracker
        </h1>
      </div>

      <form className="w-full" onSubmit={handleSubmitLogin}>
        <div className="rounded-[24px] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
          <div className="border-b border-[#e5e7eb] py-4">
            <input
              className="w-full border-none bg-transparent text-[18px] text-[#111827] outline-none placeholder:text-[#b1bccb]"
              type="email"
              placeholder="이메일 입력"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="py-4">
            <input
              className="w-full border-none bg-transparent text-[18px] text-[#111827] outline-none placeholder:text-[#b1bccb]"
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        {errorMessage ? (
          <p className="mt-3 text-[14px] font-medium text-red-500">
            {errorMessage}
          </p>
        ) : null}

        <button
          className="mt-10 flex h-[68px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#18b2ef] to-[#2f7df0] text-[20px] font-bold text-white shadow-[0_14px_28px_rgba(47,125,240,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? '로그인 중...' : '로그인'}
        </button>

        <div className="mt-10 flex items-center justify-between px-5">
          <button
            className="text-[15px] font-semibold text-[#169cf0]"
            type="button"
            onClick={handleMoveSignup}
          >
            회원가입
          </button>

          <button
            className="text-[15px] font-semibold text-[#169cf0]"
            type="button"
          >
            비밀번호 찾기
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginFormSection;