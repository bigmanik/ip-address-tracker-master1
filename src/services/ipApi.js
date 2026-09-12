const IPGEO_KEY = import.meta.env.VITE_IPGEO_KEY;

// Gets the visitor's own public IP address
export async function getMyIP() {
  const res = await fetch("https://api.ipify.org?format=json");
  if (!res.ok) throw new Error("Failed to fetch IP");
  const data = await res.json();
  return data.ip;
}

// Looks up location/ISP info for a given IP or domain
export async function getIPInfo(query) {
  const res = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEO_KEY}&ip=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to fetch IP info");
  return res.json();
}