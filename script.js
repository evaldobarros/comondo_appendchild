let criarH1 = document.createElement('h1');
criarH1.innerText = 'Exercício com appendChild';
criarH1.id = 'tituloExerc';

const capturaBoby = document.querySelector('body');
capturaBoby.appendChild(criarH1);

const postarproduto = document.createElement('div');
postarproduto.innerHTML = `<h2 class="post-titulo">Preço do Mouse</h2>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/ComputerMouseCloseup3.jpg/220px-ComputerMouseCloseup3.jpg" alt="" />
<p class="post-texto">
  Por apenas R$ 44,90 reais
</p>`;

const publicacao = document.querySelector('body');
publicacao.appendChild(postarproduto);
