export default function ProductGrid({ products, children }) {
    return (
        <div className="grid grid-3">
            {products.map(product => (
                <div key={product.id}>{children(product)}</div>
            ))}
        </div>
    );
}
