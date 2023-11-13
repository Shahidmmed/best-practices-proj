import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layout/Layout";
import Drivers from "./pages/Drivers/Drivers";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PageLayout />}>
            <Route path="/" element={<Drivers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
