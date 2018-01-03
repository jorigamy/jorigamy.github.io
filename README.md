![Jorigamy screenshot](https://raw.githubusercontent.com/jorigamy/jorigamy.github.io/master/assets/images/jorigamy-readme.jpg)

# Jorigamy Jekyll Bootstrap4 theme for Github Pages
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/jorigamy/jorigamy.github.io/blob/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/badges/shields.svg?style=social&label=Fork)](https://github.com/jorigamy/jorigamy.github.io) <!--[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Stars)](https://github.com/jorigamy/jorigamy.github.io) -->[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/lantoniotrento) [![Follow me on Steem](https://img.shields.io/badge/Follow&#32;me-on&#32;Steem-orange.svg)](https://steemit.com/@antoniotrento)

**[Jorigamy](https://jorigamy.github.io) Jekyll template that use Bootstrap 4** [Shards UI Kit](https://designrevision.com/downloads/shards/?ref=producthunt) with which you can create your website quickly and **completely free**.

When I say completely free I mean exactly free my friend! No hidden fees no marketing nothing at all!

It's a personal project that **I also use to have free hosting on a commercial level for my websites** and I want to share it with the web!

To use it you can:

- Host on github pages (fork it and then edit your url and baseurl in the `_config.yaml` file)

<!-- Markdown snippet -->
- [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jorigamy/jorigamy.github.io) (simplest way, just click button connect github edit domain name, and done)

- Or fork it, rename and then [Deploy with cloudcannon](https://cloudcannon.com/) (cloudcannon give you the possibility to use visual editor to edit your blog posts)

Are not you good at doing these things alone? Try **following the installation guide** on the [jorigamy wiki](https://github.com/jorigamy/jorigamy.github.io/wiki/Installation) and feel free to open a [new issue or request](https://github.com/jorigamy/jorigamy.github.io/issues) if you think is necessary.

# Features inside

You can configure many of the feature of the theme from [`_config.yml`](https://github.com/jorigamy/jorigamy.github.io/blob/master/_config.yml) file

What you can edit:

* Google AD Sense
* Google Analytics
* Google tag manager
* Google Optimize
* Disqus comment system

There are three page layouts

* post or half-post (used for jekyll posts with 1 or 2 column)
* index (used for pages and index page)
* signup (used for lead generation - you'll need to edit this part from the includes/themes/default-signup.html the mailchimp code)
* gallery (enable the gallery layout to show your favourite photos)

## Page template

For every post or page you'll can configure many option for every field that you'll insert in the template section at the top of the file:


```
---
layout: index # the type of layout (can be index, page, post, half-post, signup, gallery)
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

## SimpleParallax

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

## Popmotion

![Popmotion](https://raw.githubusercontent.com/jorigamy/jorigamy.github.io/master/assets/images/popmotion-pink.jpg)

I implemented a javascript library that allows you to create animations quickly and easily.
In order to use it you should know a bit of Javascript and [read the documentation](https://popmotion.io/)

# To do

- [x] deploy to Netlify button
- [x] deploy to cloudcannon
- [ ] deploy to heroku button
- [ ] Expand wiki
- [ ] Add maichimp api in config.yml file
- [ ] Configure pagination (never be able to install jekyll-paginate plugin don't works)
- [ ] Make a branch for fully compatibility with https://www.siteleaf.com/
- [x] Implement https://popmotion.io/
- [ ] Check out how to create a gem to implement quickly the theme
- [ ] Implement Google custom search https://cse.google.com/cse/


# Say thanks

[![like distribution](https://raw.githubusercontent.com/jorigamy/jorigamy.github.io/master/assets/images/like-distribution.gif)](https://gph.is/2gvyXMJ)

I thank all the people who support or supported the project.

Everyone, through his github account is mentioned below:

[@antoniotrento](https://github.com/antoniotrento), [@docotordeep](https://github.com/doctordeep) **helps the project to reserve a place**

## Special thanks

- [@antoniotrento](https://github.com/antoniotrento) to make all the theme for Jekyll


[![GitHub forks](https://img.shields.io/github/forks/badges/shields.svg?style=social&label=Fork)](https://github.com/jorigamy/jorigamy.github.io) <!--[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Stars)](https://github.com/jorigamy/jorigamy.github.io) -->[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/lantoniotrento) [![Follow me on Steem](https://img.shields.io/badge/Follow&#32;me-on&#32;Steem-orange.svg)](https://steemit.com/@antoniotrento)
