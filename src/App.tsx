import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import { useGtmPageView } from "./hooks/useGtmPageView";

// Critical route — eagerly loaded for fastest FCP
import Index from "./pages/Index.tsx";

// All other routes — lazy loaded, only fetched when navigated to
const PrivacyPage = lazy(() => import("./pages/PrivacyPage.tsx"));
const AlgemeneVoorwaardenPage = lazy(() => import("./pages/AlgemeneVoorwaardenPage.tsx"));
const VenturesPage = lazy(() => import("./pages/VenturesPage.tsx"));
const VentureDetailPage = lazy(() => import("./pages/VentureDetailPage.tsx"));
const HoeWeBouwenPage = lazy(() => import("./pages/HoeWeBouwenPage.tsx"));
const OverOnsPage = lazy(() => import("./pages/OverOnsPage.tsx"));
const MeebouwenPage = lazy(() => import("./pages/MeebouwenPage.tsx"));
const News = lazy(() => import("./pages/News.tsx"));
const NewsArticle = lazy(() => import("./pages/NewsArticle.tsx"));
const BedanktPage = lazy(() => import("./pages/BedanktPage.tsx"));
const PersMapPage = lazy(() => import("./pages/PersMapPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

/** Wrapper that uses router-dependent hooks */
const AppRoutes = () => {
  useGtmPageView();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-ink" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/ventures/:slug" element={<VentureDetailPage />} />
          <Route path="/werkwijze" element={<HoeWeBouwenPage />} />
          <Route path="/hoe-we-bouwen" element={<HoeWeBouwenPage />} />
          <Route path="/over-ons" element={<OverOnsPage />} />
          <Route path="/meebouwen" element={<MeebouwenPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/voorwaarden" element={<AlgemeneVoorwaardenPage />} />
          <Route path="/nieuws" element={<News />} />
          <Route path="/nieuws/:slug" element={<NewsArticle />} />
          <Route path="/bedankt" element={<BedanktPage />} />
          <Route path="/persmap" element={<PersMapPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
