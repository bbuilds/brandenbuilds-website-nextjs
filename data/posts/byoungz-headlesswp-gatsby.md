---
    title: Headless WordPress and Gatsby
    tags: ['gatsby', 'headless', 'wordpress']
    date: '2021-07-21'
    featuredImage: /images/blog/byoungz-headlesswp-gatsby/byoungz-website-gatsby-headlesswp.jpg
    id: b2
    summary: Byoungz, my digital nmad blog was recently re-built on GtasbyJS and Headless WP setup.  
    slug: byoungz-headlesswp-gatsby
    keywords: website launch, gatsbyjs, headlesswp, jamstack
    genre: headless wordpress
    wordcount: 611
---

I recently re-developed my [digital nomad blog](https://byoungz.com) using Gatsby on the frontend and still leveraging WP as the backend. Often, you'll hear this referred to as Headless WP built on [Jamstack](https://jamstack.org/what-is-jamstack/), which have been pretty trendy buzzwords these past few years but with good reason. To put it simply, it means you use WordPress to manage content and source data as a backend and then display the data or frontend, in whatever tech stack you'd like.

[View my Github repo here.](https://github.com/bbuilds/byoungz-gatsby-headlesswp)

## Why Headless WP and Gatsby?

### Traditional WordPress Woes

I was facing a few interesting challenges with the WordPress community. Any developer in the WP world knows that the maintainers of WP are really pushing a block editor, which for over simplicity, is a chance to be like Wix. Upon trying to mend to to the new standards, I found enormous frustration trying to build within the block editor. Those frustrations can be a blog post another time.

Second, Google also released its [core web vitals](https://web.dev/vitals/), and that in June 2021, this will have a direct impact on organic search ranking. WordPress has always been infamous for being bloated and requires a bit of work for optimal site speed. I personally was tired of stripping down and not building up. Jamstack and the frameworks behind this methodology pride themselves on providing modern solutions for modern problems.

- code splitting
- image optimization
- inline critical styles
- lazy-loading
- prefetching
- built in PWA support

A personal reason is I just wanted to explore new tech. Outside the WordPress agency world, modern JS frameworks dominate the web developer job descriptions and I wanted to see what all the hype was about.

### Why Gatsby?

Gatsby really seemed to lead the forefront on static site generation. They also have a really sexy developer experience with integrating WordPress into their GraphQL layer. They have a [plugin](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/) that handles sourcing all the data for you, which was officially released this year. They also provide incremental builds with web hooks which cut down build times drastically (a common pain point once with static site generation.)

There is also an awesome community and resource system behind Gatsby and using WP with Gatsby. It was really easy to find resources, source code, and tutorials to get up and moving pretty quickly.

## The End Product

I will admit, I could have done more optimizing here. Things like some images were still using PNG and not convert to WEBp, but overall, was still pretty slow.

<figure className="my-3">
<Image
    src={'/images/blog/byoungz-headlesswp-gatsby/traditional-wordpress-byoungz-ss.jpg'}
    alt="Byoungz Traditional Lighthouse Score Screenshot"
    width={740}
    height={388}
    className="post-img"
/>
</figure>


### Previous Build

- Sage Starter Theme
- Tailwind CSS
- Advanced Custom Fields
- IG Plugin
- Autoptimze
- Rank Math
- Hosted on InMotion Hosting VPS server
- Gravity forms

### Current Build

- Gatsby JS
- WPGraphQL
- Yoast + WpGraphql Add on
- ACF + WPGraphql Addon
- Hosted on Netlify
- Jotforms

<figure className="my-3">
<Image
    src={'/images/blog/byoungz-headlesswp-gatsby/byoungz-gatsby-build.jpg'}
    alt="Byoungz Gatsby Website Score Screenshot"
    width={740}
  height={388}
  className="post-img"
/>
</figure>

## Final Thoughts

I absolutely loved working with Gatsby and was fairly impressed how quickly I could get moving.

### Pit Falls

If you're not familiar with the JS development world, be prepared for NPM hell. As I was cloning down different community plugins and themes, there was a lot of compatibility issues. Updating NPM packages was a grueling process and wanted to rip my hair out at times. I personally will only use officially developed plugins by Gatsby and mostly going to stay away from community sourced.

Losing the WP plugin ecosystem. Love it or hate it, WP makes it super easy to have custom functionality on your website with its plugin ecosystem. While there is a lot of outdated trash there, the positives outweigh the negative here by a long shot. I had to write out my own serverless IG snippet to pull in my feed onto my new Gatsby site.