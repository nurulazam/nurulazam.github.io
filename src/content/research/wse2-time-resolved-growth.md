---
title: "Growing WSe₂ Crystals on a Millisecond Timer"
description: "Switching a CO₂ laser on and off in milliseconds makes monolayer WSe₂ crystals grow for as little as 10 ms at up to 100 micrometers per second, opening a window onto how 2D crystals actually form."
date: 2023-06-20
material: ["WSe2"]
physics: ["Laser synthesis", "Time-resolved growth", "Crystal growth kinetics"]
status: "published"
draft: false
cover: "/images/Paper/Time-resolved.png"
coverAlt: "Graphical abstract: time-resolved laser-assisted growth of monolayer WSe2 crystals"
---

Atomically thin crystals such as monolayer WSe₂ are mostly grown by chemical vapor deposition, a process that takes tens of minutes to hours. That is fine for making crystals, but it hides how they form: after the run, there is no way to know when each crystal was born or how long it grew. A small flake might have started early and then shrunk as it re-evaporated, or it might simply have nucleated late. To catch the real kinetics of 2D growth, you need to switch the process on and off in milliseconds, something no conventional method can do.

Building on the laser-assisted synthesis technique I developed during my PhD, I designed and ran experiments that put exactly that switch in our hands. A CO₂ laser vaporizes stoichiometric WSe₂ powder from a small graphite boat while a separate furnace holds the substrate at its growth temperature. The furnace alone never gets the powder hot enough to evaporate, so the vapor appears and vanishes precisely with the laser, and an open-source timer sets the growth duration anywhere from 10 milliseconds to 5 seconds.

The crystals obeyed the timer. Flake size tracked the product of laser power and irradiation time, while the furnace set how quickly atoms could diffuse across the surface: identical vapor doses grew flakes about 20 micrometers across at 850 °C but three times that at 950 °C. Thinning the boat walls pushed us into the ultrafast regime, where growth reached 60 and then 100 micrometers per second for runs as short as 10 milliseconds, the fastest rate yet reported on a noncatalytic substrate. Raman, photoluminescence, and atomic force microscopy confirmed that even these blink-of-an-eye crystals are clean monolayers, with only a slight widening of their optical signature at the shortest times.

The point is not just speed. Turning growth into a timed experiment lets us ask questions CVD never could: when do nuclei form, how fast do edges move, and where do defects come from? Simulations suggest that higher-power lasers could push the same setup toward microsecond growth, so we may soon be watching 2D crystals take shape on a clock.

[Read the paper in *ACS Nano*](https://doi.org/10.1021/acsnano.3c02280)
