import { Slide, Notes } from "spectacle";
import adminDemo from "@/assets/admin-demo.gif";

export const ApiPlatformAdmin = () => (
  <Slide
    backgroundImage={`url(${adminDemo})`}
    backgroundSize="contain"
    backgroundColor="#fff"
  >
    <Notes>
      API Platform Admin est un outil permettant de créer automatiquement une
      interface d'administration et complète pour toute API prenant en charge le
      vocabulaire Hydra Core, exposant une documentation OpenAPI ou d'autres
      formats de spécification d'API pris en charge par
      @api-platform/api-doc-parser. Cette application est développée sur la base
      de React-admin.
    </Notes>
  </Slide>
);
