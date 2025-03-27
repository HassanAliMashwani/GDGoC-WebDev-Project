import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";  
import { DarkModeProvider } from "./context/DarkModeContext";  

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const Article = lazy(() => import("./pages/Article"));

function App() {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <Router>
          <Navbar />
          <div className="container mt-5 pt-4">
            <Suspense
              fallback={
                <div className="text-center mt-4">
                  <div className="spinner-border text-primary"></div>
                  <p>Loading...</p>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path="/article/:articleUrl" element={<Article />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
