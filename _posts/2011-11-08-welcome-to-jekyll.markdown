---
layout: post
title:  "2011 Welcome to Jekyll!"
tagline: "Hello world from a new Jekyll blog"
date:   2011-11-08 22:43:35 +0100
categories: jekyll update
tags: [ jekyll, update ]
img: 1.jpg
image: assets/images/1.jpg
floating: shard-1-5x-3.png
btn-icon: fa-github
btn-text: fork
btn-link: https://github.com/jorigamy/jorigamy.github.io
locker: "yes"
locker-content: "Know the right secrets and be rich"
locker-header: "Discover The secrets and became a web ninja"
locker-description: "With the secret you'll can metamorph into a new generation web ninja"
facebook-locker: "lantoniotrento"
locker-tweet-url: "https://sitelink.com"
locker-tweet-text: "This is the text of the tweet"
locker-tweet-via: "lantoniotrento"
locker-linkedin: "sharelink.com"

---
	
You’ll find this post in your `_posts` directory.

<!--more-->

 Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

## Header social locker

 {% include social-locker.html %}

## End mai social locker

## ingected Social locker here

<script>
jQuery(document).ready(function ($) {
   $('.to-lock').sociallocker({
	text:{
	   header: 'Scopri i segreti',
	   message: 'Diventa il re dei segreti'
	},
	overlap:{
	   mode: 'blurring'
	},
	facebook:{
	   like:{
	      url: 'https://facebook.com/lantoniotrento'
	   }
	},
	linkedin:{
	   share:{
	      url: 'https://jorigamy.github.io'
	   }
	},
	buttons:{
	   order: ["facebook-like","twitter-tweet","linkedin-share"],
	   counters: false,
	   lazy: false
	}
   });
});
</script>
<article id="default-usage">
    <section>
        <div class="to-lock onp-sl-content" style="display: none; background-color: #f9f9f9; text-align: center;">
            <div class="header">
                <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing</strong></p>
                <p>
                    Maecenas sed consectetur tortor. Morbi non vestibulum eros, at posuere nisi praesent consequat.
                </p>
            </div>
            <div class="image">
                <img src="img/image.jpg" alt="Preview image" /><br />
                <i>Aenean vel sodales sem. Morbi et felis eget felis vulputate placerat.</i>
            </div>
            <div class="footer">
                <p>Curabitur a rutrum enim, sit amet ultrices quam. Morbi dui leo, euismod a diam vitae, hendrerit ultricies arcu. Suspendisse tempor ultrices urna ut auctor.</p>
            </div>
        </div>
    </section>
</article>



## End social locker

Jekyll also offers powerful support for code snippets:

{% highlight javascript %}
    /*jshint browser: true, strict: true, undef: true */<br />
    /*global define: false */<br />
<br />
    ( function( window ) {<br />
<br />
    'use strict';<br />
<br />
    // class helper functions from bonzo https://github.com/ded/bonzo<br />
<br />
    function classReg( className ) {<br />
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");<br />
    }<br />
<br />
    // classList support for class management<br />
    // altho to be fair, the api sucks because it won't accept multiple classes at once<br />
    var hasClass, addClass, removeClass;<br />
<br />
    if ( 'classList' in document.documentElement ) {<br />
      hasClass = function( elem, c ) {<br />
        return elem.classList.contains( c );<br />
      };<br />
      addClass = function( elem, c ) {<br />
        elem.classList.add( c );<br />
      };<br />
      removeClass = function( elem, c ) {<br />
        elem.classList.remove( c );<br />
      };<br />
    }<br />
    else {<br />
      hasClass = function( elem, c ) {<br />
        return classReg( c ).test( elem.className );<br />
      };<br />
      addClass = function( elem, c ) {<br />
        if ( !hasClass( elem, c ) ) {<br />
          elem.className = elem.className + ' ' + c;<br />
        }<br />
      };<br />
      removeClass = function( elem, c ) {<br />
        elem.className = elem.className.replace( classReg( c ), ' ' );<br />
      };<br />
    }<br />
<br />
    function toggleClass( elem, c ) {<br />
      var fn = hasClass( elem, c ) ? removeClass : addClass;<br />
      fn( elem, c );<br />
    }<br />
<br />
    var classie = {<br />
      // full names<br />
      hasClass: hasClass,<br />
      addClass: addClass,<br />
      removeClass: removeClass,<br />
      toggleClass: toggleClass,<br />
      // short names<br />
      has: hasClass,<br />
      add: addClass,<br />
      remove: removeClass,<br />
      toggle: toggleClass<br />
    };<br />
<br />
    // transport<br />
    if ( typeof define === 'function' && define.amd ) {<br />
      // AMD<br />
      define( classie );<br />
    } else {<br />
      // browser global<br />
      window.classie = classie;<br />
    } <br />
<br />
    })( window );<br />

{% endhighlight %}


Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
