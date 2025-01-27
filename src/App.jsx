import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="font-popin">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
