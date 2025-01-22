import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
// import WebGLBackground from "./components/WebGLBackground ";
import MainPage from "./pages/MainPage";
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      {/* <WebGLBackground/> */}
      <Toaster richColors  />
      <NavBar />
      <SideBar />
      <MainPage />
    </>
  );
}

export default App;
