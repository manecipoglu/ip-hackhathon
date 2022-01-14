import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import "./styles/App.scss";
import OurClasses from './components/OurClasses/OurClasses';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <OurClasses />
    </BrowserRouter>
  );

}
