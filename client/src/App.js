import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import GymPage from "./pages/GymPage/GymPage";
import InstructorPage from "./pages/InstructorPage/InstructorPage";
import "./styles/App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={["/", "/gyms"]} component={MainPage} />
        <Route exact path="/gyms/:id" component={GymPage} />
        <Route exact path="/instructors/:id" component={InstructorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
