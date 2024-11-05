import { Avatar, Card, Button, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

//Card component has multiple sections
//Card.Title: Header section with left Icon
//Card.Content Main area
//Card.Cover Image Section
//Card.Actions: Buttons at the bottom
export default function MyCard() {
  return (
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={LeftContent}
      />
    </Card>
  );
}
