import { Heading, Notes, SlideLayout } from "spectacle";

export const What = () => (
  <SlideLayout.Full>
    <Heading>So what?</Heading>
    <iframe
      height="100%"
      src="https://react-admin-storybook-marmelab.vercel.app/?path=/story/ra-ui-materialui-list-datagrid--full-app/"
    />
    <Notes>
      Ce que je vais vous expliquer, c'est comment développer, tester, et
      documenter ces composants de manière isolé en prenant pour base un projet
      assez simple. Puis je vous montrerais comment nous utilisons Storybook sur
      React-admin et sur api-platform/admin.
    </Notes>
  </SlideLayout.Full>
);
