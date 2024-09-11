
import { Card } from 'react-bootstrap';

// Define the types for the player props
interface PlayerProps {
  name: string;
  team: string;
  nationality: string;
  jerseyNumber: number;
  age: number;
  imageUrl: string;
}

// Destructue the player props
const Player = ({
  name,
  team,
  nationality,
  jerseyNumber,
  age,
  imageUrl
}: PlayerProps) => {

  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={imageUrl} style={{ width: "300px", height: "400px", objectFit: "cover"}} />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold"}}>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
        <Card.Text>
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Define default props
Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
