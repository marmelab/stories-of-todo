import { SlideLayout } from "spectacle";
import me from "@/assets/me.jpg";

export const Hero = () => (
  <SlideLayout.VerticalImage
    src={me}
    alt="Adrien Guernier"
    title="Adrien Guernier"
    listItems={[
      "Développeur fullstack chez Marmelab",
      "Membre de la Core Team de React-Admin",
    ]}
  ></SlideLayout.VerticalImage>
);
