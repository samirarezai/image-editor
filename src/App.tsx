import {
    RouterProvider,
} from "react-router-dom";
import router from "@/navigation/routes.tsx";


function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
