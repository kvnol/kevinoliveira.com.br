---
layout: post
type: single
title: "Boas práticas para inputs de texto"
comments: true
description: "Inputs de texto são componentes fundamentais na interação do usuário com a interface, por isso é importante construirmos da melhor forma."
categories: ["blog"]
tags: ['HTML', 'CSS', 'UI Design']
permalink: /blog/:title/
---

Trabalhar com **UI Design é pensar em todos os detalhes** e em todas as interações do usuário com os componentes de nossa interface. Seja essa interface um site ou uma aplicação, quase sempre teremos campos de texto (inputs) onde os usuários passarão mensagens e/ou informações que necessitam de validação, e pensar em como esses campos serão construídos e interagirão com as informações ali passadas são importantíssimos para uma boa experiência.

E neste post vou tentar descontruir um input de texto para que fique mais fácil e claro o entendimento do conceito de um dos componentes mais importantes de uma interface, se não for o mais importante.

### Descreva o input

Seja transparente com o usuário mostrando e dizendo o que aquele input faz realmente, seja claro e sem complicações. Uma imagem no campo para ilustrar e a propriedade `placeholder`, no HTML, fará o usuário ter mais confiança no input em que ele está digitando.

<p data-height="450" data-theme-id="dark" data-slug-hash="bYJQBz" data-default-tab="css,result" data-user="kvnol" data-embed-version="2" data-pen-title="Input #1: Placeholder" class="codepen">See the Pen <a href="https://codepen.io/kvnol/pen/bYJQBz/">Input #1: Placeholder</a> by Kevin Oliveira (<a href="https://codepen.io/kvnol">@kvnol</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Tamanhos

Pensar no tamanho (largura/altura) de um input é importantíssimo, pois facilita a compreensão do conteúdo que ali será inserido, por parte do usuário, e não ocupa espaço desnecessário em sua interface. E, para ajudar nisso, a unidade de medida `ch` deixa o espaço no seu input com base no `font-size` que foi determinado no último escopo.

<p data-height="450" data-theme-id="dark" data-slug-hash="JOVmVK" data-default-tab="css,result" data-user="kvnol" data-embed-version="2" data-pen-title="Input #1: Sizes" class="codepen">See the Pen <a href="https://codepen.io/kvnol/pen/JOVmVK/">Input #1: Sizes</a> by Kevin Oliveira (<a href="https://codepen.io/kvnol">@kvnol</a>) on <a href="https://codepen.io">CodePen</a>.</p>

No exemplo acima, o input CVC (código de segurança) tem por padrão 3 caracteres e nada nos impede de determinar essa largura diretamente no CSS.

### `:focus` no input é importante

É comum vermos inputs com a propriedade `outline` desabilitada quando o input está selecionado, muitas vezes pelo outline padrão do browser não possuir/combinar a mesma identidade visual da sua interface.

A propriedade `outline` é importante para marcar visualmente seu input selecionado e assim, melhorar a acessibilidade de sua interface.

<p data-height="450" data-theme-id="dark" data-slug-hash="QOPzyN" data-default-tab="css,result" data-user="kvnol" data-embed-version="2" data-pen-title="Input #3: outline focus" class="codepen">See the Pen <a href="https://codepen.io/kvnol/pen/QOPzyN/">Input #3: outline focus</a> by Kevin Oliveira (<a href="https://codepen.io/kvnol">@kvnol</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Pontos de toque

No design responsivo, o ponto de toque é extremamente importante, pensando tanto na altura do input quanto na altura da linha que distancia um input para o outro (como no exemplo abaixo). O ponto de toque ideal para mobile é de, pelo menos, 48 pixels de altura/largura, [segundo a pesquisa da Google](https://developers.google.com/speed/docs/insights/SizeTapTargetsAppropriately?hl=pt-br).

<p data-height="450" data-theme-id="dark" data-slug-hash="WXWLdo" data-default-tab="css,result" data-user="kvnol" data-embed-version="2" data-pen-title="Input #4: Pontos de toque" class="codepen">See the Pen <a href="https://codepen.io/kvnol/pen/WXWLdo/">Input #4: Pontos de toque</a> by Kevin Oliveira (<a href="https://codepen.io/kvnol">@kvnol</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Para finalizar, é importantíssimo pensarmos na acessibilidade e usabilidade antes mesmo do design ao construírmos inputs, sem muita viagem, pois eles são peças fundamentais que ligam o usuário à nossa interface.
