import StatusPill from '../atoms/StatusPill';

const GpsStatusCard = () => {
  return (
    <div className="mb-4">
      <StatusPill
        text="GPS 확인중..."
        leftIconSrc="/icons/icon-location.svg"
        rightIconSrc="/icons/icon-chevron-right.svg"
      />
    </div>
  );
};

export default GpsStatusCard;