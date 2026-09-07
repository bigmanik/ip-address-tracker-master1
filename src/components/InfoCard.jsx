import InfoItem from "./InfoItem";

function InfoCard({ ip, location, timezone, isp }) {
  return (
    <div className="relative z-10 -mt-16 md:-mt-10 mx-4 md:mx-auto md:max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row ">
      <InfoItem label="IP Address" value={ip} />
      <InfoItem label="Location" value={location} />
      <InfoItem label="Timezone" value={timezone} />
      <InfoItem label="ISP" value={isp} />
    </div>
  );
}

export default InfoCard;