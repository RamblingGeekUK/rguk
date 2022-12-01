---
title: "Exchange 2010 Message Limits"
publishDate: "2012-01-04"
categories: 
  - "general"
tags:
  - "archived"
---

There's a few places to change this and that's global settings as well as the connectors.

To adjust your transport send/receive limits.

**Global Settings** Organization Configuration->Hub Transport->Global Settings->Properties of Transport Settings

Then you must modify the connectors found here: **Send Connector** Organization Configuration->Hub Transport->Send Connectors->Properties of Default Send Here you can adjust your send connectors default maximum message size **Receive Connector** Server Configuration->Hub Transport->Receive Connectors Pane->Properties of Default
