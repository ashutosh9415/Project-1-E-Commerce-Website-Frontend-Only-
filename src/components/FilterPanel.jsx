export default function FilterPanel({ category, setCategory, price, setPrice, rating, setRating }) {
    return (
        <div className="card" style={{ padding: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>Filters</h3>
            <div className="input-group">
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                </select>
                <select value={price} onChange={e => setPrice(e.target.value)}>
                    <option value="">All Prices</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-300">$100 - $300</option>
                    <option value="300-1000">$300+</option>
                </select>
                <select value={rating} onChange={e => setRating(e.target.value)}>
                    <option value="">All Ratings</option>
                    <option value="4">4+ Stars</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.8">4.8+ Stars</option>
                </select>
            </div>
        </div>
    );
}
