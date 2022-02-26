---
layout: post
title: Como melhorar a nota no Google Pagespeed em sites WordPress
description: Fazer projetos no WordPress sempre dá muito trabalho para chegar numa nota legal no Google Pagespeed Insights, né? Se liga nessas dicas que vou passar.
categories: ["blog"]
comments: true
tags: ["wordpress", "performance"]
type: single
permalink: /blog/:title/
---

Diversos fatores são necessários para que o Google Pagespeed Insights dê uma nota boa para seu site, várias destas [métricas são atualizadas](https://developers.google.com/speed/docs/insights/release_notes) em alguns momentos e mesmo com essas dicas é sempre bom estar testando seu site na ferramenta da Google de tempos em tempos.

É bom ressaltar também que, além de nota no Google Pagespeed Insights, o mais importante mesmo é a experiência do usuário. E é o que a Google leva em consideração na hora de rankear seu site.

Claro que boa parte dessa nota é levando em consideração boas práticas de UX (User Experience), mas é bom pensar que não adianta seu site ter nota 100 se o seu usuário não conseguir utilizar seu site.

Dizendo isso, neste post vou explicar diversas dicas que utilizo diariamente em projetos WordPress para melhorar a performance e consequentemente a nota no Google Pagespeed Insights.

### Introdução

Antes de tudo, é importante notar que o WordPress é uma ferramenta completa mas que também dá muito espaço para fazer coisas erradas, pois é muito fácil instalar vários plugins para fazer coisas simples que no final carregam diversos _assets_ desnecessários.

Então a primeira dica é **evite usar muitos plugins** e quando for usar, pesquise bem o que esse plugin adiciona na raiz do seu site pois pode acabar prejudicando muito a performance.

### Plugin de cache

Cachear e minificar seus assets é importantíssimo para uma melhor performance em seu site WordPress.

O plugin que mais dá resultado nos projetos que faço é o [WP Fastest Cache](https://br.wordpress.org/plugins/wp-fastest-cache/).

### Prefira font-face, estilos e scripts locais ao invés de CDNs

A facilidade de só adicionar um `<link>` do CDN é tentadora, mas é uma requisição e quanto mais requisições mais lento seu site fica. Pensando nisso, prefira sempre:

- Baixar as fontes do Google Fonts e usar o transfonter.org para criar os estilos
- Baixar os scripts e estilos por NPM e criar um bundle de vendors com Gulp ou Webpack

Dessa forma você evita requisições externas e deixa tudo a disposição do servidor, pronto para ser usado.

### Faça preload dos arquivos de fontes

Importante para evitar quebras de textos no carregamento, o que gera uma piora na [nota do CLS (Cumulative Layout Shift)](https://web.dev/i18n/pt/cls/).

```html
<link
  rel="preload"
  href="Roboto-Regular.woff2"
  as="font"
  crossorigin="anonymous"
/>
```

### Lazy loading nas imagens

Carregue suas imagens por demanda com o atributo `loading="lazy"` em suas imagens

```html
<img src="foto.png" loading="lazy" />
```

### Adicione `width` e `height` nas imagens

Para evitar pioras notas no CLS é importantíssimo falar para o navegador qual o tamanho da imagem para que aquele espaço seja reservado na renderização antes da requisição da imagem.

```html
<img src="foto.png" loading="lazy" width="800" height="600" />
```

Dessa forma o navegador já reservará os 800x600px da imagem e não ficará empurrando o conteúdo quando a imagem for requisitada.

### Utilize imagens otimizadas e no formato webp

O [formato webp](https://developers.google.com/speed/webp) é importantíssimo para um melhor carregamento de sua página em navegadores que já tem suporte para este formato.

Há alguns plugins que facilitam a conversão e otimização, os que eu mais tive resultado foram o [WebP Express](https://br.wordpress.org/plugins/webp-express/) e [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/), este último conta com diversas possibilidades de integração com CDNs o que facilita na hora de utilizar outro servidor para hospedar suas imagens.

### Reduza as queries

Muitas das funções WordPress geram queries, pois essas funções fazem buscas no banco de dados e nos retornam resultados.

Para ter uma performance melhor, ao invés de por exemplo, chamar várias vezes o título de um post com o `get_the_title()` prefira criar uma variável `$title = get_the_title()` e reutilize. Da mesma forma, invés de puxar várias vezes uma thumbnail com `get_the_post_thumbnail_url()`, crie uma variável `$thumbnail_url = get_the_post_thumbnail_url()` e reutilize. E assim com diversas outras funções, dessa forma você evita chamadas desnecessárias e além disso, código repetido.

### Conclusão

Mas estas são apenas alguns dos pontos que deixam seu site WordPress mais leve e consequentemente com a nota melhor no Google Pagespeed Insights e para fechar saiba que cada caso é um caso, pois cada tema WordPress foi feito de um jeito, com muitos plugins ou com poucos plugins, temas comprados ou temas feitos, servidores bons e ruins.

Antes de procurar uma bala de prata verifique toda a condição daquele site e procure melhorar ponto por ponto. Melhorar a performance e a nota no Google Pagespeed Insights é um trabalho de formiguinha e tire da cabeça que você fará isso em um dia, é um trabalho recorrente, por isso tenha calma e vá refatorando aos poucos.

E, claro, salve este post nos favoritos pois sempre que eu descobrir coisas novas sobre performance no WordPress atualizarei este post.
