import {
  CodePane,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  SlideLayout,
  Stepper,
  Text,
  UnorderedList,
} from "spectacle";
import todoListPostIt from "@/assets/todolist-postit.jpg";
import todoListComponent from "@/assets/todo-list-component.png";
import todoFormComponent from "@/assets/todo-form-component.png";
import todoItemComponent from "@/assets/todo-item-component.png";
import incrementalStep1 from "@/assets/incremental-step-1.png";
import incrementalStep2 from "@/assets/incremental-step-2.png";
import incrementalStep3 from "@/assets/incremental-step-3.png";
import incrementalStep4 from "@/assets/incremental-step-4.png";
import incrementalStep5 from "@/assets/incremental-step-5.png";
import incrementalStep6 from "@/assets/incremental-step-6.png";
import incrementalStep7 from "@/assets/incremental-step-7.png";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MswWrapper } from "@/msw/MswWrapper";
import { Todos } from "@/components/Todos";

const data = {
  todos: [],
};

const MyTodo = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MswWrapper data={data}>
        <Todos />
      </MswWrapper>
    </QueryClientProvider>
  );
};

export const Problematic = () => (
  <>
    <SlideLayout.Section>
      <Heading>Problématique </Heading>
      <Text>YATA! Yet Another Todolist App</Text>
    </SlideLayout.Section>

    <Slide backgroundImage={`url(${todoListPostIt})`}>
      <FlexBox height="100%" justifyContent="center" alignItems="end">
        <Text fontSize={20}>
          Photo de{" "}
          <a href="https://unsplash.com/fr/@edenconstantin0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Eden Constantino
          </a>{" "}
          sur{" "}
          <a href="https://unsplash.com/fr/photos/personne-tenant-une-carte-violette-et-blanche-OXmym9cuaEY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </Text>
      </FlexBox>
      <Notes>
        Imaginons que nous soyons chargé de développer une application de
        Todolist qui va révolutionner le marché.
      </Notes>
    </Slide>
    <Slide>
      <Heading>Un utilisateur peut</Heading>
      <UnorderedList>
        <ListItem>Voir la liste des tâches à réaliser</ListItem>
        <ListItem>Ajouter une tâche</ListItem>
        <ListItem>Marquer une tâche comme réalisée</ListItem>
        <ListItem>Difficulté à partager des composants</ListItem>
        <ListItem>Supprimer une tâche</ListItem>
      </UnorderedList>
      <Notes>
        Des fonctionnalités que nous avons évoqué plus haut, nous pouvons en
        déduire des composants distinct et les éclater:
      </Notes>
    </Slide>
    <Slide backgroundColor="#fff">
      <Heading color="#0d1026">Form</Heading>
      <Image src={todoFormComponent} />
      <Notes>
        Un formulaire composé:
        <ul>
          <li>d'un input permettant de renseigner l'intitulé de la tâche</li>
          <li>d'un datepicker permettant de définir la date d'échéance</li>
          <li>d'un selecteur pour définir la priorité</li>
          <li>d'un bouton pour valider le formulaire</li>
        </ul>
      </Notes>
    </Slide>
    <Slide backgroundColor="#fff">
      <Heading color="#0d1026">Item</Heading>
      <Image src={todoItemComponent} />
      <Notes>
        Des items composés:
        <ul>
          <li>du titre de la tâche</li>
          <li>
            d'une checkbox pour valider/invalider la finalisation de la tâche
          </li>
          <li>de la date d'échéance</li>
          <li>d'un bouton de suppression</li>
        </ul>
      </Notes>
    </Slide>
    <Slide backgroundColor="#fff">
      <Heading color="#0d1026">List</Heading>
      <Image src={todoListComponent} />
      <Notes>
        Une liste composée:
        <ul>
          <li>des items</li>
        </ul>
      </Notes>
    </Slide>
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
      <MyTodo />
      <Notes>
        Voici un exemple de Todolist, avec les fonctionnalités que nous avons
        évoqué plus haut. Pour voir une item de liste, je dois ajouter ajouter
        une tâche. Pour voir le style d'une tâche réalisée, je dois la marquer
        comme réalisée. Pour voir le formulaire en erreur, je dois ajouter une
        tâche sans titre, etc
      </Notes>
    </Slide>
    <Slide>
      <CodePane language="tsx">
        {`
          export const Countdown = ({ targetDate }: { targetDate: Date }) => {
            const [days, hours, minutes, seconds] = useCountdown(targetDate);

            if (days + hours + minutes + seconds <= 0) {
              return (
                <span className="text-red-500 text-xs">
                  {targetDate.toLocaleString()} - Expired
                </span>
              );
            }
            // ...
          }
        `}
      </CodePane>
      <div className="divider" />
      <span className="text-red-500 text-5xl">
        10/08/2024 15:45:00 - Expired
      </span>
      <Notes>
        Imaginons que je souhaite ajouter afficher un message d'erreur si la
        date est dépassée. Je vais modifier le composant Countdown pour afficher
        ce message. Aucun problème ici.
      </Notes>
    </Slide>
    <Slide>
      <MyTodo />
      <Notes>
        Imaginons maintenant que nous devions intégrer le composant Countdown
        dans les items de liste et l'afficher seulement s'il reste 99 jours
        avant la date d'expiration de la tâche. Si je veux tester cette
        modification, je dois modifier les données des todo et naviguer dans
        l'application pour trouver le composant Item et le tester. Ou je peux
        aussi ajouter une todo avec une date d'expiration passé pour que le
        message s'affiche
      </Notes>
    </Slide>
    <Slide>
      <Heading>Inconvénients</Heading>
      <UnorderedList>
        <ListItem>Composants dépendants de l'application</ListItem>
        <ListItem>Tests difficiles à écrire</ListItem>
        <ListItem>Documentation potentiellement incomplète</ListItem>
        <ListItem>Difficulté à partager des composants</ListItem>
        <ListItem>Incohérences de design</ListItem>
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
    <Slide backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBpdzRoNHl4bTRwMnpoeGV3N3lia3I1OW1naDl5emo4cTQzNWN3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCcdNniyf0ArS/giphy.gif)">
      <Notes>
        Ici nous sommes dans une application assez simple, mais imaginez une
        grosse application ou une bibliothèque de composants ? La maintenabilité
        sera sans doute hardue
      </Notes>
    </Slide>
    <Slide>
      <Notes>
        À mesure que les front-ends se développent, le nombre de composants
        gonfle. Les projets matures peuvent contenir des centaines de composants
        qui produisent des milliers de variations. Pour développer un composant,
        je dois naviguer dans toute l'application pour trouver ce dernier et le
        tester, ainsi que toute ces variantes.
      </Notes>
    </Slide>
  </>
);
