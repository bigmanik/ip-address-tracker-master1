import { ChevronRight } from "lucide-react";


function Header() {
  return (
   <header className="header-bg  bg-cover bg-center bg-no-repeat pt-8 sm:pt-10 pb-24 sm:pb-28 px-4 text-center">
  <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
    IP Address Tracker
  </h1>

  <form className="max-w-xl mx-auto flex">
    <input
      type="text"
      placeholder="Search for any IP address or domain"
      className="bg-white  flex-1 min-w-0 rounded-l-2xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-gray-900 outline-none"
    />
    <button
      type="submit"
      aria-label="Search"
      className="bg-gray-900 hover:bg-gray-700 transition-colors rounded-r-2xl px-4 sm:px-5 flex items-center justify-center shrink-0"
    >
      <ChevronRight className="w-5 h-5 text-white" />
    </button>
  </form>
</header>
  );
}

export default Header;