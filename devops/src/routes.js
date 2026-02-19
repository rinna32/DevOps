
import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import InexPage from "./Components/InexPage";
import MariaPage from "./Components/MariaPage";
import DiPage from "./Components/DiPage";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: InexPage
            },
            {
                path: 'maria',
                Component: MariaPage
            },
            {
                path: 'di',
                Component: DiPage
            }
        ]
    }
])