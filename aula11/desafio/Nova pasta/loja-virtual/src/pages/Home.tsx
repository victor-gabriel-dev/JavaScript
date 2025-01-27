import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = () => {
    const featuredProducts = [
        // Exemplo de produtos em destaque
        { id: 1, name: 'Produto 1', price: 100, image: 'url_da_imagem_1' },
        { id: 2, name: 'Produto 2', price: 150, image: 'url_da_imagem_2' },
        { id: 3, name: 'Produto 3', price: 200, image: 'url_da_imagem_3' },
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Bem-vindo à nossa loja virtual!</h1>
                <h2>Produtos em destaque</h2>
                <ProductList products={featuredProducts} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;