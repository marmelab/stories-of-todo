import {
  Box,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  SlideLayout,
  UnorderedList,
} from "spectacle";
import ReactMarkdown from "react-markdown";
import contrib1 from "./contrib-method-1.md";
import contrib2 from "./contrib-method-2.md";
import "github-markdown-css/github-markdown-dark.css";
import background from "@/assets/background-0.jpg";
import apiPlatformRelease from "@/assets/api-platform-admin-release.png";

export const Conclusion = () => (
  <>
    <SlideLayout.Section>
      <Heading>Conclusion</Heading>
    </SlideLayout.Section>
    <Slide backgroundImage={`url(${background})`}>
      <Heading>Storybook</Heading>
      <UnorderedList>
        <ListItem>Permet de développer en isolation</ListItem>
        <ListItem>Maintenance des composants</ListItem>
        <ListItem>Réutilisation des composants</ListItem>
        <ListItem>Collaboration</ListItem>
        <ListItem>Tests intégrés</ListItem>
        <ListItem>Extensible</ListItem>
      </UnorderedList>
      <Notes>
        Comme nous l'avons vu, Storybook est un outil puissant et permet de
        développer des composants de manière isolée, avec tous les avantages que
        cette manière de développer implique. Il permet de gagner du temps
        facilitant la maintenance et la réutilisation des composants. Il permet
        également de faciliter la collaboration entre les développeurs front et
        back et les designers. De plus il est possible d'ajouter des addons pour
        étendre les possibilités de Storybook.
      </Notes>
    </Slide>
    <Slide backgroundColor="#0D1117">
      <Box className="overflow-auto">
        <ReactMarkdown className="markdown-body" children={contrib1} />
      </Box>
      <Notes>
        En mettant Storybook en place sur api-platform/admin, nous sommes passés
        de la nécessité d'avoir un projet existant, d'instancier sa propre
        version d'api-platform/admin, de lier au projets avec avec `yarn link`
        et à un tout un tas d'autres étapes
      </Notes>
    </Slide>
    <Slide>
      <Heading>docker compose up</Heading>
      <ReactMarkdown className="markdown-body" children={contrib2} />
      <Notes>À un simple docker compose up</Notes>
    </Slide>
    <Slide>
      <Heading>api-platform/admin v4</Heading>
      <Image src={apiPlatformRelease} />
      <Notes>
        Cet été nous en avons sortie la version 5 de react-admin et nous en
        avons profiter pour mettre à jour api-platform/admin. Vous pourrez
        trouvez la release d'api-platfom/admin sur le dépôt github
      </Notes>
    </Slide>
  </>
);
