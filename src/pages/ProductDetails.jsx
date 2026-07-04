import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart, toggleWishlist } = useCart();

    const product = useMemo(() => productsData.find(item => item.id === id), [id]);
    if (!product) return <main className="container"><p>Product not found.</p></main>;

    return (
        <main className="container">
            <div className="page-header">
                <div>
                    <h1>{product.name}</h1>
                    <p style={{ color: 'var(--muted)' }}>{product.category}</p>
                </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                    <img src={product.images[0]} alt={product.name} style={{ width: '100%', borderRadius: '1rem' }} />
                    <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
                        {product.images.map((src, index) => (
                            <img key={index} src={src} alt={`${product.name} ${index}`} style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'cover', height: '120px' }} />
                        ))}
                    </div>
                </div>
                <div>
                    <p className="badge">{product.rating} ★</p>
                    <h2 style={{ marginTop: '1rem' }}>${product.price.toFixed(2)}</h2>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.75 }}>{product.description}</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <button className="button primary" onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                        <button className="button secondary" onClick={() => toggleWishlist(product)}>
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
