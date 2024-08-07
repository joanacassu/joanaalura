document.addEventListener('DOMContentLoaded', function() {
    const filmesContainer = document.getElementById('filmes');

    // Dados dos filmes
    const filmes = [
        { 
            titulo: 'Coraline',
            descricao: 'Uma jovem descobre uma porta secreta em sua nova casa que a leva a uma versão alternativa de sua própria vida.',
            imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/41/Coraline_poster.jpg/200px-Coraline_poster.jpg',
            genero: 'Animação/Fantasia',
            diretor: 'Henry Selick',
            ano: 2009,
            nota: 7.7
        },
        { 
            titulo: 'Barbie em A Princesa e a Plebeia',
            descricao: 'Uma princesa e uma plebeia descobrem que são gêmeas e trocam de lugar para experimentar as vidas uma da outra.',
            imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/Barbie_in_the_Princess_and_the_Pauper.jpg/200px-Barbie_in_the_Princess_and_the_Pauper.jpg',
            genero: 'Animação/Musical',
            diretor: 'Will Lau, William Lau',
            ano: 2004,
            nota: 6.7
        },
        { 
            titulo: 'Divertidamente',
            descricao: 'A jornada de emoções dentro da mente de uma jovem que enfrenta mudanças importantes em sua vida.',
            imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/Inside_Out_2015.jpg/200px-Inside_Out_2015.jpg',
            genero: 'Animação/Comédia',
            diretor: 'Pete Docter, Ronnie del Carmen',
            ano: 2015,
            nota: 8.1
        }
    ];

    // Renderiza os filmes na página
    filmes.forEach(filme => {
        const filmeHTML = `
            <div class="filme">
                <img src="${filme.imagem}" alt="${filme.titulo}">
                <h2>${filme.titulo}</h2>
                <p><strong>Gênero:</strong> ${filme.genero}</p>
                <p><strong>Diretor:</strong> ${filme.diretor}</p>
                <p><strong>Ano:</strong> ${filme.ano}</p>
                <p>${filme.descricao}</p>
                <p><strong>Nota IMDb:</strong> ${filme.nota}</p>
                <a href="#" class="btn">Ver mais</a>
            </div>
        `;
        filmesContainer.innerHTML += filmeHTML;
    });

    // Adiciona evento de clique aos botões "Ver mais"
    const botoesVerMais = document.querySelectorAll('.filme .btn');

    botoesVerMais.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Implementação de página de detalhes do filme.');
            // Aqui você pode adicionar lógica para abrir uma nova página ou modal com mais detalhes do filme.
        });
    });
});
