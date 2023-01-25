---
layout: post
title: Dicas para ir bem no Code In The Dark
description: Reuni nesse post algumas dicas e táticas que usei para me sair bem na rodada especial do Code In The Dark.
categories: ["blog"]
comments: true
tags: ["desafios", "html", "css"]
type: single
permalink: /blog/:title/
---

No último sábado (21) tivemos a segunda edição da Conferência CSS Brasil onde pude reencontrar, depois de 3 anos de pandemia, muita gente querida da comunidade que me inspirou e ainda inspira a ser um dev melhor. Assisti também diversas palestras incríveis onde sempre podemos aprender coisas que não sabemos.

E como encerramento da Conferência CSS Brasil fomos direto para o Kat Klub, um bar na Augusta onde foi realizado mais uma edição do Code In The Dark onde a campeã foi a incrível [@nataliafdev](https://twitter.com/nataliafdev). Eu consegui sentir um pouquinho da pressão de codar no Code In The Dark pela segunda vez (a primeira foi em 2017 onde fui horrível) numa rodada especial, onde fui desafiado pelo Diego Eis para [salvar o front-end (?)](https://kvnol.github.io/ofrontendacabou/).

Nesse post vou dar algumas dicas sobre como me organizei e fiz para me sair bem na rodada especial e ter uma tela minimamente apresentável.

### Você só tem 15 minutos!

Longe de mim querer gatilhar quem tem ansiedade mas é a realidade. Você só tem 15 minutos para entregar uma tela sem ver como está ficando, com música altíssima, luzes piscando sem parar e muita gente gritando e até te empurrando (eu tava tentando me concentrar e a galera estava fazendo mosh atrás de mim, só para vocês terem uma noção).

Então na hora de se inscrever no Code In The Dark não se assuste com isso, tente abstrair tudo ao redor, olhe bem a disposição de teclas no notebook e o layout proposto antes de começar a rolar o tempo para que não haja surpresas.

### Alinhe o grid

Meu objetivo primário era "não passar vergonha". Sim, está entre aspas porque não é vergonha nenhuma não entregar um layout bom sem conseguir ver nada de como está ficando e no cenário caótico que expliquei anteriormente.

E para não acontecer isso comigo eu reparei nas vezes que fui ao Code In The Dark que as pessoas eliminadas muitas vezes não tinham nem alinhado o layout, o que já gera estranheza e pode fazer você ser eliminado de cara. Então minha simples estratégia no início foi "a primeira coisa que vou fazer é alinhar o grid, com o container de 640px assim já fica aceitável e alinhado". E dito e feito porque pelo que consegui ver as outras pessoas não tinham alinhado o layout e acabei saindo na frente aí.

### Simplifique e aproxime as cores

Com o layout alinhado, ter as cores de background, de texto e de botões já leva seu layout para outro nível de proximidade ao que foi proposto pelo desafio. E quando digo cores não são as cores exatas, até porque não tem como - a não ser que você tenha uma tabela de cores hexadecimais na cabeça.

Então o azul escuro virou `color: #333;`, o azul claro vira `color: #fff`, o rosinha vai ser `color: pink` e assim por diante, a ideia é aproximar as cores para que não fique muito diferente do layout proposto e gere estranheza para a galera que vai fazer o julgamento do melhor layout.

### Não tenha vergonha do CSS Inline

Eu sei, eu sei que aprendemos desde o começo estudando boas práticas que CSS Inline é uma merda e não deve ser usado quando temos a possibilidade de separá-lo do HTML. Mas gente, é um desafio, você só tem 15 minutos e como você não vai precisar criar interações no seu layout é MUITO mais simples usar CSS inline ao invés de perder tempo scrollando o layout para cima e para baixo para escrever CSS dentro do `<head>`. Ah é, você só tem um arquivo, então ou você escreve tudo inline ou na tag `<style>`.

O único momento que não escrevi CSS inline foi quando precisei aproveitar estilos para o mesmo componente, que no caso do layout eram `inputs`, pois repetir muitas linhas de CSS inline iriam acabar me atrapalhando mais do que ajudando.

### Atente-se às fontes do layout

Não, você não vai poder usar webfonts no seu layout então é importantíssimo reparar pelo menos qual o tipo de fonte usada no layout. São serifadas ou sem serifa? Percebeu qual o layout está usando? Já aplica isso no `<body>` do seu HTML e boa.

Assim seus títulos e textos no corpo do layout não ficarão quebrados com uma `Times New Roman` padrão mas sim com alguma que se aproxime do layout proposto.

### Resete o máximo de estilos que conseguir

Eu imagino que você já teve a oportunidade de escrever um HTML sem estilização, salvado o arquivo, aberto no navegador e percebido que os estilos padrões são muito diferentes do que a maioria dos layouts utilizam. Pois os inputs ficam com bordas estranhas, os botões com um visual da década de 90 e as listas cheias de marcadores e margens desnecessárias.

Por isso lembre-se de resetar isso, no desafio assim que criei as listas apliquei aquele famoso snippet de reset, só que inline: `<ul style="margin: 0; padding: 0; list-style: none">`. E nos botões e nos inputs apliquei o `appeareance: none` para sumir com o `border` e `background-color` desnecessário.

### Deixe os detalhes para o final

Eu sei que com a pressão queremos imaginar e detalhar tudo logo no começo, mas uma dica que me fez sair bem foi deixar todos esses detalhes e ajustes finos para o final.

Sabe aquelas margens dos títulos, entre seções, inputs e tamanhos aproximados de fontes? Isso foi tudo ajuste fino, nos últimos 3/4 minutos foquei apenas nisso e revisei o layout atualizando textos escritos errados e até textos que tinha esquecido de colocar.

Com isso consegui separar os 15 minutos em 3 partes: alinhamento e conteúdo, montagem da página e ajustes finos.

## Conclusão

Essas são dicas mestres que você vai conseguir fazer um layout perfeito sem olhar? Não, não são mas tomando conhecimento do tempo que você tem sem se desesperar, focando no seu código e organizando cada parte do desenvolvimento daquela tela você conseguirá ter um bom resultado.

Claro que depois dos 15 minutos ao ver o layout você verá imperfeições, e se você tiver a oportunidade de olhar o código que fez novamente terá nojo e a certeza que faria tudo diferente com calma, mas a proposta é exatamente essa.

Só para concluir: vá em eventos, faça amizades, assista palestras, aprenda coisas novas e não tenha vergonha de fazer live coding, todo mundo está ali para curtir e aprender e se alguém for escroto contigo de alguma forma procure a organização do evento.

Espero que com essas dicas você possa se sair bem não só nos desafios do Code In The Dark, mas que sejam úteis para seu dia-a-dia construindo layouts e pintando botões. Valeu, falou!
