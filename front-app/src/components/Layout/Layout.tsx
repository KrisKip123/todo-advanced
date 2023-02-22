import { PropsWithChildren, FC } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {children}
    </div>
  );
};
