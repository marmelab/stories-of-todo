import { ReactNode, useEffect, useState } from "react";
import { initMsw } from "./initMsw";

export const MswWrapper = ({ children }: { children: ReactNode }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    initMsw().then(() => {
      setRender(true);
    });
  }, []);

  return render && children;
};
