import { CodePane, FlexBox, Image, Notes, Slide, Text } from "spectacle";
import errorBlocked from "@/assets/error-blocked.jpg";
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
        Faisant partie de la Core Team React-admin, j'ai voulu explorer le
        projet api-platform/admin pour en voir ces fonctionnalités
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
        En explorant api-platform/admin, j'ai été confronté à plusieurs
        problèmes. J'ai commencé à débogguer le code pour comprendre d'où venait
        ces problèmes. J'ai passé beaucoup de temps à mettre en place un
        environment de dev et à débogguer.
      </Notes>
    </Slide>
    <Slide backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTltOW9tbXdhYnIwMzQ4c3BsMDJsd2lkdGJwdzd6aHNodnUyNjllZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zRgQYRbZWFXGZ1Tgw/giphy.gif)">
      <Notes>
        J'ai trouvé la DX un tantinet compliquée et j'ai fait le parallèle avec
        la manière dont nous dévloppons React-admin avec Storybook, et je me
        suis dit que le DX pourrait plus simple.
      </Notes>
    </Slide>
    <Slide backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanRud2l1cnBzYjY1MHY3MzMyN3ExMzlkNWhkeWh3amZ4aXcxYm5hNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dxn6fRlTIShoeBr69N/giphy.gif)">
      <Notes>
        J'ai fait part de mes retours à la core team React-admin, et nous avons
        avons décidé de contribuer à api-platform/admin. Mais pour cela il nous
        fallait un environnement de dev qui convienne à notre manière de
        travailler sur React-admin.
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
      <Notes>À coup de Storybook</Notes>
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
      <Notes>de Docker</Notes>
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
      <Notes>et de CI</Notes>
    </Slide>

    <Slide backgroundImage={`url(${pr541})`} backgroundSize="contain">
      <Notes>
        Nous avons réussi à mettre en place environnements de dev solide et
        facilement maintenable pour des développeurs React (et React-admin).{" "}
        <br />
        Vous trouverez des PR assez détaillées sur le sujet, notamment celle à
        l'écran.
        <a href="https://github.com/api-platform/admin/pull/541">
          chore: make the development process easier with Storybook #541
        </a>
      </Notes>
    </Slide>
  </>
);
