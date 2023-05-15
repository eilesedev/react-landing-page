import './App.css';
import HeroSection from './components/hero_section/HeroSection';
import LandingPage from './components/landing-page/LandingPage';
import Footer from './components/footer/Footer'; 
import ProblemsAndSolutions from './components/problem_and_solutions_section/ProblemAndSolutions';

function App() {
    return (
        <div>

              <HeroSection />
              <LandingPage />
              <ProblemsAndSolutions />
              

            <Footer />
        </div>

    )
}

export default App