import { Notes, Slide } from "spectacle";
import b2bInterface from "@/assets/b2b-interface.png";

export const B2bApp = () => (
  <Slide
    padding="0 0 0"
    backgroundImage={`url(${b2bInterface})`}
    backgroundSize="contain"
    backgroundColor="#0D262B"
  >
    <Notes>
      Qui a déjà utilisé la partie admin d'Api-platform ? <br />
      Dans sa distribution complète, Api-platform fournit une interface
      d'administration B2B, auto-générée grâce à la découverte de l'API.
    </Notes>
  </Slide>
);
