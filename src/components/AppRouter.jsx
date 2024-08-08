import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import PrestationsPage from "../pages/PrestationsPage";
import AstroSignPage from "../pages/AstroSignPage";
import DisclaimerPage from "../pages/DisclaimerPage";
import Blog from "../pages/Blog";

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/prestations" element={<PrestationsPage />} />
                <Route path="/anniversaire" element={<AstroSignPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter; 