import { useEffect, useState } from 'react'
import Header from './components/Header'
import InfoCard from './components/InfoCard'
import Map from './components/Map'
import { getMyIP, getIPInfo } from './services/ipApi'






function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleSearch(query) {
    try {
      setLoading(true);
      setError(null);
      const info = await getIPInfo(query);
      setData(info);
    } catch (err) {
      setError("Couldn't find that IP or domain.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // On first load, look up the visitor's own IP
    async function loadInitial() {
      try {
        const myIP = await getMyIP();
        await handleSearch(myIP);
      } catch (err) {
        setError("Couldn't load IP info.");
        setLoading(false);
      }
    }
    loadInitial();
  }, []);


  return (
    
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} />

      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      {data && (
        <>
          <InfoCard
            ip={data.ip}
            location={`${data.city}, ${data.state_prov} ${data.zipcode}`}
            timezone={`UTC ${data.time_zone?.offset >= 0 ? "+" : ""}${data.time_zone?.offset}:00`}
            isp={data.isp}
          />
          <Map
            lat={parseFloat(data.latitude)}
            lng={parseFloat(data.longitude)}
          />
        </>
      )}
    </div>
  )
}

export default App
