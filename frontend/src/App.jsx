import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './pages/aboutus/aboutUs';
import UserProfile from './pages/userProfile/userProfile';
import Universities from './pages/university/university';
import { SignUpForm } from './pages/signup/signUp';
import { LoginForm } from './pages/login/login';
import Home from './pages/home/home';
import UniversityDetail from './pages/universityDetail/universityDetail';
import Explore from './pages/explore/explore';
import Navbar from './components/navbar/navBar';
import Footer from './components/footer/footer';
import ChatBot from './components/ai/ai';
import ScrollToTop from './components/scrollToTop'; 
import Society from './pages/society/society'; 
import BookmarksPage from './pages/bookmark/bookmark'; 
import StudCircle from './pages/studyCircle/studyCircle';
import EmailVerificationPage from './pages/emailVerification/emailVerification';
import CreatePost from './pages/createPost/createPost';

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = ['/sign-up', '/sign-in', "/emailVerification"].includes(location.pathname);

  return (
    <>
      <ScrollToTop />

      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/universities/:name" element={<UniversityDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<LoginForm />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/society" element={<Society />} />
        <Route path="/bookmark" element={<BookmarksPage />} />
        <Route path="/emailVerification" element={<EmailVerificationPage />} />
        <Route path="/study-circles" element={<StudCircle  />} />
        <Route path="/create-post" element={<CreatePost  />} />
      </Routes>

      {!hideNavAndFooter && <ChatBot />}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
