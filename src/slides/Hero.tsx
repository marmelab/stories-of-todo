import { Box, Heading, ListItem, SlideLayout, UnorderedList } from "spectacle";
import me from "@/assets/me.jpg";
import background from "@/assets/background-0.jpg";

export const Hero = () => (
  <SlideLayout.TwoColumn
    backgroundImage={`url(${background})`}
    left={
      <>
        <Heading>Adrien Guernier</Heading>
        <img src={me} alt="Adrien Guernier" />
      </>
    }
    right={
      <Box marginTop={100}>
        <UnorderedList>
          <ListItem>Fullstack Developer @ Marmelab</ListItem>
          <ListItem>Membre de la Core Team React-Admin</ListItem>
          <ListItem>PHP anthousiast</ListItem>
          <ListItem>Musicien à ses heures perdues 🤟</ListItem>
        </UnorderedList>
      </Box>
    }
  />
);
