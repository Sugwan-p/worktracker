'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthInput from '../atoms/signup/AuthInput';
import AuthPrimaryButton from '../atoms/AuthPrimaryButton';
import { signUpWithEmailPasswordApi } from '../../../api/authApi';

const SignupForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateSignupForm = () => {
    if (!email.trim()) {
      return '이메일을 입력해주세요.';
    }

    if (!password.trim()) {
      return '비밀번호를 입력해주세요.';
    }

    if (!name.trim()) {
      return '이름을 입력해주세요.';
    }

    if (password.trim().length < 6) {
      return '비밀번호는 6자 이상이어야 합니다.';
    }

    return '';
  };

  const handleSubmitSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationMessage = validateSignupForm();

    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage('');

      await signUpWithEmailPasswordApi(email, password, name);

      router.push('/');
    } catch (error: unknown) {
      console.error(error);
      setErrorMessage('회원가입에 실패했습니다. 다시 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmitSignup}>
      <div className="rounded-[24px] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <AuthInput
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={setEmail}
        />

        <AuthInput
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={setPassword}
        />

        <AuthInput
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={setName}
          isLast
        />
      </div>

      {errorMessage ? (
        <p className="mt-3 text-[14px] font-medium text-red-500">
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-10">
        <AuthPrimaryButton
          text={isLoading ? '회원가입 중...' : '회원가입'}
          type="submit"
          disabled={isLoading}
        />
      </div>
    </form>
  );
};

export default SignupForm;