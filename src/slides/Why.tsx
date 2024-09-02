import { Notes, SlideLayout } from "spectacle";
import why from "@/assets/why.jpg";

const PhotoCredit = () => (
  <>
    Photo de{" "}
    <a href="https://unsplash.com/fr/@emilymorter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
      Emily Morter
    </a>{" "}
    sur{" "}
    <a href="https://unsplash.com/fr/photos/point-dinterrogation-signalisation-au-neon-8xAA0f9yQnE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
      Unsplash
    </a>
  </>
);

export const Why = () => (
  <SlideLayout.BigFact
    backgroundImage={`url(${why})`}
    backgroundOpacity={0.4}
    factInformation={<PhotoCredit />}
    factInformationProps={{
      fontSize: "1.5rem",
      theme: "dark",
    }}
  >
    Why
    <Notes>
      <p>Pourquoi je vous parles de ces outils ? Un peu de mise en context</p>
    </Notes>
  </SlideLayout.BigFact>
);
