import { Box, FlexBox, Heading, Slide, Text } from "spectacle";
import background from "@/assets/background-0.jpg";
import github from "@/assets/github-mark-white.png";

export const Thanks = () => (
  <Slide backgroundImage={`url(${background})`}>
    <FlexBox>
      <Box>
        <Heading>Thank you! 🖤</Heading>
        <Text textAlign="center">Des questions ?</Text>
        <div className="flex flex-col items-center gap-2">
          <img src={github} alt="github" width="40" height="40" />
          <span className="text-xl">github.com/adguernier</span>
          <span className="text-xl">github.com/marmelab/stories-of-todo</span>
          <span className="text-xl">github.com/marmelab/react-admin</span>
          <span className="text-xl">github.com/api-platform/admin</span>
        </div>
      </Box>
    </FlexBox>
  </Slide>
);
