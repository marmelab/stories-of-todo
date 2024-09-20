import { NavLink } from "react-router-dom";
import { Slide, Notes, Heading, SlideLayout } from "spectacle";
import reactAdmin from "@/assets/react-admin.png";
import b2bInterface from "@/assets/b2b-interface.png";

export const ApiPlatformAdmin = () => (
  <>
    <SlideLayout.Section>
      <Heading>Api-platform/admin</Heading>
    </SlideLayout.Section>
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
    <Slide>
      <Heading>Api-platform/admin</Heading>
      <div className="flex flex-col gap-4">
        <NavLink
          className="btn btn-outline btn-lg btn-success"
          to="https://localhost"
          target="_blank"
        >
          API
        </NavLink>
        <NavLink
          className="btn btn-outline btn-lg btn-warning"
          to="/admin"
          target="_blank"
        >
          Admin
        </NavLink>
      </div>
      <Notes>
        API Platform Admin est un outil permettant de créer automatiquement une
        interface d'administration et complète pour toute API prenant en charge
        le vocabulaire Hydra Core, exposant une documentation OpenAPI ou
        d'autres formats de spécification d'API pris en charge par
        @api-platform/api-doc-parser. Cette application est développée sur la
        base de React-admin.
      </Notes>
    </Slide>
    <Slide padding="0 0 0" backgroundImage={`url(${reactAdmin})`}>
      <Notes>
        React-admin est un framework open source, édité par Marmelab et
        développé en... React. Ce framework permet de créer des interfaces
        d'administration rapidement. À main levé, qui a déjà entendu parlé de
        React-admin ? Qui utilise React-admin ?
      </Notes>
    </Slide>
  </>
);
