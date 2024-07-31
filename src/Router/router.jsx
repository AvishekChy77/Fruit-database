import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../page/Home/Home";
import CountryDetails from "../Components/CountryDetails/CountryDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/countryDetails/:name",
          element: <CountryDetails/>,
        },
      ]
    },
    
  ]);

export default router;