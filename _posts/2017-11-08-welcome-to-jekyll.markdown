---
layout: post-half
title:  "2017 Welcome to Jekyll!"
tagline: "Hello world from a new Jekyll blog"
date:   2017-11-08 22:43:35 +0100
categories: jekyll update
tags: [ jekyll, update ]
img: 1.jpg
floating: shard-1-5x-3.png
image: assets/images/1.jpg
btn-icon: fa-github
btn-text: fork
btn-link: https://github.com/jorigamy/jorigamy.github.io
---
You’ll find this post in your `_posts` directory.

<!--more-->

 Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

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
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> languageItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> languages <span class="token operator">=</span> components<span class="token punctuation">.</span>languages<span class="token punctuation">;</span>
	<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> id <span class="token keyword">in</span> languages<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">==</span> <span class="token string">'meta'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> name <span class="token operator">=</span> languages<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>title <span class="token operator">||</span> languages<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>

		languageItems<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			tag<span class="token punctuation">:</span> <span class="token string">'li'</span><span class="token punctuation">,</span>
			attributes<span class="token punctuation">:</span> <span class="token punctuation">{</span>
				<span class="token string">'data-id'</span><span class="token punctuation">:</span> id
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			contents<span class="token punctuation">:</span> <span class="token punctuation">[</span>
				name<span class="token punctuation">,</span>
				<span class="token string">' - '</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					tag<span class="token punctuation">:</span> <span class="token string">'code'</span><span class="token punctuation">,</span>
					contents<span class="token punctuation">:</span> id
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	$u<span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'ul'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		contents<span class="token punctuation">:</span> languageItems<span class="token punctuation">,</span>
		inside<span class="token punctuation">:</span> <span class="token string">'#languages-list'</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	$u<span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">contents</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#languages-list-count'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre>

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
