import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const { items, wishlist } = useCart();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="card" style={{ borderRadius: 0, marginBottom: '1rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
                <Link to="/" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                    ShopSpace
                </Link>
                <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'inherit' })}>Home</NavLink>
                    <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'inherit' })}>
                        Cart ({items.length})
                    </NavLink>
                    <NavLink to="/wishlist" style={({ isActive }) => ({ color: isActive ? 'var(--primary)' : 'inherit' })}>
                        Wishlist ({wishlist.length})
                    </NavLink>
                    <button className="button secondary" onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </nav>
            </div>
        </header>
    );
}
