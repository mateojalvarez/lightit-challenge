import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Tools from "./components/Tools/Tools";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <div className="container min-w-full body-gray">
        <NavBar />
        <SideBar />
        <Tools />
      </div>
    </AppContext>
  );
}

export default App;
