import {
  Appear,
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

export const HowTo = () => (
  <>
    <SlideLayout.Section>
      <Heading>How To: La Manière Incrementale</Heading>
    </SlideLayout.Section>
    <SlideLayout.Center backgroundColor="#fff">
      <Stepper
        tagName="p"
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
            d'intégrer nos différent composants. La vue finale de notre
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
    <Slide backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDBpdzRoNHl4bTRwMnpoeGV3N3lia3I1OW1naDl5emo4cTQzNWN3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7btPCcdNniyf0ArS/giphy.gif)">
      <Notes>
        Ici nous sommes dans une application assez simple, mais imaginez une
        grosse application ou une bibliothèque de composants ? La maintenabilité
        sera sans doute hardue
      </Notes>
    </Slide>
  </>
);
