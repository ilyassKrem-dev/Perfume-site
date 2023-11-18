import { useEffect, useState } from "react";
export default function Products() {
    const [productsData , setProductsData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
                .then(data => setProductsData(data.products));
    } , [])
    return productsData
} 