import Navbar from "./components/Navbar";
import {BrowserRouter,  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )

}

export default App;

