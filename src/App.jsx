import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Signup from "./pages/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        
        <Navbar />

        <main className="flex-1">
          <Routes>
            
            <Route
              path="/"
              element={
                <>
                  <Hero />
                </>
              }
            />
            <Route path="/signup" element={<Signup />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;