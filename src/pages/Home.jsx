import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import SkeletonLoader from '../components/SkeletonLoader';
import productsData from '../data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [loading, setLoading] = useState(true);
    const { toggleWishlist } = useCart();

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    const filteredProducts = useMemo(() => {
        return productsData.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = category ? product.category === category : true;
            const matchesRating = rating ? product.rating >= Number(rating) : true;
            const matchesPrice = price
                ? price === '0-100'
                    ? product.price <= 100
                    : price === '100-300'
                        ? product.price > 100 && product.price <= 300
                        : product.price === '300-1000'
                            ? product.price > 300
                            : true
                : true;
            return matchesSearch && matchesCategory && matchesRating && matchesPrice;
        });
    }, [search, category, price, rating]);

    return (
        <main className="container">
            <div className="page-header">
                <div>
                    <h1>Shop the latest products</h1>
                    <p style={{ color: 'var(--muted)' }}>Browse through curated collections and shop with ease.</p>
                </div>
                <SearchBar search={search} setSearch={setSearch} />
            </div>

            <FilterPanel category={category} setCategory={setCategory} price={price} setPrice={setPrice} rating={rating} setRating={setRating} />

            {loading ? (
                <SkeletonLoader />
            ) : (
                <ProductGrid products={filteredProducts}>
                    {product => <ProductCard key={product.id} product={product} onToggleWishlist={toggleWishlist} />}
                </ProductGrid>
            )}
        </main>
    );
}
