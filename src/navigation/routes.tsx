import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/home";
import {InternalNavigation} from "@/navigation/internalNavigation.ts";
import Pokemon from "@/pages";
import JsTest from "@/pages/jsTest";
import RQ from "@/pages/RQ";


const router = createBrowserRouter([
    {
        path: InternalNavigation.ROOt,
        element: <Home/>,
    },
    {
        path: InternalNavigation.POKEMON,
        element: <Pokemon/>,
    },
    {
        path: InternalNavigation.JS_TEST,
        element: <JsTest/>,
    },
    {
        path: InternalNavigation.JS_TEST,
        element: <RQ/>,
    },
]);
export default router;