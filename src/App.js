import "./App.css";
import Home from "./pages/Home/Home";
import Survey from "./pages/Survey/Survey";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import Results from "./pages/Results/Results";
import Freelances from "./pages/Freelances/Freelances";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/survey/:questionNumber" element={<Survey />}></Route>
        <Route path="/survey/results" element={<Results />}></Route>
        <Route path="/freelances" element={<Freelances />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
