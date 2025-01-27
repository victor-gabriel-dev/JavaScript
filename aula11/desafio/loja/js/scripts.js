document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { id: 1, nome: 'Produto 1', preco: 10.00 },
        { id: 2, nome: 'Produto 2', preco: 20.00 },
        { id: 3, nome: 'Produto 3', preco: 30.00 }
    ];

    const carrinho = [];

    function atualizarCarrinho() {
        const carrinhoContainer = document.getElementById('carrinho');
        carrinhoContainer.innerHTML = '';

        carrinho.forEach(produto => {
            const item = document.createElement('div');
            item.textContent = `${produto.nome} - R$${produto.preco.toFixed(2)}`;
            carrinhoContainer.appendChild(item);
        });

        const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
        const totalItem = document.createElement('div');
        totalItem.textContent = `Total: R$${total.toFixed(2)}`;
        carrinhoContainer.appendChild(totalItem);
    }

    function adicionarAoCarrinho(produto) {
        carrinho.push(produto);
        atualizarCarrinho();
    }

    const produtosContainer = document.getElementById('produtos');
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.textContent = `${produto.nome} - R$${produto.preco.toFixed(2)}`;
        
        const botao = document.createElement('button');
        botao.textContent = 'Adicionar ao Carrinho';
        botao.addEventListener('click', () => adicionarAoCarrinho(produto));
        
        produtoDiv.appendChild(botao);
        produtosContainer.appendChild(produtoDiv);
    });
});