import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

function App() {
    return (
        <ThemeProvider>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/wishlist" element={<WishlistPage />} />
                    </Routes>
                </Router>
            </CartProvider>
        </ThemeProvider>
    );
}

export default App;
