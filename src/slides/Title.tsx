import { Notes, SlideLayout, Text } from "spectacle";
import logo from "@/assets/storybook-logo.png";

export const Title = () => (
  <SlideLayout.Center backgroundColor="#0d1026">
    <Text>Développer des composants en isolation avec</Text>
    <img src={logo} alt="storybook-logo" />
    <div className="divider" />
    <Text fontSize={16}>Adrien Guernier - Marmelab</Text>
    <Notes>
      Dans cette conférence, nous allons voir développer une application
      frontend, en isolant les composants. Quelle problèmatique cela résoud,
      comment cela va nous aider à développer une application plus robuste et
      comment Storybook peut nous y aider.
    </Notes>
  </SlideLayout.Center>
);
