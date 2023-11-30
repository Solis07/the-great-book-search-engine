import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import SignupForm from "./pages/SignupForm.jsx";
import LoginForm from "./pages/LoginForm.jsx";
import SearchBooks from "./pages/SearchBooks.jsx";
import SavedBooks from "./pages/SavedBooks.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        index: true,
        element: <SearchBooks />,
      },
      {
        path: "/saved",
        element: <SavedBooks />,
      },
    ],
  },
]);
ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
