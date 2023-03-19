import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MiniDrawer from "./Components/Drawer";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <MiniDrawer>
        <Home />
      </MiniDrawer>
      <Footer />
    </>
  );
}

export default App;
