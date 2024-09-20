import { Box, FlexBox, Heading, Slide, Text } from "spectacle";
import background from "@/assets/background-0.jpg";
import github from "@/assets/github-mark-white.png";
import qrCode from "@/assets/qr-code.png";

export const Thanks = () => (
  <Slide backgroundImage={`url(${background})`}>
    <FlexBox>
      <Box>
        <Heading>Thank you! 🖤</Heading>
        <Text textAlign="center">Des questions ?</Text>
        <div className="flex flex-col items-center gap-5">
          <img src={github} alt="github" width="40" height="40" />
          <img width="20%" src={qrCode} />
        </div>
      </Box>
    </FlexBox>
  </Slide>
);
