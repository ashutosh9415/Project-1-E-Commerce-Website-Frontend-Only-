import { useCart } from '../context/CartContext';

export default function WishlistPage() {
    const { wishlist, toggleWishlist, addToCart } = useCart();

    return (
        <main className="container">
            <div className="page-header">
                <div>
                    <h1>Your Wishlist</h1>
                    <p style={{ color: 'var(--muted)' }}>Save products you want to revisit later.</p>
                </div>
            </div>

            {wishlist.length === 0 ? (
                <div className="card card-body">
                    <p>Your wishlist is empty.</p>
                </div>
            ) : (
                <div className="grid grid-3">
                    {wishlist.map(product => (
                        <div key={product.id} className="card">
                            <img src={product.images[0]} alt={product.name} className="product-image" />
                            <div className="card-body">
                                <h2 className="product-title">{product.name}</h2>
                                <p style={{ color: 'var(--muted)' }}>${product.price.toFixed(2)}</p>
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <button className="button primary" onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </button>
                                    <button className="button danger" onClick={() => toggleWishlist(product)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}
