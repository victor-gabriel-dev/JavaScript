import React from 'react';

interface ProductDetailProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
    };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductDetail;