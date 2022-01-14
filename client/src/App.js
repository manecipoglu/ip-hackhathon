import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import "./styles/App.scss";
<<<<<<< HEAD
import OurClasses from './components/OurClasses/OurClasses';
import OurInstructors from './components/OurInstructors/OurInstructors';
=======
import OurClasses from "./components/OurClasses/OurClasses";
>>>>>>> 4c40b204ec8c683e374c599f794ff22168be4051

export default function App() {
  return (
    <BrowserRouter>
      <Header />
<<<<<<< HEAD
      <OurClasses />
      <OurInstructors />
=======
      <Switch>
        <Route exact path={["/", "/gyms"]} component={MainPage} />
        <Route exact path="/gym/:id" component={OurClasses} />
      </Switch>
>>>>>>> 4c40b204ec8c683e374c599f794ff22168be4051
    </BrowserRouter>
  );
}
