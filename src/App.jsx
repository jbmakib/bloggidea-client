import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./assets/Pages/Home/Home/Home";
import Blogs from "./assets/Pages/Blogs/Blogs/Blogs";
import NotFound from "./assets/Pages/Shared/NotFound/NotFound";
import About from "./assets/Pages/About/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Navigate to={"/"} />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
