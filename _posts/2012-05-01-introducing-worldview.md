---
layout: default
title: Introducing WorldView, an easier way to use OpenLayers.
categories: blog
date: 4th May, 2012 
---
<div class = 'page-header'>
  <h2 class = 'article-header'>
    Introducing WorldView
  </h2>
  <div class = 'details'>
    4th May, 2012
  </div>
</div>

I wrote <a href = "https://github.com/shreyas-satish/worldview" target="_blank">WorldView</a> to solve a couple of simple, recurring problems while using <a href = "http://openlayers.org" target="_blank">OpenLayers</a>. Nothing more. While OpenLayers is a powerful mapping library, it can be cumbersome at times. Christopher Schmidt-one of the lead developers of OpenLayers-had this to say :

> The OpenLayers API is difficult to get started with for many simple problems. It can be hard to use, confusing to start, and difficult to understand for solving simple problems. 

It was encouraging to learn that, an OpenLayers core developer shared the same sentiments about the library. Now, I needed WorldView to solve the two most common problems I have while working with maps :  

1. Add features such as markers, lines, polygons and circles to a map.
2. Add a simple configurable toolbar to the map, that allows you to dynamically add the above features.

WorldView abstracts away these two problems by providing with an easy-to-use set of APIs. What if I need to do something more advanced? WorldView wraps or returns (depending on the use case) OpenLayers objects, so you can use the OpenLayers API directly.

I wrote WorldView in <a href="http://coffeescript.org" target="_blank">CoffeeScript</a>, to satisfy my curiosity about the language. I feel CoffeeScript's clean syntax along with it's nifty features like classes and comprehensions, do make a case for it to be preferred to JavaScript. Coming back to WorldView, you DO NOT need to use CoffeeScript to use the library; I've included the worldview.js in the source.

Finally, we've been using the WorldView-OpenLayers combination at <a href = 'http://mapunity.in/' target = '_blank'>Mapunity</a> and it has saved us time and simplified our code when we're dealing with maps.

