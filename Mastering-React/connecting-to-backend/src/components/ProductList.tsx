import React, {useEffect, useState} from 'react';

const ProductList = ({category}: { category: string }) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log('fetching products in category: ', category);
        setProducts(['product1', 'product2']);
    }, [
        category,
    ]);

    return <div>Product List</div>;
};

export default ProductList;
