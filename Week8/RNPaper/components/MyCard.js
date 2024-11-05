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
      <Card.Content>
        <Text variant="titleLarge">Content Header</Text>
        <Text variant="bodyMedium">Content Description</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Submit</Button>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log("Camera Presses")}
        >
          Press Me
        </Button>
      </Card.Actions>
    </Card>
  );
}
