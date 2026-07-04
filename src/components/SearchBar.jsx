export default function SearchBar({ search, setSearch }) {
    return (
        <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input-group"
            style={{ width: '100%' }}
        />
    );
}
