import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';




const App = lazy(() => import('./App'));
const HeroSection = lazy(() => import('./components/hero_section/HeroSection'));
const LandingPage = lazy(() => import('./components/landing-page/LandingPage'));
const ProblemAndSolutions = lazy(() => import('./components/problem_and_solutions_section/ProblemAndSolutions'));

function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<RotatingSquare />}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="hero" element={<HeroSection />} />
                        <Route path="landing" element={<LandingPage />} />
                        <Route path="problem_and_solutions" element={<ProblemAndSolutions />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router

