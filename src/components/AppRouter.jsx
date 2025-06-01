import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import PrestationsPage from "../pages/PrestationsPage";
import AstroSignPage from "../pages/AstroSignPage";
import DisclaimerPage from "../pages/DisclaimerPage";
import ContactPage from "../pages/ContactPage";
import CGUPage from "../pages/CGUPage";
import CGVPage from "../pages/CGVPage";

const AppRouter = () => {
    return (
        <Router
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}
        >
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/prestations" element={<PrestationsPage />} />
                <Route path="/anniversaire" element={<AstroSignPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/CGU" element={<CGUPage />} />
                <Route path="/CGV" element={<CGVPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
