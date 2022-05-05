# Virtual Pet

A JavaScript implementation of a Tamagotchi-style game

**[Play here](https://liamjshaw.github.io/virtual-pet/dist/)**

## Premise

Your virtual pet tracks the following:  
- **`Health`**
- **`Hunger`**
- **`Happiness`**
- **`Love`**

`Health` starts full, with 10 points.

`Hunger` starts at 5, with a max of 10 points. It ticks up 1 every 4 hours.  
If `Hunger` is at 0, tick health and `Happiness` down 1 every hour.

`Happiness` starts at 0, and has a max of 10. If `Happiness` is > 0, tick down `Health` slower?

If `Hunger` tick happens while full, add current `Happiness` to `Love`.

If `Love` is 100, pet is immortal?


## Features

Buttons for the following actions will appear at timed intervals.   
When they are used, the timer starts for generating another button.  

- `Feed`  
Interval: 1 hour  
Take away 1 unit of hunger from your pet

- `Play`  
Interval: 10 minutes   
Could be a minigame?

## How

I'm using localStorage to hold datetime values and update the relevant stats when the user revisits the page, negating the need for a backend.  
This is done by loading from localStorage when the page loads, and when the page becomes visible again, e.g. from switching to a different tab and back.