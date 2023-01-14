import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import ViewNFT from "./pages/ViewNFT";
import Activity from "./pages/Activity";
import SideNavBar from "./SideNavBar/SideNavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<ViewNFT />} />
          <Route path="/activity" element={<Activity />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
