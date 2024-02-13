import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/home";
import {InternalNavigation} from "@/navigation/internalNavigation.ts";


const router = createBrowserRouter([
    {
        path: InternalNavigation.ROOt,
        element: <Home/>,
    },
]);
export default router;