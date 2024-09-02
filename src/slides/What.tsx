import { Heading, Notes, SlideLayout } from "spectacle";

export const What = () => (
  <SlideLayout.Full>
    <Heading>So what?</Heading>
    <iframe
      height="100%"
      src="https://react-admin-storybook-marmelab.vercel.app/?path=/story/ra-ui-materialui-list-datagrid--full-app/"
    />
    <Notes>
      Ce que je vais vous expliquer, c'est comment nous utilisons Storybook sur
      React-admin et comment nous l'avons utilisé sur api-platform/admin.
      Comment développer ses composants, les tester, et les documenter. Et je
      vais l'expliquer en prenant pour base un projet assez simple.
    </Notes>
  </SlideLayout.Full>
);
