---
layout: post-half
title:  "Jekyll markdown post examples with Jorigamy!"
tagline: "How to exploit the full potential of posts in Markdown on Jekyll and the Jorigamy theme	"
date:   2018-01-20 20:43:35 +0100
categories: jekyll howto
tags: [ jekyll, update ]
img: 1.jpg
floating: shard-1-5x-3.png
image: assets/images/1.jpg
btn-icon: fa-github
btn-text: fork
btn-link: https://github.com/jorigamy/jorigamy.github.io
---
Thanks to Jekyll you can quickly test your business ideas on the web completely free, thanks to the creation of a landing pages structure and a good marketing strategy.

<!--more-->
If your marketing strategy includes blogging, thanks to Jorigamy you will be able to create posts in Markdown, which is a special language that uses special symbols to change the formatting of your text, and the underlying system will convert it to html.

Moreover, thanks to the fact that we are under Jekyll, I will be able to quickly import pieces of HTML code (therefore HTML elements pre-built in other files) through the possibilities offered by the [liquid tag](https://jekyllrb.com/docs/templates/).

In addition, Jorigamy has integrated [Prism](http://prismjs.com/) by default to use the highlighted code, which supports many languages.

## How to post in markdown

<img align="right" class="img-fluid" src="assets/images/posts/2018-01-20-jekyll-markdown-post-examples-with-jorigamy/jorigamy-markdown-post-editing.png">

This post wants to be able to quickly introduce you to the understanding and use of the markdown language.

Each file that you can create will have the extension `.md` or `.markdown`, a header of your post where you can enter different information related to the post as the title, description, tag, main image and other useful settings.

Here is an example of a header:

<pre><code class="language-markdown">
---
layout: post-half
title:  "Jorigamy markdown post sample"
tagline: "How to exploit the full potential of posts in Markdown on Jekyll and the Jorigamy theme	"
date:   2018-01-20 20:43:35 +0100
categories: jekyll howto
tags: [ jekyll, update ]
img: 1.jpg
floating: shard-1-5x-3.png
image: assets/images/1.jpg
btn-icon: fa-github
btn-text: fork
btn-link: https://github.com/jorigamy/jorigamy.github.io
---
Thanks to Jekyll you can quickly test your business ideas on the web completely free, thanks to the creation of a landing pages structure and a good marketing strategy.

<!--more-->
...
</code></pre>

after the introduction of your post there will be the actual text, usually to write in markedown we use a text editor like Visual Studio Code or Atom.

Thanks to the special characters you can quickly emphasize your posts, you can quickly insert elements such as title images, use italics and bold, take advantage of classes and much more.

## The markdown elements for your posts

Here are all the markdown elements that you can use in the posts of your blog Jorigamy with Jekyll.

### Headers

You can quickly enhance paragraphs by using a title using the # before text:

# Heading1
## Title2
### Title 3
#### Title 4
##### Title 5

<pre><code class="language-markdown">
# Heading1
## Title2
### Title 3
#### Title 4
##### Title 5
</code></pre>

### hemphasis

Each post needs an emphasis to better clarify the salient features of your article, so you can take advantage of the italics and bold to take stock of the situation.

*This text will be italic* _This will also be italic_
**This text will be bold** __This will also be bold__
*You **can** combine them*

<pre><code class="language-markdown">
*This text will be italic* _This will also be italic_
**This text will be bold** __This will also be bold__
*You **can** combine them*
</code></pre>

### Lists

Lists are a very useful tool for clarifying and describing information in a structured way:

Unordered:

* Item 1
* Item 2
* Item 2a * Item 2b

Ordered:

1. Item 1 
2. Item 2 
3. Item 3
 * Item 3a 
 * Item 3b

<pre><code class="language-markdown">
* Item 1
* Item 2
* Item 2a * Item 2b

1. Item 1 
2. Item 2 
3. Item 3
 * Item 3a 
 * Item 3b
</code></pre>

### Images

Each post needs exceptional images to break the text or to better describe the point of the situation. Remember to take advantage of the classes to make your images responisive otherwise on mobile they could ruin the layout.

To specify a css class in a markdown construct you will have to use this word: `{:.class}`

![Lost in space](https://fullit.github.io/assets/img/big/lost_in_404_space.jpg){: .img-fluid }

<pre><code class="language-markdown">
![GitHub Logo](/images/logo.png){:.img-fluid}

Format: ![Alt Text](url){:.img-fluid}
</code></pre>


| In markdown you can quikly use tables to align your images in right way, remember to style as you like the CSS of your table to have a amazing results. Use to size your pics in right way for best results. | ![Lost in space with description](https://fullit.github.io/assets/img/big/universe2.jpg "Description of lost in space image"){: .img-fluid } |

<pre><code class="language-markdown">
| In markdown you can quikly use tables to align your images in right way, remember to style as you like the CSS of your table to have a amazing results. Use to size your pics in right way for best results. | ![Lost in space with description](https://fullit.github.io/assets/img/big/universe2.jpg "Description of lost in space image"){: .img-fluid } |

</code></pre>

| ![Lost in space with description](https://fullit.github.io/assets/img/big/universe3.jpg "Description of lost in space image"){: .img-fluid } | I am text to the right I am text to the right I am text to the right I am text to the right |


<pre><code class="language-markdown">
| ![Lost in space with description](https://fullit.github.io/assets/img/big/universe3.jpg "Description of lost in space image"){: .img-fluid } | I am text to the right I am text to the right I am text to the right I am text to the right |


</code></pre>

### Video

	<div class="video-container">
	<iframe width="100%" height="auto" src="https://www.youtube.com/embed/ikbYpAHkurs?ecver=1" frameborder="0" allowfullscreen></iframe>
	</div>


<pre><code class="language-html">
	<div class="video-container">
	<iframe width="100%" height="auto" src="https://www.youtube.com/embed/ikbYpAHkurs?ecver=1" frameborder="0" allowfullscreen></iframe>
	</div>
</code></pre>

### Links

### Blockquotes

### Backslash escapes

### Code blocks

### Task lists

### Tables

### Emoji



To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

<pre data-src="index.html" class=" language-html"><code class=" language-html"><span class="token doctype">&lt;!DOCTYPE html&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript">
	<span class="token comment">// Just a lil’ script to show off that inline JS gets highlighted</span>
	window<span class="token punctuation">.</span>console <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>shortcut icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>favicon.png<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Prism<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>themes/prism.css<span class="token punctuation">"</span></span> <span class="token attr-name">data-noprefix</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>prefixfree.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"><span class="token keyword">var</span> _gaq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">'_setAccount'</span><span class="token punctuation">,</span> <span class="token string">'UA-33746269-1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'_trackPageview'</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.google-analytics.com/ga.js<span class="token punctuation">"</span></span> <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>intro<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>templates/header-main.html<span class="token punctuation">"</span></span> <span class="token attr-name">data-type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/html<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>features<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Dead simple<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
			Include prism.css and prism.js, use proper HTML5 code tags (<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>code.language-xxxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>), done!
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Intuitive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
			Language classes are inherited so you can only define the language once for multiple code snippets.
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Light as a feather<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
			The core is 2KB minified <span class="token entity" title="&amp;">&amp;amp;</span> gzipped. Languages add 0.3-0.5KB each, themes are around 1KB.
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Blazing fast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
			Supports parallelism with Web Workers, if available.
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Extensible<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
			Define new languages or extend existing ones.
			Add new features thanks to Prism’s plugin architecture.
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Easy styling<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
			All styling is done through CSS, with sensible class names like <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>.comment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>.string<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span>.property<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> etc
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>



<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
