import { SlideLayout } from "spectacle";
import me from "@/assets/me.jpg";
import background from "@/assets/background-0.jpg";

export const Hero = () => (
  <SlideLayout.VerticalImage
    backgroundImage={`url(${background})`}
    src={me}
    alt="Adrien Guernier"
    title="Adrien Guernier"
    imgContainerProps={{ style: { borderRadius: "100%" } }}
    listItems={[
      "Développeur fullstack chez Marmelab",
      "Membre de la Core Team de React-Admin",
      "PHP anthousiast",
    ]}
  />
);
