import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";
import Layout from "../Layout";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                path:"carrinho",
                element: <Carrinho />,
            },
            {
                path:"perfil",
                element: <Perfil />
            },
            {
                path:"home",
                element: <Home />
            }
        ]
    }
])