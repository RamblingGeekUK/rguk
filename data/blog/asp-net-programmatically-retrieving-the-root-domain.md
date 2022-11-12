---
title: "ASP.NET Programmatically retrieving the root domain"
publishDate: "2013-05-15"
categories: 
  - "programming"
tag: 
  - "c#"
  - "asp.net"
image: "~/assets/images/dotnet-logo.png"
excerpt: "I'm developing a web application on asp.net and I wanted to know what URL I was running on, for example, www.domain.com. I hate hard coding things or making assumptions."
---

I'm developing a web application on asp.net and I wanted to know what URL I was running on, for example, www.domain.com. I hate hard coding things or making assumptions. Also when uploading to different servers, it would mean things should just work and we all like it when things do just work.🙂

So here's how you do it :

```c#
Request.Url.GetLeftPart(UriPartial.Authority)
```

Always so simple, when you know how.
