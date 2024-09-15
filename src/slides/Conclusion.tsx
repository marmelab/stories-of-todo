import { Slide, SlideLayout, Text } from "spectacle";
import ReactMarkdown from "react-markdown";
import conclusion from "./conclusion.md";
import "github-markdown-css/github-markdown-dark.css";

export const Conclusion = () => (
  <>
    <SlideLayout.Section>
      <Text>Conclusion</Text>
    </SlideLayout.Section>
    <Slide>
        <ReactMarkdown className="markdown-body" children={conclusion} />
    </Slide>
  </>
);
