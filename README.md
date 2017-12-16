# jorigamy.github.io

Jekyll template that use Bootstrap 4 [Shards UI Kit](https://designrevision.com/downloads/shards/?ref=producthunt)

You can:

- Host on github pages (fork it and then edit your url and baseurl in the `_config.yaml` file)

<!-- Markdown snippet -->
- [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jorigamy/jorigamy.github.io)

- Or fork it, rename and then [Deploy with cloudcannon](https://cloudcannon.com/)


# Feature inside

You can configure many of the feature of the theme from config.yaml file

Whan you can edit:

* Google AD Sense
* Google Analytics
* Google tag manager
* Google Optimize
* Disqus comment system

There are three page layouts

* post (used for jekyll posts)
* index (used for pages and index page)
* signup (used for lead generation - you'll need to edit this part from the includes/themes/default-signup.html the mailchimp code)

## Blog post template

For every post or page you'll can configure many option for every field that you'll insert in the template section at the top of the file:


```
---
layout: index # the type of layout
group: "navigation" # if the page/post will be display in the top menu
title: Home # Title, post/page
tagline: The awesome description
css: # load custom css from folder /assets/css/
js: # load custom css from folder /assets/js/
keywords: # header keywods
canonical:
img:
image: assets/images/shard-1-5x-3.png
custom-head: <meta name="theme-color" content="#0067F4" /> <!-- Load custom html code on the head of the site -->
---
```
## Post Introduction

```
<!--more--> # except separator the post preview in the blog main page after this separator will not displayed
```

## simpleParallax
To use parallax effect more info at [SimpleParallax website](https://anakao-theme.com/simpleparallax/)

```
<img class="simple-parallax-down" src="path">

# in markdown
![Title](/image-path){:.simple-parallax}

<img class="simple-parallax" src="path">
```

## Animate.css

This theme is equipped with [Animate.css](https://daneden.github.io/animate.css/) to create simple and quick animations

| Class Name | | | |
|--------------------|--------------------|--------------------|--------------------|
| `bounce` |`flash` |`pulse` |`rubberBand` |
| `shake` |`headShake` |`swing` |`tada` |
| `wobble` |`jello` |`bounceIn` |`bounceInDown` |
| `bounceInLeft` |`bounceInRight` |`bounceInUp` |`bounceOut` |
| `bounceOutDown` |`bounceOutLeft` |`bounceOutRight` |`bounceOutUp` |
| `fadeIn` |`fadeInDown` |`fadeInDownBig` |`fadeInLeft` |
| `fadeInLeftBig` |`fadeInRight` |`fadeInRightBig` |`fadeInUp` |
| `fadeInUpBig` |`fadeOut` |`fadeOutDown` |`fadeOutDownBig` |
| `fadeOutLeft` |`fadeOutLeftBig` |`fadeOutRight` |`fadeOutRightBig` |
| `fadeOutUp` |`fadeOutUpBig` |`flipInX` |`flipInY` |
| `flipOutX` |`flipOutY` |`lightSpeedIn` |`lightSpeedOut` |
| `rotateIn` |`rotateInDownLeft` |`rotateInDownRight` |`rotateInUpLeft` |
| `rotateInUpRight` |`rotateOut` |`rotateOutDownLeft` |`rotateOutDownRight` |
| `rotateOutUpLeft` |`rotateOutUpRight` |`hinge` |`jackInTheBox` |
| `rollIn` |`rollOut` |`zoomIn` |`zoomInDown` |
| `zoomInLeft` |`zoomInRight` |`zoomInUp` |`zoomOut` |
| `zoomOutDown` |`zoomOutLeft` |`zoomOutRight` |`zoomOutUp` |
| `slideInDown` |`slideInLeft` |`slideInRight` |`slideInUp` |
| `slideOutDown` |`slideOutLeft` |`slideOutRight` |`slideOutUp` |

Full example:

```html
<h1 class="animated infinite bounce">Example</h1>
```
Markdown sample

```html
# Example{:.animated .infinite .bounce}
```

## To do

- deploy to heroku button
- write wiki
