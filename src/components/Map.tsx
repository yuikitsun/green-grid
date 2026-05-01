import { useEffect, useState } from 'react';
import TrafficLight from './traffic/TrafficLight';
import PopUps from './popUps/PopUps';
import video1 from '../assets/WhatsApp Video 2026-04-19 at 23.18.00.mp4';
import video2 from '../assets/WhatsApp Video 2026-04-19 at 23.18.01.mp4';
import video3 from '../assets/WhatsApp Video 2026-04-19 at 23.18.08].mp4';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Map.css';

const Map = () => {
    const [roadInfo, setRoadInfo] = useState({ time: 10, destiny: "Baku", name: "Main Road" });
    const videos = [
        video1,
        video2,
        video3
    ];
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const getRandomVideo = () => {
        const randomIndex = Math.floor(Math.random() * videos.length);
        return videos[randomIndex];
    };
    const [time, setTime] = useState(
        new Date().toLocaleTimeString([], { hour12: false })
    );
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour12: false }));
        }, 1000);

        return () => clearInterval(interval);
        }, 
    []);

    const center = { lat: 40.4093, lng: 49.8671 }; // Баку

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC_w6VnBcdPRnHKnDxOtrMC1OBYZdMJJAU"
    });
    if (!isLoaded) {
        return <div>Загрузка карты Баку...</div>;
    }

  return (
    <div className="map-container">
        <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100vh' }}
        center={center}
        zoom={12}
      >
        {/* Ваши маркеры */}
      </GoogleMap>
        <div className="map-placeholder">
            <button onClick={() => setActiveVideo(getRandomVideo())}> 
                Показать видео с камеры
            </button>
        </div>
        {activeVideo && (
            <TrafficLight 
            key={activeVideo}
            videoUrl={activeVideo} 
            onClose={() => setActiveVideo(null)} 
            />
        )}
        <PopUps
            time={time}
            destiny={roadInfo.destiny}
            street={roadInfo.name}
            date={new Date().toLocaleDateString()}>
        </PopUps>
    </div>
  );
};

export default Map;