---
title: "Raspberry Pi PicoW LED"
publishDate: "2022-11-29"
categories: 
  - "general"
tags: 
  - "raspberry"
  - "pico"
image: "~/assets/images/Raspberry PicoW LED.png"
excerpt: "So you have got your hands on the Pico W and the LED isn't lighting."
---

### LED not lighting

So you have got your hands on a Pico W and ran the same LED code from the Pico and the LED doesn't come on, what the heck is going on?

Due to the WiFi chip being added the PIN for the LED has been moved to be controlled via the WiFi controller. With MicroPython, the code looks like this.

To turn the LED on do the following.

```python
from machine import Pin
led = Pin("LED", Pin.OUT)
led.on()
```

To have the LED flash do the following.

```python
from machine import Pin, Timer
led = Pin("LED", Pin.OUT)
timer = Timer()

def blink(timer):
    led.toggle()

timer.init(freq=2.5, mode=Timer.PERIODIC, callback=blink)
```

This was tested with MicroPython v1.19.1-721-gd5181034f you can download from here : https://micropython.org/download/rp2-pico-w/

