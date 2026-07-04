import { Link } from 'react-router-dom';

export default function ProductCard({ product, onToggleWishlist }) {
    return (
        <article className="card">
            <img src={product.images[0]} alt={product.name} className="product-image" />
            <div className="card-body">
                <div className="product-meta">
                    <span className="badge">{product.category}</span>
                    <span>{product.rating} ★</span>
                </div>
                <h2 className="product-title">{product.name}</h2>
                <p style={{ margin: '0.5rem 0 1rem', color: 'var(--muted)' }}>${product.price.toFixed(2)}</p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <Link to={`/product/${product.id}`} className="button secondary">
                        View Details
                    </Link>
                    <button className="button primary" type="button" onClick={() => onToggleWishlist(product)}>
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </article>
    );
}
