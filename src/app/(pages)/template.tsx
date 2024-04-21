import { ReactNode } from "react";

function LayoutAbout({ children }: { children: ReactNode }) {
  return (
    <div>
      <input type="text" />
      {children}
    </div>
  );
}

export default LayoutAbout;
