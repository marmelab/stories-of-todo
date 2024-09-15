import {
  Box,
  CodePane,
  FlexBox,
  Heading,
  Image,
  Notes,
  Slide,
  Text,
} from "spectacle";
import errorBlocked from "@/assets/error-blocked.jpg";
import reactAdminContribs from "@/assets/react-admin-contribs.png";
import apiPlatformAdminContribs from "@/assets/api-platform-admin-contribs.png";
import uxThinking from "@/assets/ux-thinking.jpg";
import pr541 from "@/assets/pr-541.png";

export const HackDay = () => (
  <>
    <Slide
      transition={{
        from: {
          transform: "scale(0.5) rotate(45deg)",
          opacity: 0,
        },
        enter: {
          transform: "scale(1) rotate(0)",
          opacity: 1,
        },
        leave: {
          transform: "scale(0.2) rotate(315deg)",
          opacity: 0,
        },
      }}
      backgroundColor="tertiary"
      backgroundOpacity={0.5}
    >
      <Image
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1mbG9pZHcyOTEzN2xkcWZjcngzdDZienhueHpkNWE4eWFkenl6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ieBWQkIVEELhbizGAp/giphy.gif"
        alt="Hackerman"
        imgContainerProps={{
          width: "100%",
        }}
      />
      <Notes>
        À Marmelab, nous avons des Hack Days: nous ne sommes pas des Hackers,
        mais ce sont des jours où nous pouvons explorer une technologie,
        développer des projets, etc... Venant de l'univers PHP/Symfony, et
        fraîchement débarqué dans l'univers React, j'ai voulu m'amuser un peu
        avec Api-platform et l'interface B2B. C'était l'occasion pour moi de
        garder un pied dans PHP et de montrer à mes collègues que "PHP c'est
        bien quand même !" 😄
      </Notes>
    </Slide>
    <Slide backgroundImage={`url(${errorBlocked})`}>
      <FlexBox alignContent="" justifyContent="end">
        <Text fontSize={16} backgroundColor="#000">
          Photo de{" "}
          <a href="https://unsplash.com/fr/@davfts?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            David Pupăză
          </a>{" "}
          sur{" "}
          <a href="https://unsplash.com/fr/photos/texte-heNwUmEtZzo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </Text>
      </FlexBox>
      <Notes>
        En développant mon POC, j'ai été confronté à plusieurs problèmes assez
        bloquant. J'ai commencé à débogguer api-platorm/admin pour comprendre
        d'où venait ces problèmes. Mais pour installer un environnement de dev,
        il fallait disposer d'une application déjà existante, et la lier avec
        `yarn link`.
      </Notes>
    </Slide>
    <Slide>
      <CodePane language="md">
        {`
          #### Linking the Source Version to an Existing Project

          If you already have a project in progress, you can develop directly from it.

          The instructions below explain how to install the source version of API Platform Admin 
          in your project and contribute a patch.

          Your client should already use \`@api-platform/admin\` and its bootstrap file (usually: \`src/App.tsx\`) 
          should at least contains: 
        `}
      </CodePane>
      <CodePane language="tsx">
        {`
          import React from 'react';
          import { HydraAdmin } from '@api-platform/admin';

          function App() {
            return (
              <HydraAdmin entrypoint="https://demo.api-platform.com" />
            )
          }

          export default App;
        `}
      </CodePane>
    </Slide>
    <Slide>
      <CodePane language="md">
        {`
          Install your own version of \`@api-platform/admin\`:

          First, clone the repository and install its dependencies:
        `}
      </CodePane>
      <CodePane language="shell">
        {`
          cd ..
          git clone https://github.com/api-platform/admin.git
        `}
      </CodePane>
      <CodePane language="md">
        {`
          Link it:
        `}
      </CodePane>
      <CodePane language="shell">
        {`
          cd admin
          yarn link
          cd ../<yourproject>
          yarn link "@api-platform/admin"
        `}
      </CodePane>
      <CodePane language="md">
        {`
          Use the React version of your project to build \`@api-platform/admin\`:
        `}
      </CodePane>
      <CodePane language="shell">
        {`
          cd node_modules/react/
          yarn link
          cd ../../../admin
          yarn link react
        `}
      </CodePane>
    </Slide>
    <Slide>
      <CodePane language="md">
        {`
          Build continuously your \`@api-platform/admin\` version:
        `}
      </CodePane>
      <CodePane language="shell">
        {`
          yarn install --force
          yarn watch
        `}
      </CodePane>
      <CodePane language="md">
        {`
          Open a new terminal console with the same path.

          Start your client:
        `}
      </CodePane>
      <CodePane language="shell">
        {`
          cd ../<yourproject>/
          yarn install --force
          yarn dev --force
        `}
      </CodePane>
      <CodePane language="md">
        {`
          > You can now hack in the cloned repository of \`api-platform-admin\`.
        `}
      </CodePane>
      <Heading>CONTRIBUTING.md 🤯</Heading>
      <Notes>
        J'ai donc créé une appli test et j'ai remarqué que le projet
        api-platform/admin n'avait pas intégré certaines mises de React-admin.
        J'ai passé beaucoup plus de temps à débogguer qu'à travailler sur mon
        projet. La démo de mon POC devant mes collègues n'a pas eut l'effet
        WAHOU que j'espérait.
      </Notes>
    </Slide>
    <Slide>
      <FlexBox flexDirection="row" alignItems="start" flex={1}>
        <Box width="100%">
          <Image src={reactAdminContribs} />
        </Box>
        <Box width="100%">
          <Image src={apiPlatformAdminContribs} />
        </Box>
      </FlexBox>
      <Notes>
        Il faut dire que depuis la première intégration de React-admin à
        Api-platform, les outils ont évolué à différents rythmes.
      </Notes>
    </Slide>
    <Slide backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTltOW9tbXdhYnIwMzQ4c3BsMDJsd2lkdGJwdzd6aHNodnUyNjllZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zRgQYRbZWFXGZ1Tgw/giphy.gif)">
      <Notes>
        J'ai trouvé la DX un tantinet compliquée et j'ai fait le parallèle avec
        la manière dont nous avons de développer React-admin et je me suis dit
        que le DX pourrait plus simple.
      </Notes>
    </Slide>
    <Slide backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGF3OXE5cmM5YnAxNHJyaXZoNnRidWxhcHY4YTZiM3N1Z3cyODJzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lVBtp4SRW6rvDHf1b6/giphy.gif)">
      <Notes>
        J'ai fait part de mes retours à la core team React-admin, et nous avons
        conclu que cela serait profitable pour tout le monde de corriger et de
        mettre à jour api-platform/admin. Mais pour cela il nous fallait un
        environnement de dev qui convienne à notre manière de travailler sur
        React-admin.
      </Notes>
    </Slide>
    <Slide>
      <Image src={uxThinking} />
      <Notes>
        Nous voulions un env dev avec plusieurs scénarios (des stories),
        testable facilement, mockable, et plugable à Api-platform pour tester
        son intégration avec le framework PHP.
      </Notes>
    </Slide>
    <Slide>
      <CodePane language="yaml">
        {`
          pwa:
              image: \${IMAGES_PREFIX:-}storybook-pwa
              build:
                context: .
                target: dev
              environment:
                ENTRYPOINT: \${ENTRYPOINT:-https://localhost}
              volumes:
                - .:/srv/app
                - pwa_node_modules:/srv/app/node_modules
              healthcheck:
                test: ["CMD", "curl", "-f", "http://127.0.0.1:3000"]
                interval: 10s
                timeout: 10s
                retries: 20
                start_period: 20s
              ports:
                - target: 3000
                  published: \${PWA_PORT:-3000}
        `}
      </CodePane>
      <Notes>À coup de Docker</Notes>
    </Slide>
    <Slide>
      <CodePane language="typescript">
        {`
          import type { Meta, StoryObj } from '@storybook/react';
          import { within } from '@storybook/test';
          import Basic from './Basic';

          const meta = {
            title: 'Admin/Basic',
            component: Basic,
            tags: ['autodocs'],
            parameters: {
              layout: 'fullscreen',
            },
          } satisfies Meta<typeof Basic>;

          export default meta;

          type Story = StoryObj<typeof meta>;

          export const Admin: Story = {
            play: async ({ canvasElement }) => {
              const canvas = within(canvasElement);
              await canvas.findByText('Greetings');
            },
            args: {
              entrypoint: process.env.ENTRYPOINT,
            },
          };
        `}
      </CodePane>
      <Notes>de Storybook</Notes>
    </Slide>
    <Slide>
      <CodePane language="yaml">
        {`
              name: Storybook

              on:
                push:
                  branches:
                    - main
                pull_request: ~
                workflow_dispatch: ~

              concurrency:
                group: \${{ github.workflow }}-\${{ github.head_ref || github.run_id }}
                cancel-in-progress: true

              jobs:
                tests:
                  name: Tests
                  runs-on: ubuntu-latest
                  steps:
                    -
                      name: Checkout
                      uses: actions/checkout@v4
                    -
                      name: Set up Docker Buildx
                      uses: docker/setup-buildx-action@v3
                    -
                        name: Build Docker images
                        uses: docker/bake-action@v4
                        with:
                            pull: true
                            load: true
                            files: |
                              compose.yaml
                              compose.ci.yaml
                            set: |
                              *.cache-from=type=gha,scope=\${{github.ref}}
                              *.cache-from=type=gha,scope=refs/heads/main
                              *.cache-to=type=gha,scope=\${{github.ref}},mode=max
                    -
                      name: Start services
                      run: docker compose -f compose.yaml -f compose.ci.yaml up --wait --no-build
                    -
                      name: Create test database
                      run: docker compose exec -T php bin/console -e test doctrine:database:create
                    -
                      name: Run migrations
                      run: docker compose exec -T php bin/console -e test doctrine:migrations:migrate --no-interaction
                    -
                      name: Run interactions tests
                      run: docker compose exec -T pwa yarn storybook:test --url http://127.0.0.1:3000 --maxWorkers 1
        `}
      </CodePane>
      <Notes>
        et de CI, nous avons réussi à mettre en place environnements de dev
        solide et facilement maintenable pour des développeurs React (et
        React-admin)
      </Notes>
    </Slide>

    <Slide backgroundImage={`url(${pr541})`} backgroundSize="contain">
      <Notes>
        Je ne vais pas vous expliquer en détail comment nous avons développé cet
        environnement. Vous trouverez des PR assez détaillées sur le sujet,
        notamment celle à l'écran.
        <a href="https://github.com/api-platform/admin/pull/541">
          chore: make the development process easier with Storybook #541
        </a>
      </Notes>
    </Slide>
  </>
);
