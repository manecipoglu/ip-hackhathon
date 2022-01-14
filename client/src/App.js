import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import "./styles/App.scss";
import OurClasses from "./components/OurClasses/OurClasses";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={["/", "/gyms"]} component={MainPage} />
        <Route exact path="/gym/:id" component={OurClasses} />
      </Switch>
    </BrowserRouter>
  );
}
