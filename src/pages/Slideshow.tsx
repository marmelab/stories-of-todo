import {
  ApiPlatformAdmin,
  B2bApp,
  HackDay,
  Hero,
  ReactAdmin,
  Conclusion,
  Title,
  Why,
  What,
  Yata,
  HowTo,
} from "@/slides";
import { Deck, DeckProps, DefaultTemplate } from "spectacle";

const theme: DeckProps["theme"] = {
  colors: {
    primary: "#F3E9D2", // text body
    secondary: "#F3E9D2", // heading
    tertiary: "#0d1026", // background
    quaternary: "#F3E9D2",
  },
};

export const Slideshow = () => (
  <Deck theme={theme} template={<DefaultTemplate />}>
    <Title />
    <Hero />
    <B2bApp />
    <ApiPlatformAdmin />
    <ReactAdmin />
    <Why />
    <HackDay />
    <What />
    <Yata />
    <HowTo />
    <Conclusion />
  </Deck>
);
