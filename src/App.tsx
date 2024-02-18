import {
    RouterProvider,
} from "react-router-dom";
import router from "@/navigation/routes.tsx";
import { Provider } from 'react-redux'
import { store } from './stateManagment/store.ts'
function App() {
  return (
    <>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </>
  )
}

export default App
