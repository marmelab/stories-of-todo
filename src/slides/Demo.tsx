import { NavLink } from "react-router-dom";
import { Heading, Notes, SlideLayout } from "spectacle";

export const Demo = () => (
  <SlideLayout.BigFact
    factInformation={
      <NavLink
        to="/"
        className="btn btn-outline btn-lg btn-accent"
        target="_blank"
      >
        /
      </NavLink>
    }
  >
    <Heading>Demo</Heading>
    <Notes>
      <ul>
        <li>
          Montrer le composant PriorityBadge, jouer avec la doc autogénérée et
          montrer les variantes
        </li>
        <li>Montrer le composant SubmitButton et les variantes</li>
        <li>Montrer le composant TitleInput</li>
        <li>Montrer le composant Toast</li>
        <li>Montrer le composant Item, son code et sa story</li>
        <li>
          Montrer le composant List, son code, sa story, le Wrapper MSW pour les
          mocks et le fichier data.json associé. Montrer le test d'interaction
          et son code
        </li>
        <li>
          Montrer le composant Todos, son code, sa story, le Wrapper MSW pour
          les mocks. Montrer le test d'interaction et son code
        </li>
        <li>
          Montrer la doc de l'API puis montrer l'application TodoList connectée
          à l'API.
        </li>
        <li>Montrer l'admin</li>
        <li>
          <a
            href="https://react-admin-storybook-marmelab.vercel.app/"
            target="_blank"
          >
            Montrer le storybook de react-admin
          </a>
        </li>
        <li>Lancer api-platform/admin et montrer le storybook</li>
      </ul>
    </Notes>
  </SlideLayout.BigFact>
);
