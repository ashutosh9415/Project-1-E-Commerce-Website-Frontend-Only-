export default function SkeletonLoader({ count = 6 }) {
    return (
        <div className="grid grid-3">
            {Array.from({ length: count }, (_, index) => (
                <div key={index} className="card" style={{ minHeight: '320px', padding: '1rem' }}>
                    <div style={{ background: '#e2e8f0', width: '100%', height: '180px', borderRadius: '1rem' }} />
                    <div style={{ marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
                        <div style={{ background: '#e2e8f0', height: '18px', width: '60%' }} />
                        <div style={{ background: '#e2e8f0', height: '18px', width: '90%' }} />
                        <div style={{ background: '#e2e8f0', height: '44px', width: '100%', borderRadius: '0.8rem' }} />
                    </div>
                </div>
            ))}
        </div>
    );
}
