import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Lazy loading des composants de pages
const HomePage = lazy(() => import("../pages/HomePage"));
const PrestationsPage = lazy(() => import("../pages/PrestationsPage"));
const AstroSignPage = lazy(() => import("../pages/AstroSignPage"));
const DisclaimerPage = lazy(() => import("../pages/DisclaimerPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const CGUPage = lazy(() => import("../pages/CGUPage"));
const CGVPage = lazy(() => import("../pages/CGVPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const BlogArticlePage = lazy(() => import("../pages/BlogArticlePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AppRouter = () => {
  const basename = "/Melanie";

  return (
    <Router
      basename={basename}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Header />
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prestations" element={<PrestationsPage />} />
          <Route path="/anniversaire" element={<AstroSignPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogArticlePage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/CGU" element={<CGUPage />} />
          <Route path="/CGV" element={<CGVPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRouter;
