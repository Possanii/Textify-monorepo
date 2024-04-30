import { Header } from "../../ui/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="bg-slate-700 bg-gradient-to-br from-black h-full min-h-screen">
        <div className="w-full h-full max-w-screen-xl mx-auto pt-[120px] ">
          {children}
        </div>
      </div>
    </div>
  );
}
