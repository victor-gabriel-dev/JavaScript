import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importando estilos específicos do cabeçalho

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Minha Loja Virtual</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/carrinho">Carrinho</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;