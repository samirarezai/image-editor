import {
    RouterProvider,
} from "react-router-dom";
import router from "@/navigation/routes.tsx";
import {Provider} from 'react-redux'
import {store} from './stateManagment/store.ts'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


function App() {
    const queryClient = new QueryClient();

    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router}/>
                </QueryClientProvider>
            </Provider>
        </>
    )
}

export default App
