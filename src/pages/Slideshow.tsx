import {
  ApiPlatformAdmin,
  B2bApp,
  HackDay,
  Hero,
  ReactAdmin,
  Conclusion,
  Title,
  Why,
  HowTo,
} from "@/slides";
import { Component } from "@/slides/Component";
import { Demo } from "@/slides/Demo";
import { Problematic } from "@/slides/Problematic";
import { Thanks } from "@/slides/Thanks";
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
    <Component />
    <Problematic />
    <HowTo />
    <Demo />
    <B2bApp />
    <ApiPlatformAdmin />
    <ReactAdmin />
    <Why />
    <HackDay />
    <Conclusion />
    <Thanks />
  </Deck>
);
