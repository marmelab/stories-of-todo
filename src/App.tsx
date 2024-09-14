import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodosApp } from "./pages/TodoApp";
import { Home } from "./pages/Home";
import "./App.css";
import { Slideshow } from "./pages/Slideshow";
import { Admin } from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos",
    element: <TodosApp />,
  },
  {
    path: "/slideshow",
    element: <Slideshow />,
  },
  {
    path: "/admin/*",
    element: <Admin />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
