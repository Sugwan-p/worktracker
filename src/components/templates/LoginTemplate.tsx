import LoginFormSection from '../organisms/LoginFormSection';

const LoginTemplate = () => {
  return (
    <main className="min-h-screen bg-sky-100">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#f7f8fb]">
        <LoginFormSection />
      </div>
    </main>
  );
};

export default LoginTemplate;