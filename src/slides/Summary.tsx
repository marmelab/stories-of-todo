import { SlideLayout } from "spectacle";
import background from "@/assets/background-0.jpg";

export const Summary = () => (
  <SlideLayout.List
    backgroundImage={`url(${background})`}
    title="Sommaire"
    items={[
      "Définition d'un composant ?",
      "Yet Another Todolist App",
      "Isolation ses composants",
      "Demo",
      "Api-platform/admin",
      "Conclusion",
    ]}
  />
);
