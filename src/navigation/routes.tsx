import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/home";
import {InternalNavigation} from "@/navigation/internalNavigation.ts";
import Pokemon from "@/services/pokemon";


const router = createBrowserRouter([
    {
        path: InternalNavigation.ROOt,
        element: <Home/>,
    },
    {
        path: InternalNavigation.POKEMON,
        element: <Pokemon/>,
    },
]);
export default router;