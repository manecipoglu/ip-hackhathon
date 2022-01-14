import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import GymPage from "./pages/GymPage/GymPage";
import "./styles/App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={["/", "/gyms"]} component={MainPage} />
        <Route exact path="/gyms/:id" component={GymPage} />
      </Switch>
    </BrowserRouter>
  );
}
