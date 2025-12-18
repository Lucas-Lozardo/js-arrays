 const botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
 botaoOrdenarPorPreco.addEventListener('click', ordenacaoDePrecos);

 function ordenacaoDePrecos(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
 }
 