---
title: "Teams Busy LED"
publishDate: "2022-01-24"
image: "/images/TeamsBusyLED.webp"
categories: 
  - "general"
---

I needed to get a Teams Busy LED Lamp up and running quickly. I managed to do this using two Open Source projects.

I was aware of PresenceLight by Isaac Levin. He has done a great job of adding support for various Smart Lights such as LIFX, YeeLight, Philips Hue, etc... I didn't have any of those Smart Lights.

I did have a spare Raspberry Pi Zero (one of many! You know you have a drawer full of Pi's also.) and a WaveShare RGB pHAT. Maybe I intended to do this project a while ago and didn't get to it, no that never happens.

When you google this you will likely find the blog post by Elio Struyf for his project and he's using HomeBridge to manage the presence status.

I didn't want to go to the bother of setting up HomeBridge as I am already running Home Assistant.

However, Elio wrote what he calls the Unicorn Busy Server that runs on a Pi and controls the colours of the WaveShare RGB pHAT.  All that is required is a simple API call to change the colour of the RGB HAT, so calling http://192.168.0.110:5000/api/green would change the LEDs too, you guessed it, green!

So once that was set up, it was then a case of popping in the URLs to Presence Light App's Custom API tab and with that, you have a working Teams Busy Lamp.

I haven't gone into lots of details about how to do this here as it's covered in the links provided.

![Screen Capture](/images/eff03ef5d6058a53033897a43603b8f4381b1b78.webp)

Screen Capture of Presence Application and Custom API

PresenceLight by Isaac Levin: isaacrlevin/presencelight: PresenceLight is a solution to broadcast your various statuses to light bulbs. (github.com)

Elio's Project: estruyf/unicorn-busy-server: Simple busy light server for Raspberry Pi Zero and Pimoroni Unicorn Hat (github.com)

I would like to take Elio's Unicorn Busy Server and have the Pi boot up, broadcast its Wi-Fi hotspot to allow the user to connect to their LAN and then do the Team's authentication on the Pi and that would eliminate PresenceLight and it would be one simple device, in the meantime, the above is a great way to get a Teams Busy Lamp/LED up and running quickly.
