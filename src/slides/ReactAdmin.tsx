import { Notes, Slide } from "spectacle";
import reactAdmin from "@/assets/react-admin.png";

export const ReactAdmin = () => (
  <Slide padding="0 0 0" backgroundImage={`url(${reactAdmin})`}>
    <Notes>
      React-admin est un framework open source, édité par Marmelab et développé
      en... React. Ce framework permet de créer des interfaces d'administration
      rapidement. Mais pas que. Vous pouvez aller voir le site si cela vous
      intéresse. À main levé, qui a déjà entendu parlé de React-admin ? Qui
      utilise React-admin ?
    </Notes>
  </Slide>
);
