import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import HeroList from "./components/HeroList";
import HeroDetails from "./components/HeroDetails";
import { useState } from "react";
import heroesData from "./utils/heroesData";
import HeroContext from "./utils/HeroContext";

const App = () => {
  const [heroes, setHeroes] = useState(heroesData);
  return (
    <HeroContext.Provider value={{heroes, setHeroes}}>
      <div>
        <Header />
        <Outlet />
      </div>
    </HeroContext.Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/heroes",
        element: <HeroList />,
      },
      {
        path: "/detail/:id",
        element: <HeroDetails />,
      },
    ],
  },
]);

export default App;
