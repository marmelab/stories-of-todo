import {
  Appear,
  Box,
  CodePane,
  Heading,
  Notes,
  Slide,
  SlideLayout,
} from "spectacle";
import { useCountdown } from "@/components/Countdown/useCountdown";
import { CSSProperties } from "react";

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days } as CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours } as CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes } as CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": seconds } as CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export const Component = () => (
  <>
    <SlideLayout.Section>
      <Heading>C'est quoi un composant ?</Heading>
    </SlideLayout.Section>
    <SlideLayout.BigFact
      backgroundColor="red"
      factInformation="vous allez voir du JavaScript"
    >
      <Heading>Warning</Heading>
    </SlideLayout.BigFact>
    <Slide>
      <Box className="overflow-auto">
        <CodePane language="tsx">
          {`
            import { CSSProperties } from "react";
            import { useCountdown } from "./useCountdown";

            export const Countdown = ({ targetDate }: { targetDate: Date }) => {
              const [days, hours, minutes, seconds] = useCountdown(targetDate);

              return (
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": days } as CSSProperties}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": hours } as CSSProperties}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": minutes } as CSSProperties}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": seconds } as CSSProperties}></span>
                    </span>
                    sec
                  </div>
                </div>
              );
          };
      `}
        </CodePane>
      </Box>
      <Notes>
        Un composant est une unité de code JavaScript qui représente une partie
        de l’interface utilisateur (UI) d’une application. Un composant se veut
        réutilisable et modulaire. Un composant nous permet de modifier notre
        code à un seul endroit et de voir ces modifications propagées partout où
        ce composant est utilisé. Ici nous avons un composant de Compte à rebour
      </Notes>
    </Slide>
    <Slide>
      <div className="flex justify-center flex-col items-center gap-2">
        <Appear>
          <div className="flex gap-2 items-center">
            <Countdown targetDate={new Date("2024-10-10T15:45:26")} />
            <CodePane language="tsx">
              {`
                <Countdown targetDate={new Date("2024-10-10T15:45:26")} />
              `}
            </CodePane>
          </div>
        </Appear>
        <Appear>
          <div className="flex gap-2 items-center">
            <Countdown targetDate={new Date("2024-12-12T16:18:24")} />
            <CodePane language="tsx">
              {`
                <Countdown targetDate={new Date("2024-12-12T16:18:24")} />
              `}
            </CodePane>
          </div>
        </Appear>
        <Appear>
          <div className="flex gap-2 items-center">
            <Countdown targetDate={new Date("2024-11-10T15:45:10")} />
            <CodePane language="tsx">
              {`
                <Countdown targetDate={new Date("2024-11-10T15:45:10")} />
              `}
            </CodePane>
          </div>
        </Appear>
        <Appear>
          <div className="flex gap-2 items-center">
            <Countdown targetDate={new Date("2024-12-20T08:15:30")} />
            <CodePane language="tsx">
              {`
                <Countdown targetDate={new Date("2024-12-20T08:15:30")} />
              `}
            </CodePane>
          </div>
        </Appear>
        <Appear>
          <div className="flex gap-2 items-center">
            <Countdown targetDate={new Date("2024-09-20T15:00:00")} />
            <CodePane language="tsx">
              {`
                <Countdown targetDate={new Date("2024-12-20T08:15:30")} />
              `}
            </CodePane>
          </div>
        </Appear>
      </div>
      <Notes>
        Ici je vais pouvoir réutiliser ce composant Countdown où je le souhaite
        dans mon application
      </Notes>
    </Slide>
  </>
);
