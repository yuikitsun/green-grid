import './PopUps.css'; 

interface Props {
  time: string;
  destiny: string;
  street: string;
  date: string;
}

function PopUps({ time, destiny, street, date }: Props) {
  return (
    <div className="popup">
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Destiny:</strong> {destiny}</p>
        <p><strong>Street:</strong> {street}</p>
        <p><strong>Date:</strong> {date}</p>
    </div>
  )
}

export default PopUps
