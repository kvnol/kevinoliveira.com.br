---
layout: post
title: "Selecionando elementos com o getElementBy()"
description: "Para interagir com os elementos do DOM precisamos, primeiro, selecioná-los e os métodos getElementBy() do JavaScript irão nos ajudar nessa missão."
categories: ["blog"]
tags: ["javascript"]
comments: true
type: single
visible: true
permalink: /blog/:title/
---

Os métodos compostos por `getElementBy` retornam um ou mais elementos, num HTMLCollection (array-like), do DOM (Document Object Model) que podem ser selecionados (get) de várias formas, são elas: `id`, `tag`, `name` e `class`.

### O método `getElementById()`
O método `getElementById()` busca no DOM e, com base no **ID passado por parâmetro**, retorna o primeiro elemento (a prática recomendada é a não repetição de IDs no HTML).

{% highlight html %}
<main id="main">
...
</main>
{% endhighlight %}

{% highlight javascript %}
var elemento = document.getElementById('main'); // buscará o id #main
// <main id="main">...</main>
{% endhighlight %}

### O método `getElementsByTagName()`
O método `getElementsByTagName()` busca no DOM e, com base no **nome da tag passado por parâmetro**, retorna um HTMLCollection (array-like) com todos os elementos criados com a tag. 

{% highlight html %}
<div class="header">
...
</div>

<div class="content">
...
</div>

<div class="footer">
...
</div>
{% endhighlight %}

{% highlight javascript %}
var elementos = document.getElementsByTagName('div'); // buscará todas as <div>
// (3) [div.header, div.content, div.footer]
{% endhighlight %}

Com este método, após guardarmos os dados numa variável, conseguimos achar outros elementos dentro destes utilizando notação de array, desta forma:

{% highlight html %}
<div class="header">
  <h1 class="header-title">Olá, mundo!</h1>
</div>
{% endhighlight %}

{% highlight javascript %}
var elementosFilhos = elementos[0].getElementsByTagName('h1'); // buscará <h1> dentro da div.header
// [h1.header-title]
{% endhighlight %}

### O método `getElementsByName()`
O método `getElementsByName()` busca no DOM e retorna uma NodeList com base nos elementos que contiverem o atributo `name`.

{% highlight html %}
<form class="contato">
  <select class="contato-nome" name="nome"></select>
  <select class="contato-email" name="email"></select>
</form>
{% endhighlight %}

{% highlight javascript %}
var elementos = document.getElementsByName('email'); // buscará 'email' em qualquer atributo 'name'
// [select.contato-email]
{% endhighlight %}

### O método `getElementsByClassName()`
O método `getElementsByClassName()` busca no DOM e, baseado no nome ou nomes passados no parâmetro, gera uma HTMLCollection e, da mesma forma que o `getElementsByTagName()`, você consegue utilizar notação de array para buscar elementos dentro de outros.

{% highlight html %}
<header class="header">
  <h1 class="header-title"></h1>
</header>
{% endhighlight %}

{% highlight javascript %}
var elemento = document.getElementsByClassName('header'); // buscará .header
// [header.header]

var elementoFilho = elemento[0].getElementsByClassName('header-title'); // buscará .header-title dentro de .header
// [h1.header-title]
{% endhighlight %}

Tendo em mente que tantos métodos podem ser utilizados para criar um array-like ou retornar os elementos diretamente, qual o mais recomendado para ser utilizado deve ser sua dúvida.

A dica é: utilize os métodos especifícos para casos específicos, se você quer puxar todos os elementos `name`, utilize o método `getElementsByName()` ao invés de colocar um ID ou classe no seu `select`, por exemplo. Assim, você utilizará os métodos que foram criados exatamente para o problema que você precisa resolver.