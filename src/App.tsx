import { Toaster } from "sonner";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ScrollToTop from "./components/ScrollToTop";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div className="relative min-h-screen text-foreground">
      <Background />
      <Toaster
        richColors
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(15,15,20,0.85)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(20px)",
          },
        }}
      />
      <NavBar />
      <SideBar />
      <MainPage />
      <ScrollToTop />
    </div>
  );
};

export default App;
