import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto">
        <Header />
        <Outlet />
      </main>
      <div className="p-6 text-center bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 mt-10 shadow-lg">
        <p className="text-gray-300 text-sm tracking-wide">
          Made by <span className="font-semibold text-indigo-400">DevMandate</span> — <span className="text-purple-400">Caleb Murambi</span>
        </p>
      </div>

    </div>
  );
};

export default AppLayout;