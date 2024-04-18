import { Header } from "../../ui/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="bg-slate-100 bg-gradient-to-br bg-transparent from-green-400 h-full min-h-screen">
        <div className="w-full max-w-screen-xl mx-auto pt-[120px] ">{children}</div>
      </div>
    </div>
  );
}
