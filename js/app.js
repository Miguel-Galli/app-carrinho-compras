let totalGeral = 0;
limpar();



function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let quantidade = document.getElementById('quantidade').value;
    let preco = produto.split('R$')[1];

    let subTotal = quantidade * preco;
    let listaProdutos = document.getElementById('lista-produtos');

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    if (quantidade < 1) {
        alert('Quantidade inválida');
        document.getElementById('quantidade').value = 0;
        return;
    }

    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

    totalGeral = totalGeral + subTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;


    
    document.getElementById('quantidade').value = 0;

    

}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}