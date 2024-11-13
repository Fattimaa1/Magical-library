import "./App.css";
// to hame projeha in import bayad to file App bashe
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import Home from "./pages/Home/Home";
import NewBooks from "./pages/NewBooks/NewBooks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-books",
        element: <NewBooks />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
