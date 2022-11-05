---
title: "ASP.NET Programmatically retrieving the root domain"
publishDate: "2013-05-15"
categories: 
  - "general"
---

I'm developing a web application in asp.net and I wanted to know what the URL I was running on, for example www.domain.com.  I hate hard coding things or making assumptions.  Also when uploading to different servers, it would mean things should just work and we all like it when things actually do just work. :-)

So here's how you do it :

Request.Url.GetLeftPart(UriPartial.Authority)

Always so simply, when you know how.
