import React from 'react';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para processar o pagamento e finalizar a compra
        history.push('/thank-you'); // Redireciona para uma página de agradecimento após a compra
    };

    return (
        <div className="checkout">
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" required />
            </div>
            <div>
            <label htmlFor="address">Endereço:</label>
            <input type="text" id="address" required />
            </div>
            <div>
            <label htmlFor="payment">Informações de Pagamento:</label>
            <input type="text" id="payment" required />
            </div>
            <button type="submit">Confirmar Compra</button>
            </form>
        </div>
    );
};

export default Checkout;