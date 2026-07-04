import { useCart } from '../context/CartContext';

export default function CartPage() {
    const { items, total, removeFromCart } = useCart();

    return (
        <main className="container">
            <div className="page-header">
                <div>
                    <h1>Your Cart</h1>
                    <p style={{ color: 'var(--muted)' }}>Review your selected products and proceed when ready.</p>
                </div>
            </div>

            {items.length === 0 ? (
                <div className="card card-body">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div className="card card-body" style={{ padding: 0 }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>
                                        <button className="button danger" onClick={() => removeFromCart(product.id)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong>Total</strong>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </main>
    );
}
