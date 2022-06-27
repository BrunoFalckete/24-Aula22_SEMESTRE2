document.getElementById('maior').value = 0;
function handleChange(n) {
    const alterado = document.getElementById(n).value;
    const maior = document.getElementById('maior').value;
    if(alterado > maior){
        document.getElementById('maior').value = alterado;
    } else {
        if(n === 'n1'){
            const n2 = document.getElementById('n2').value;
            const n3 = document.getElementById('n3').value;

            if(alterado > n2 && alterado > n3){
                document.getElementById('maior').value = alterado;
            }
        } else if (n === 'n2'){
            const n1 = document.getElementById('n1').value;
            const n3 = document.getElementById('n3').value;

            if(alterado > n1 && alterado > n3){
                document.getElementById('maior').value = alterado;
            }
        } else {
            const n1 = document.getElementById('n1').value;
            const n2 = document.getElementById('n2').value;

            if(alterado > n1 && alterado > n2){
                document.getElementById('maior').value = alterado;
            }
        }
    }
}
function validate(){
    //Seta as variaveis do form
    const nome = document.getElementById('nome');
    const sexo = document.getElementById('sexo');
    const termo = document.getElementById('termo');
    const label = document.getElementById('labeltermo');
    const mensagem = document.getElementById('mensagem');
    //checa se tem algum item sem preencher
    if(termo.checked === false || nome.value === '' || sexo.value === 'default'){
        mensagem.value = 'Preencha todos os campos!';
        //marca ou desmarca os items que estiverem sem preencher
        //se o termo nao estiver checado adiciona a classe danger
        if(termo.checked === false){
            termo.classList.add('danger');
            label.classList.add('danger');
        } else {
            //se o termo estiver checado remove a classe danger que possivelmente foi adicionada anteriormente
            termo.classList.remove('danger');
            label.classList.remove('danger');
        }
        if (nome.value === '') {
            nome.classList.add('danger');                   
        } else {
            nome.classList.remove('danger');
        }
        if (sexo.value === 'default'){
            sexo.classList.add('danger');                        
        } else {
            sexo.classList.remove('danger');
        }
    } else {
        mensagem.value = 'Cadastro realizado com sucesso!';
        mensagem.classList.remove('danger');
        nome.classList.remove('danger');    
        sexo.classList.remove('danger');    
        label.classList.remove('danger');
        mensagem.classList.add('success');                        
    }
}
function gerarNumeros() {
    //Obtem todas as celulas da tabela
    const row1col1 = document.getElementById('11');
    const row1col2 = document.getElementById('12');
    const row1col3 = document.getElementById('13');
    const row2col1 = document.getElementById('21');
    const row2col2 = document.getElementById('22');
    const row2col3 = document.getElementById('23');
    const row3col1 = document.getElementById('31');
    const row3col2 = document.getElementById('32');
    const row3col3 = document.getElementById('33');
    //substitui o conteudo atual em cada celula por um numero aleatorio de 0 a 9
    row1col1.innerHTML = Math.floor(Math.random() * 10);
    row1col2.innerHTML = Math.floor(Math.random() * 10);
    row1col3.innerHTML = Math.floor(Math.random() * 10);
    row2col1.innerHTML = Math.floor(Math.random() * 10);
    row2col2.innerHTML = Math.floor(Math.random() * 10);
    row2col3.innerHTML = Math.floor(Math.random() * 10);
    row3col1.innerHTML = Math.floor(Math.random() * 10);
    row3col2.innerHTML = Math.floor(Math.random() * 10);
    row3col3.innerHTML = Math.floor(Math.random() * 10);
} 