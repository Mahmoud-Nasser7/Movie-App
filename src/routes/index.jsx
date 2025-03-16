import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Explorepage from "../pages/Explorepage";
import SearchPage from "../pages/SearchPage";
import DetailsPage from "../pages/DetailsPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home/> },
      { path: ":explore", element: <Explorepage/> },
      { path: ":explore/:id", element: <DetailsPage/> },
      { path: "search", element: <SearchPage/> },
    ],
  },
])

export default router;