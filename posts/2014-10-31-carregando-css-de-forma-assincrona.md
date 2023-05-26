---
layout: post
title: Carregando CSS de forma assíncrona
description: Carregue seu CSS de forma assíncrona e melhore a performance de sua página, não travando a renderização do browser.
categories: ["blog"]
comments: true
tags: ["front-end"]
type: single
permalink: /blog/:title/
---

A velocidade do site é extremamente importante, ainda mais aqui no Brasil onde nem o 3g funciona direito, por isso devemos dar a melhor performance para nosso site, deixando o carregamento dele rápido em qualquer dispositivo que for acessado.

O CSS é um dos arquivos que mais geram peso para a página, junto dos scripts, mas podemos otimizá-los e deixar a página bem mais leve sem precisar retirá-los de nosso site, por ser inviável ter uma página sem estilo.

### Carregamento assíncrono

O carregamento assíncrono baseia-se em carregar um arquivo, seja ele script ou CSS, após toda a renderização da página, para não haver bloqueio esperando baixar tal arquivo. E temos diversas formas de fazer um carregamento assíncrono com os arquivos de nossos sites, certamente você já viu diversas formas de carregar um javascript de forma assíncrona e há alguma formas com o CSS, apesar de ser um pouco mais difícil de ver.

O problema de ter um CSS carregando de forma assíncrona é pelo fato só renderizar a página até ter todas as folhas de estilo baixadas, mas é aí que entra o projeto LoadCSS, que foi desenvolvido pelo Filament Group.

### Como funciona?

O LoadCSS irá carregar todo o CSS de forma assíncrona sem ter a renderização bloqueada pelo navegador, o que torna o carregamento bem mais rápido. Com uma simples linha de script, que está disponível no repositório no Github, chamando o arquivo (ou arquivos, se tiver mais de um) no <head> ou acima do </body>. Eu, pessoalmente, prefiro a única opção, desta forma:

```js
<script src="loadCSS.min.js" />
<script>
   // carregue o arquivo
   loadCSS ("style.min.css");
</script>
</body>
```

Desta forma, a página será carregada sem bloqueios esperando uma quantidade enormes de CSS e deixará sua página com uma performance bem melhor.

### Contribua!

Este projeto é open source, por isso você pode contribuir e melhorá-lo, dando uma força aos criadores e ajudando a web como um todo. Contribua com o [repositório do LoadCSS no Github](https://github.com/filamentgroup/loadCSS).
