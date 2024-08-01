import React, {useEffect, useState} from "react";

export default function Products() {
    const [count, setCount] = useState(0);
    const [Products, setProducts] = useState([]);
    
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    useEffect(() => {
        fetch(`data/${checked ? 'sale_' : ''}products.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log('데이터 받아옴')
                setProducts(data);
            });
        return () => {
            console.log('청소 끝');
        }
    }, [checked]);
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