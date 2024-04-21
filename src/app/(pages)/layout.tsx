import { ReactNode } from "react";

function LayoutX({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>lorem</h1>
      {children}
    </div>
  );
}

export default LayoutX;
