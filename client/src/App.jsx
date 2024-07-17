import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/Routes";
import DemoContext from "./context/DemoContext";

function App() {
  const [count, setCount] = useState(0);
  const routera = createBrowserRouter(ROUTES);
  return (
    <>
      <DemoContext>
        <RouterProvider router={routera} />
      </DemoContext>
    </>
  );
}

export default App;
