import Home from './pages/Home';
import Prices from "./pages/Prices";
import Calculator from "./pages/Calculator";
import Contacts from "./pages/Contacts";
import NotFound404 from "./pages/404";
import { BrowserRouter,Routes, Route } from "react-router-dom";

const App = () => (

  <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/prices" element={<Prices/>}></Route>
      <Route path="/calculator" element={<Calculator/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
      <Route path="*" element={<NotFound404/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
);

export default App
