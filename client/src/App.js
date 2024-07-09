import "./App.css";
import Add from "./addUser/Add";
import User from "./getUser/User";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Update from "./updateUser/Update";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;