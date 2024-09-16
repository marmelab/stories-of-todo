import { Slide, Notes, Heading } from "spectacle";

export const ApiPlatformAdmin = () => (
  <Slide>
    <Heading>Api-platform/admin</Heading>
    <iframe src="http://localhost:5173/admin" height="100%" />
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
