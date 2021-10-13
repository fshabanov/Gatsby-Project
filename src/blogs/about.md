---
title: About Ghost + Gatsby
subtitle: Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS.  Read more about how it works and how to use this starter theme here!
category: Getting Started
author: Ghost
image: ../images/blogs/about.png
slug: about
---

Use Ghost as a completely decoupled headless CMS and bring your own front-end written in [Gatsby.js](https://gatsbyjs.org/)

## Build an API driven static-site

There has been a lot of progress around static site generators, front end frameworks and API-centric infrastructure in recent years, which has generated some very cool products, like Gatsby. Since Ghost allows you to completely replace its default Handlebars theme layer in favour of a front-end framework, you can use Gatsby to build your site statically from the Ghost API.

## The headless-cms revolution

Using a static site generator usually involves storing Markdown files locally in the code repository. This would involve using a code editor to write content and a GIT workflow to publish - which works fine for small sites or developers. However, it's not ideal for professional publishers that need to scale. This is where a headless CMS comes in!

Instead, you can use Ghost for authoring, and then build out your front-end in Gatsby to pull content from the Ghost API. This provides several benefits for publishers:

- Developers can use their preferred stack
- Writers have their preferred editor & content management
- Performance is the maximum possible
- Security is the maximum possible
- Your site will be extremely scalable

Building sites in this way has become known as the [JAMstack](https://jamstack.org/) - (as in JavaScript, APIs, Markup). When you look at the bigger picture of [the content mesh](https://www.gatsbyjs.org/blog/2018-10-04-journey-to-the-content-mesh/), it really starts to feel like an inevitable future for building websites.

## Official Gatsby.js Source Plugin + Starter

We rebuilt our entire [Ghost Docs](https://ghost.org/docs/) site with a front-end written in [Gatsby.js](https://www.gatsbyjs.com/) - which is a great example of what can be achieved with Ghost and Gatsby in the wild. We also shipped a few things to help others build their own sites using the same stack:

### [gatsby-source-ghost](https://github.com/tryghost/gatsby-source-ghost) plugin

A straightforward Gatsby source plugin which wraps the Ghost API and makes it compatible with Gatsby and GraphQL, so it's quick and easy to load all your Ghost data into any Gatsby project.

### [gatsby-starter-ghost](https://github.com/tryghost/gatsby-starter-ghost)

An official [Gatsby starter repository](https://github.com/tryghost/gatsby-starter-ghost) which is pre-configured to get content from Ghost and output it in a clean, blog-style design. The fastest way to get up and running with Gatsby and Ghost is to fork this repository, and check out our [Gatsby docs](https://ghost.org/docs/jamstack/gatsby/).

## Official Netlify Support

The official integration guide for Netlify explains how to set up outgoing webhooks in Ghost to trigger a site rebuild on Netlify. This means that any time you publish, update or remove any content in Ghost, the front end will update.

## Future-proof publishing

Converging disparate technologies under a single front-end centralises otherwise decentralised services in a way which caters predominantly to the needs of the site owner, rather than the platform and fosters flexibility and scalability.

No more platform-specific plugins and extensions. Just one front-end, and many APIs; all connected together and served as a single site or application with Gatsby!
