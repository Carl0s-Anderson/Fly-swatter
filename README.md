Fly-swatter Game 🦟
Este é um jogo simples e divertido de "mata-mosquito" desenvolvido com HTML, CSS e JavaScript puro. O objetivo é clicar no maior número de mosquitos possível antes que o tempo acabe, tomando cuidado para não perder todas as suas vidas.

## Gameplay 🎮

Objetivo: Sobreviver até o cronômetro chegar a zero.

Como Jogar:

Abra o arquivo index.html.

Selecione um nível de dificuldade na tela inicial.

Clique em "Iniciar".

Mosquitos de tamanhos variados aparecerão em posições aleatórias na tela. Clique neles para eliminá-los!

Vidas: Você começa com 3 vidas. A cada mosquito que escapa (não é clicado antes de um novo aparecer), você perde uma vida.

Vitória: Se você sobreviver até o tempo acabar, você vence o jogo.

Derrota: Se você perder todas as suas 3 vidas, o jogo termina.

Níveis de Dificuldade ⚙️
O jogo oferece três níveis de dificuldade, que alteram a velocidade com que os mosquitos aparecem na tela:

Normal: Um novo mosquito aparece a cada 1.5 segundos.

Difícil: Um novo mosquito aparece a cada 1 segundo.

Muito Difícil: Um novo mosquito aparece a cada 0.75 segundos.

Tecnologias Utilizadas 💻
O projeto foi construído utilizando tecnologias web fundamentais:

HTML5: Para a estrutura das páginas (index.html, app.html, vitoria.html, fim-de-jogo.html).

CSS3: Para a estilização, layout, e o cursor personalizado (estilo.css).

JavaScript: Para toda a lógica do jogo, incluindo o cronômetro, a geração de mosquitos, o controle de vidas e a seleção de dificuldade (jogo.js).

Bootstrap: Utilizado para agilizar a criação de layouts responsivos na tela inicial e nas telas de fim de jogo.

Estrutura do Projeto 📂
/
├── img/                # Contém todas as imagens do jogo (background, mosquito, corações, etc.)
├── app.html            # Tela principal onde o jogo acontece
├── estilo.css          # Arquivo de estilos
├── fim-de-jogo.html    # Tela de "Game Over"
├── index.html          # Tela inicial para seleção de dificuldade
├── jogo.js             # Lógica principal do jogo
├── vitoria.html        # Tela de vitória
└── README.md           # Este arquivo
Como Executar o Projeto Localmente 🚀
Faça o clone ou o download deste repositório.

Abra o arquivo index.html no seu navegador de preferência.

Selecione a dificuldade e comece a jogar!