import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { ShoppingCardProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCardProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </ShoppingCardProvider>
  );
}
export default App;
