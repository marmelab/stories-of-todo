import {
  CodePane,
  Heading,
  Image,
  Notes,
  Slide,
  SlideLayout,
  Stepper,
} from "spectacle";
import isolation from "@/assets/isolation.jpg";
import isolatedButton from "@/assets/isolated-button.png";
import isolatedTitleInput from "@/assets/isolated-title-input.png";
import isolatedList from "@/assets/isolated-list.png";
import isolatedItem from "@/assets/isolated-item.png";
import isolatedPriorityBadge from "@/assets/isolated-priority-badge.png";
import isolatedDueDateInput from "@/assets/isolated-due-date-input.png";
import interactionsTest from "@/assets/interactions-test.png";

export const HowTo = () => (
  <>
    <SlideLayout.Section>
      <Heading>How To: Isolation Des Composants</Heading>
    </SlideLayout.Section>
    <SlideLayout.Center backgroundColor="#fff">
      <Stepper
        alwaysVisible
        values={[
          isolatedTitleInput,
          isolatedButton,
          isolatedDueDateInput,
          isolatedPriorityBadge,
          isolatedItem,
          isolatedList,
        ]}
      >
        {(value) => <Image src={value} />}
      </Stepper>
      <Notes>
        L'idée et de développer ses composants indépendemment des autres, sans
        la nécessité d'avoir une vue principale.
      </Notes>
    </SlideLayout.Center>
    <Slide backgroundImage={`url(${isolation})`}>
      Photo de{" "}
      <a href="https://unsplash.com/fr/@introspectivedsgn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Erik Mclean
      </a>{" "}
      sur{" "}
      <a href="https://unsplash.com/fr/photos/personne-en-pantalon-bleu-assise-sur-un-plancher-en-bois-brun-aCshJn3y93s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      <Notes>
        L'isolation de composants vient en opposition à la technique précédente:
        nos composants auront une vie en dehors de l'application, nous allons
        les isoler pour les rendre indépendant ! Cela peut paraître antinomique,
        mais vous allez comprendre.
      </Notes>
    </Slide>
    <SlideLayout.BigFact>Avantages</SlideLayout.BigFact>
    <Slide>
      <Heading textAlign="left" margin="0 0">
        Visualistion des Variantes
      </Heading>
      <iframe
        height="100%"
        src="http://localhost:6006/?path=/story/design-system-atoms-titleinput--default&globals=viewport:tablet"
      />
      <Notes>
        Nous allons pouvoir tester les variantes d'un composant facilement (par
        exemple: item validé)
      </Notes>
    </Slide>
    <Slide>
      <Heading>Intéractivité hors de l'application</Heading>
      <iframe
        height="100%"
        src="http://localhost:6006/?path=/story/application-list--default&globals=viewport:tablet"
      />
    </Slide>
    <Slide>
      <CodePane language="tsx">
        {`  
          decorators: [
            (Story) => {
              const emit = useChannel({});
              emit(HIGHLIGHT, {
                elements: [".btn-primary"],
              });
              return (
                <QueryClientProvider client={queryClient}>
                  <MswWrapper>
                    <Story />
                  </MswWrapper>
                </QueryClientProvider>
              );
            },
          ],
        `}
      </CodePane>
      <Heading textAlign="left" margin="0 0">
        Mocks indépendants
      </Heading>
      <Notes>
        Chaque composants va pouvoir être mocké tant au niveau des context, des
        reqêtes d'API, etc. Même si certaines méthodes d'API ne sont pas prêtes,
        je vais pouvoir utiliser des données mockées pour développer mes
        composants
      </Notes>
    </Slide>
    <Slide>
      <Heading>Documentation organisée</Heading>
      <iframe
        height="100%"
        src="http://localhost:6006/?path=/docs/design-system-atoms-titleinput--docs"
      />
      <Notes>Documenter chaque composant de manière organisé</Notes>
    </Slide>
    <Slide>
      <Heading>Bibliothèque de composants</Heading>
      <iframe height="100%" src="http://localhost:6006" />
      <Notes>
        Nous aurons à notre disposition à une bibliothèque de composants,
        partageable avec tous les acteurs du projets
      </Notes>
    </Slide>
    <Slide>
      <Image src={interactionsTest} />
      <Heading textAlign="left" margin="0 0">
        Tests intégrés
      </Heading>
      <Notes>Tester les composants dans une CI</Notes>
    </Slide>
  </>
);
