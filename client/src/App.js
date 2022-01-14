import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import "./styles/App.scss";
import GymPage from "./pages/GymPage/GymPage";

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
