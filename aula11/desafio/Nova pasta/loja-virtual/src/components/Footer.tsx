import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <h4>Contato</h4>
                <p>Email: contato@loja-virtual.com</p>
                <p>Telefone: (11) 1234-5678</p>
            </div>
            <div>
                <h4>Links Úteis</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cart">Carrinho</a></li>
                    <li><a href="/checkout">Checkout</a></li>
                </ul>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Loja Virtual. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;