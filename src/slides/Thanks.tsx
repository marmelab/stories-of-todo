import { Box, FlexBox, Heading, Slide, Text } from "spectacle";
import background from "@/assets/background-0.jpg";
import github from "@/assets/github-mark-white.png";

export const Thanks = () => (
  <Slide backgroundImage={`url(${background})`}>
    <FlexBox>
      <Box>
        <Heading>Thank you! 🖤</Heading>
        <Text textAlign="center">Des questions ?</Text>
        <FlexBox justifyContent="center">
          <img src={github} alt="github" width="40" height="40" />
          <Text fontSize={30}>github.com/adguernier</Text>
        </FlexBox>
      </Box>
    </FlexBox>
  </Slide>
);
