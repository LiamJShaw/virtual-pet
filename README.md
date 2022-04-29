# Virtual Pet

A JavaScript implementation of a Tamagotchi-style game

## Premise

Your virtual pet tracks the following:  
- `Health`
- `Hunger`
- `Happiness`
- `Love`

`Health` starts full, with 10 points.

`Hunger` starts empty, with a max of 10 points. It ticks down 1 every 4 hours.  
If `hunger` is 0, tick health down 1 every hour.

`Happiness` starts at 0, and has a max of 10. If Happiness is >0, tick down `health` slower?

If `Hunger` tick happens while full, add current `Happiness` to Love.

If `Love` is 100, pet is immortal? Can add another pet?


## Features

- `Feed`
Once an hour?

- `Play`
Once every 10 minutes or something? 
An actual minigame? Choice of games?
Shwordle? Battleships?

## How

I'm hoping to use localStorage to hold date values and update them when the user revisits the page, negating the need for a backend. 
Service workers for PWA?


