import React from 'react';

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<any[]>([]);

    React.useEffect(() => {
        // Aqui você pode buscar os itens do carrinho de uma API ou do localStorage
        const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(items);
    }, []);

    const handleRemoveItem = (itemId: number) => {
        const updatedItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleCheckout = () => {
        // Lógica para redirecionar para a página de checkout
    };

    return (
        <div>
            <h1>Carrinho de Compras</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>Preço: R${item.price}</p>
                            <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );
};

export default Cart;