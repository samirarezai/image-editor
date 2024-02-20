import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/home";
import {InternalNavigation} from "@/navigation/internalNavigation.ts";
import Pokemon from "@/pages";
import JsTest from "@/pages/jsTest";


const router = createBrowserRouter([
    {
        path: InternalNavigation.ROOt,
        element: <Home/>,
    },
    {
        path: InternalNavigation.POKEMON,
        element: <Pokemon/>,
    },{
        path: InternalNavigation.JS_TEST,
        element: <JsTest/>,
    },
]);
export default router;