# site_conversor_temperatura
Entendendo a Estrutura do Projeto
Um projeto web simples como este geralmente se divide em três arquivos principais:

index.html: É o arquivo principal que o navegador carrega. Ele define a estrutura básica da página, como títulos, parágrafos, formulários, etc. No nosso caso, ele contém os elementos HTML para que o usuário possa inserir a temperatura e as unidades, além do botão para realizar a conversão.
style.css: Este arquivo contém as regras de estilo que definem a aparência da página. Ele controla as cores, fontes, tamanhos, espaçamentos e layout geral da página.
script.js: Aqui reside a lógica do programa. É neste arquivo que escrevemos o JavaScript para realizar os cálculos de conversão, responder às ações do usuário e atualizar a página.
Como Funciona?
Carregamento da Página:

Quando você abre o arquivo index.html em um navegador, o navegador lê o código HTML e constrói a estrutura básica da página na tela.
Em seguida, o navegador carrega o arquivo style.css e aplica as regras de estilo para definir a aparência da página.
Por fim, o navegador carrega o arquivo script.js e executa o código JavaScript.
Interação do Usuário:

O usuário digita a temperatura no campo de entrada e seleciona as unidades inicial e final nos menus suspensos.
Ao clicar no botão "Converter", o evento onclick dispara a função converter() em script.js.
Lógica de Conversão (JavaScript):

A função converter() obtém os valores inseridos pelo usuário.
Utiliza estruturas condicionais (como if-else) para determinar qual fórmula de conversão deve ser utilizada, com base nas unidades selecionadas.
Realiza os cálculos necessários para converter a temperatura.
Atualiza o elemento HTML onde o resultado será exibido, mostrando o valor convertido.
Analisando o Código JavaScript em Detalhamento
JavaScript

function converter() {
  // ... (código já explicado anteriormente)
}
Obtendo os valores: As primeiras linhas da função obtêm os valores dos elementos HTML correspondentes à temperatura, unidade inicial e unidade final.
Lógica de conversão: A parte central da função contém as condições para determinar qual fórmula de conversão utilizar. Por exemplo, se a unidade inicial for Celsius e a final Fahrenheit, a fórmula utilizada será (temperatura * 9/5) + 32.
Atualizando o resultado: A última linha da função atualiza o elemento HTML onde o resultado será exibido, usando o método textContent.
Personalizando e Expandindo
Este é um exemplo básico de um conversor de temperatura. Você pode personalizar e expandir este código de várias maneiras:

Mais unidades: Adicione suporte para outras unidades de temperatura, como Rankine.
Validação de dados: Implemente verificações para garantir que o usuário insira apenas valores numéricos válidos.
Interface do usuário: Melhore a aparência da interface usando CSS mais avançado.
Funcionalidades extras: Adicione um histórico de conversões, a capacidade de salvar as configurações do usuário, etc.
Framework: Utilize um framework JavaScript como React ou Vue para criar interfaces mais complexas e interativas.
Em resumo
Este projeto demonstra como HTML, CSS e JavaScript trabalham juntos para criar uma aplicação web simples e funcional. O HTML define a estrutura, o CSS a aparência e o JavaScript a lógica.
