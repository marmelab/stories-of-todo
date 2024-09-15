import {
  Appear,
  CodePane,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  SlideLayout,
  Stepper,
  UnorderedList,
} from "spectacle";
import incrementalStep1 from "@/assets/incremental-step-1.png";
import incrementalStep2 from "@/assets/incremental-step-2.png";
import incrementalStep3 from "@/assets/incremental-step-3.png";
import incrementalStep4 from "@/assets/incremental-step-4.png";
import incrementalStep5 from "@/assets/incremental-step-5.png";
import incrementalStep6 from "@/assets/incremental-step-6.png";
import incrementalStep7 from "@/assets/incremental-step-7.png";
import isolation from "@/assets/isolation.jpg";
import isolatedButton from "@/assets/isolated-button.png";
import isolatedTitleInput from "@/assets/isolated-title-input.png";
import isolatedList from "@/assets/isolated-list.png";
import isolatedItem from "@/assets/isolated-item.png";
import isolatedPriorityBadge from "@/assets/isolated-priority-badge.png";
import isolatedDueDateInput from "@/assets/isolated-due-date-input.png";
import interactionsTest from "@/assets/interactions-test.png";
import { FormProvider, useForm } from "react-hook-form";
import { TitleInput } from "@/components/TitleInput/TitleInput";
import { Item } from "@/components/Item/Item";
import { useState } from "react";
import { Todo } from "@/types/todo";

const handleSubmit = () => {};

const ExampleTitleInput = () => {
  const { formState, ...rest } = useForm<Todo>();

  return (
    <FormProvider formState={formState} {...rest}>
      <form
        onSubmit={rest.handleSubmit(handleSubmit)}
        className="flex join mt-1"
      >
        <TitleInput />
      </form>
    </FormProvider>
  );
};

const ExampleItem = () => {
  const [todo, setTodo] = useState<Todo>({
    id: 1,
    title: "Learn React Query",
    completed: false,
    dueDate: "2025-05-15T08:38:00",
    priority: "high",
  });
  return (
    <Item
      todo={todo}
      update={() =>
        setTodo({
          ...todo,
          completed: !todo.completed,
        })
      }
      remove={() => {}}
    />
  );
};

export const HowTo = () => (
  <>
    <SlideLayout.Section>
      <Heading>How To: La Manière Incrementale</Heading>
    </SlideLayout.Section>
    <SlideLayout.Center backgroundColor="#fff">
      <Stepper
        alwaysVisible
        values={[
          incrementalStep1,
          incrementalStep2,
          incrementalStep3,
          incrementalStep4,
          incrementalStep5,
          incrementalStep6,
          incrementalStep7,
        ]}
      >
        {(value) => <Image src={value} />}
      </Stepper>
      <Notes>
        <ul>
          <li>
            Premièrement nous créerions une une vue qui nous permettrait
            d'intégrer nos différents composants. La vue finale de notre
            application.
          </li>
          <li>
            Nous mockerions l'entièreté de l'application pour avoir des données
            de tests
          </li>
          <li>
            Ensuite nous créerions chacun de nos composants:
            <ul>
              <li>
                Nous créerions le formulaire, nous l'intégrerions à la vue
                principale pour le développer et voir comment il se comporte.
              </li>
              <li>
                Nous créerions la liste que nous intégrerions à la vue
                principale
              </li>
              <li>
                Puis nous créerions les items de listes que nous intégrerions à
                la liste
              </li>
            </ul>
          </li>
          <li>Nous ajouterions des tests sur chaque composants</li>
          <li>
            Concernant la documentation des composants et leur utilisation, un
            fichier markdown à la racine projet devrait faire l'affaire
          </li>
        </ul>
      </Notes>
    </SlideLayout.Center>
    <Slide>
      <Heading>Inconvénients</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Composants dépendants de l'application</ListItem>
        </Appear>
        <Appear>
          <ListItem>Tests difficiles à écrire</ListItem>
        </Appear>
        <Appear>
          <ListItem>Documentation potentiellement incomplète</ListItem>
        </Appear>
        <Appear>
          <ListItem>Difficulté à partager des composants</ListItem>
        </Appear>
        <Appear>
          <ListItem>Incohérences de design</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        Cette manière de développer est la plus évidente, mais elle apporte son
        lot de problème:
        <ul>
          <li>
            Si une modification est nécessaire, il faudra modifier le composant,
            ses props, lancer toute l'application et tester directement dans
            cette dernière.
          </li>
          <li>
            Les tests risquent d'être difficiles à écrire: il faudra mocker
            toute l'application et lancer cet dernière dans la CI
          </li>
          <li>La documentation risque d'être incomplète, pas à jour</li>
          <li>
            Si un autre développeur à besoin d'un composant, il faudra qu'il
            aille chercher dans l'application, voir ce qu'il fait, et le copier.
          </li>
          <li>Des incohérences en terme de design pourraient survenir,</li>
        </ul>
      </Notes>
    </Slide>
    <SlideLayout.Center backgroundColor="#F3E9D2">
      <ExampleTitleInput />
      <Notes>
        Ici par exemple, pour vérifier le comportement du composant lorsqu'une
        erreur survient, je suis obligé de jouer avec le formulaire
      </Notes>
    </SlideLayout.Center>
    <Slide backgroundColor="#F3E9D2">
      <FlexBox justifyContent="center" alignItems="center" height="100%">
        <div className="w-3/4">
          <ExampleItem />
        </div>
      </FlexBox>
      <Notes>
        Dans cet exemple, pour vérifier le comportement du composant lorsqu'une
        tâche est complétée, je dois cliquer sur la checkbox
      </Notes>
    </Slide>
    <Slide backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBpdzRoNHl4bTRwMnpoeGV3N3lia3I1OW1naDl5emo4cTQzNWN3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCcdNniyf0ArS/giphy.gif)">
      <Notes>
        Ici nous sommes dans une application assez simple, mais imaginez une
        grosse application ou une bibliothèque de composants ? La maintenabilité
        sera sans doute hardue
      </Notes>
    </Slide>
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
      <Heading>Styleguide interactif</Heading>
      <iframe height="100%" src="http://localhost:6006" />
      <Notes>
        Nous aurons à notre disposition un styleguide interactif, partageable
        avec tous les acteurs du projets
      </Notes>
    </Slide>
    <Slide>
      <Image src={interactionsTest} />
      <Heading textAlign="left" margin="0 0">
        Tests intégrés
      </Heading>
      <Notes>Tester les composants dans une CI</Notes>
    </Slide>
    <Slide>
      <Heading>Réflexion sur l'API</Heading>
      <CodePane language="tsx">
        {`
          import { HTMLAttributes } from "react";

          export const SubmitButton = (
            props: HTMLAttributes<HTMLButtonElement> & {
              isPending: boolean;
              label: string;
            }
          ) => {
            const { isPending, label, ...rest } = props;
            return (
              <button
                className="btn btn-lg btn-primary join-item"
                type="submit"
                disabled={isPending}
                {...rest}
              >
                {isPending ? <span className="loading loading-spinner"></span> : label}
              </button>
            );
          };
        `}
      </CodePane>
      <Notes>
        Cette manière de développer force les développeurs à réfléchir à l'API
        de chaque composant pour ce celle ci soit maintenable
      </Notes>
    </Slide>
  </>
);
