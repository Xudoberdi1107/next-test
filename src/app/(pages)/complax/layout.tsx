import { ReactNode } from "react";
type LayoutDashProps = {
  children: ReactNode;
  users: ReactNode;
  chart: ReactNode;
  tabel: ReactNode;
};
function Layout({ children, chart, tabel, users }: LayoutDashProps) {
  return (
    <div>
      <h1>layout dash</h1>
      {children}
      {users}
      {chart}
      {tabel}
    </div>
  );
}

export default Layout;
