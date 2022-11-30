---
title: "Windows 10, Outlook 2010 and Google Apps Sync"
publishDate: "2016-07-14"
categories: 
  - "general"
tags:
  - "archived"
---

So I configured this for a client and they reported not being able send emails, a quick Google throws this up from Google:-

If you receive the following error message when trying to send a message from Outlook, it might mean that Google Apps Sync's message conversion process is corrupted and needs to be repaired:

_This email message was not sent because we were unable to convert the message into Internet format (MIME). Removing attachments or removing forwarded text from the message may enable you to send the message._

Rebooting your computer might fix the problem (so you should try this first). If the problem persists, you'll have to reinstall Google Apps Sync and Outlook from scratch. When doing this, you won't lose any of your mail, contacts, calendar events, notes, or tasks. However, you will have to set up your Outlook specific options.

Seems a little heavy and handed and doesn't always work.

I tried a "SFC /SCANNOW" as suggested by other people and didn't expect it to work but it did.

This is not the first time Google App Sync hasn't worked or had odd behavior, It makes me feel that Google does this kind of thing on purpose. :-(
