---
title: "Raspberry Pi Pico Custom U2F firmware"
publishDate: "2022-11-30"
categories: 
  - "general"
tags: 
  - "raspberry"
  - "pico"
---


```bash
apt-get install git
apt-get install gcc-arm-none-eabi libstdc++-arm-none-eabi-newlib libnewlib-arm-none-eabi
apt-get install build-essential
apt-get install cmake
apt-get install python3
```

```bash
cd /var/host
git clone https://github.com/micropython/micropython.git
git submodule update --init lib/mbedtl
```

```bash
cd micropython
make -C mpy-cross
cd ..
```

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