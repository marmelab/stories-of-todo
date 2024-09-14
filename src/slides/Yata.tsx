import {
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
  SlideLayout,
  Text,
} from "spectacle";
import todoListPostIt from "../assets/todolist-postit.jpg";
import todoListComponent from "../assets/todo-list-component.png";
import todoFormComponent from "../assets/todo-form-component.png";
import todoItemComponent from "../assets/todo-item-component.png";

export const Yata = () => (
  <>
    <Slide
      backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3o3ZWh4YnRpNm45OHJlZ3lodWJ1d2wxczYyY2ViMHg0em0yNXZtciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9sPNTh8kRvR3q/giphy.gif)"
      backgroundSize="contain"
    >
      <Notes>
        Tout cela passionnant vous ne trouvez pas ? Mais avant de parler de
        Storybook, demandons nous comment nous ferions pour créer une librairie
        front, ou une application web. Prenons l'exemple d'une application de
        Todolist.
      </Notes>
    </Slide>
    <SlideLayout.Section>
      <Heading>YATA: Yet Another Todolist App</Heading>
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
    <SlideLayout.List
      title="Un utilisateur peut"
      animateListItems={true}
      listType="unordered"
      items={[
        "Voir la liste des tâches à réaliser",
        "Ajouter une tâche",
        "Marquer une tâche comme réalisée",
        "Supprimer une tâche",
      ]}
    />
    <SlideLayout.Section>
      <Heading>Composants</Heading>
      <Notes>
        Des fonctionnalités que nous avons évoqué plus haut, nous pouvons en
        déduire des composants distinct et les éclater:
      </Notes>
    </SlideLayout.Section>
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
  </>
);
