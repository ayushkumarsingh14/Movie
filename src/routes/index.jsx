import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePages from "../pages/ExplorePages";
import DetailPage from "../pages/DetailPage";
import SearchPage from "../pages/SearchPage";
import React from "react";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : ":explore",
                element : <ExplorePages/>
            },
            {
                path : ":explore/:id",
                element : <DetailPage/>
            },
            {
                path : "search",
                element : <SearchPage/>
            }
        ]
    }
])

export default router;