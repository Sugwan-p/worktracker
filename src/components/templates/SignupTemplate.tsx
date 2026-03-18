import SignupFormSection from '../organisms/SignupFormSection';

const SignupTemplate = () => {
  return (
    <main className="min-h-screen bg-sky-100">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#f7f8fb]">
        <SignupFormSection />
      </div>
    </main>
  );
};

export default SignupTemplate;