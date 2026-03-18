type AuthSubLinkProps = {
  text: string;
  onClick: () => void;
};

const AuthSubLink = ({ text, onClick }: AuthSubLinkProps) => {
  return (
    <button
      className="text-[15px] font-semibold text-[#169cf0]"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AuthSubLink;