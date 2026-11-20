import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useGtmPageView } from "./hooks/useGtmPageView";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Critical route — eagerly loaded for fastest FCP
import Index from "./pages/Index.tsx";

// All other routes — lazy loaded, only fetched when navigated to
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.tsx"));
const AlgemeneVoorwaardenPage = lazy(() => import("./pages/AlgemeneVoorwaardenPage.tsx"));
const VenturesPage = lazy(() => import("./pages/VenturesPage.tsx"));
const PostPilotPage = lazy(() => import("./pages/PostPilotPage.tsx"));
const EmmaStudioPage = lazy(() => import("./pages/EmmaStudioPage.tsx"));
const HoeWeBouwenPage = lazy(() => import("./pages/HoeWeBouwenPage.tsx"));
const OverOnsPage = lazy(() => import("./pages/OverOnsPage.tsx"));
const MeebouwenPage = lazy(() => import("./pages/MeebouwenPage.tsx"));
const News = lazy(() => import("./pages/News.tsx"));
const NewsArticle = lazy(() => import("./pages/NewsArticle.tsx"));
const BedanktPage = lazy(() => import("./pages/BedanktPage.tsx"));
const PersMapPage = lazy(() => import("./pages/PersMapPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

/** Wrapper that uses router-dependent hooks */
export const AppRoutes = () => {
  useGtmPageView();

  return (
    <>
      <ScrollToTop />
      {/*
        ErrorBoundary catches any render error from lazy-loaded pages.
        Without it, a component error causes React to unmount the whole tree → blank page.
        The boundary shows a recovery UI so users don't need to hard-refresh.

        Fallback uses inline styles — no Tailwind/CSS dependency during the transition
        so the loading state renders correctly even before the stylesheet is applied.
      */}
      <ErrorBoundary>
        <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0E0E0C' }} />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ventures" element={<VenturesPage />} />
            <Route path="/ventures/postpilot" element={<PostPilotPage />} />
            <Route path="/ventures/emmastudio" element={<EmmaStudioPage />} />
            <Route path="/ventures/:slug" element={<Navigate to="/ventures" replace />} />
            <Route path="/werkwijze" element={<HoeWeBouwenPage />} />
            <Route path="/hoe-we-bouwen" element={<Navigate to="/werkwijze" replace />} />
            <Route path="/ventures/post-pilot" element={<Navigate to="/ventures/postpilot" replace />} />
            <Route path="/over-ons" element={<OverOnsPage />} />
            <Route path="/meebouwen" element={<MeebouwenPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/voorwaarden" element={<AlgemeneVoorwaardenPage />} />
            <Route path="/nieuws" element={<News />} />
            <Route path="/nieuws/:slug" element={<NewsArticle />} />
            <Route path="/bedankt" element={<BedanktPage />} />
            <Route path="/persmap" element={<PersMapPage />} />
            <Route path="/ventures/pactly" element={<Navigate to="/ventures" replace />} />
            <Route path="/ventures/oak-marketing" element={<Navigate to="/ventures" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
