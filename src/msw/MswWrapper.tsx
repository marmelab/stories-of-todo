import { ReactNode, useEffect, useState } from "react";
import { initMsw } from "./initMsw";

export const MswWrapper = ({
  data,
  children,
}: {
  data: object;
  children: ReactNode;
}) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    initMsw(data).then(() => {
      setRender(true);
    });
  }, []);

  return render && children;
};
