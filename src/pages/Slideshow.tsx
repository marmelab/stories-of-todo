import {
  ApiPlatformAdmin,
  HackDay,
  Hero,
  Conclusion,
  Title,
  HowTo,
  Component,
  Demo,
  Thanks,
  Problematic,
  Summary,
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
    <Summary />
    <Component />
    <Problematic />
    <HowTo />
    <Demo />
    <ApiPlatformAdmin />
    <HackDay />
    <Conclusion />
    <Thanks />
  </Deck>
);
