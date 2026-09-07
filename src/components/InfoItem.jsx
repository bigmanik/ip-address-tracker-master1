function InfoItem({ label, value }) {
  return (
    <div className="px-6 py-4 md:py-6 text-center md:text-left">
      <p className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase mb-1">
        {label}
      </p>
      <p className="text-lg md:text-xl font-bold text-gray-900 break-words">
        {value}
      </p>
    </div>
  );
}

export default InfoItem;