import './TrafficLight.css';

interface TrafficLightProps {
  key: string;
  videoUrl: string;
  onClose: () => void;
}

const TrafficLight = ({ videoUrl, onClose }: TrafficLightProps) => {
  return (
    <div className="traffic-light-overlay">
      <div className="traffic-light-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <video autoPlay width="100%">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default TrafficLight;