import { Notes, SlideLayout, Text } from "spectacle";
import logo from "@/assets/storybook-logo.png";

export const Title = () => (
  <SlideLayout.Center backgroundColor="#0d1026">
    <Text>Développer des composants en isolation avec</Text>
    <img src={logo} alt="storybook-logo" />
    <div className="divider" />
    <Text fontSize={16}>Adrien Guernier - Marmelab</Text>
    <Notes>
      Dans cette conférence, nNous allons voir comment isoler nos composants
      frontend et ainsi leur rendre leur libérté.
    </Notes>
  </SlideLayout.Center>
);
