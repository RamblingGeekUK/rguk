---
title: "Raspberry Pi Pico Custom U2F firmware"
publishDate: "2022-11-30"
categories: 
  - "general"
tags: 
  - "raspberry"
  - "pico"
image: "~/assets/images/Build Your Own U2F Firmware.png"
excerpt: "We take a look at the process of building a custom U2F file to allow easy deployment to many Micro Controllers"
---

### Why

You may be wondering why you would want to do this, I looked into how to do this when the question was posted on a Discord community server.  They had several Pico's that they wanted to use with various demo files on and didn't like the prospect of doing them one by one. 

### How

I did this from WSL on Windows, another Pi or Linux Distro should work fine also, although I haven't tested it. 

#### Prerequisites

The first thing to do is to get all the bits installed.

```bash
apt-get install git
apt-get install gcc-arm-none-eabi libstdc++-arm-none-eabi-newlib libnewlib-arm-none-eabi
apt-get install build-essential
apt-get install cmake
apt-get install python3
```

Now clone micropython and update it with the mbedtl library

```bash
cd /var/host
git clone https://github.com/micropython/micropython.git
git submodule update --init lib/mbedtl
```

Now enter the micropyton folder and make

```bash
cd micropython
make -C mpy-cross
cd ..
```

Now copy your files (main.py, etc) from your PC to the following folder

```bash
ports/rp2/modules.
```

For Pico

```bash
cd ports/rp2
make submodules
make clean
make
```

For PicoW

```bash
make BOARD=PICO_W submodules
make BOARD=PICO_W clean
make BOARD=PICO_W 
```

Once it's completed building you should have ```firmware.u2f``` file in the folder ```ports/rp2/build-PICO_W``` or ```ports/rp2/build-PICO``` depending on which your targets.

Now you can use the ```firmware.u2f``` file as normal. Press the BOOTSEL button on the PICO W and drag the `firmware`.u2f``` file over and it will flash as normal, reboot and you should see your code run.

Source : https://forum.micropython.org/viewtopic.php?f=21&t=12559#p68049