import React, { useEffect, useState } from "react";

export default function Products() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [count, setCount] = useState(0);
    const [Products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${checked ? 'sale_' : ''}productds.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터 받아옴')
                setProducts(data);
            }).catch(e => setError('에러가 발생'))
            .finally(() => setLoading(false));
        return () => {
            console.log('청소 끝');
        }
    }, [checked]);

    if (loading) return <p>Loading...</p>

    if (error) return <p>{error}</p>

    return (
        <>
            <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor="checkbox">Show Only Hot Sale</label>
            <ul>
                {Products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    )
}