import { Header } from "../../ui/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="w-full max-w-screen-xl mx-auto mt-10">{children}</div>
    </div>
  );
}
