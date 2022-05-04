# Virtual Pet

A JavaScript implementation of a Tamagotchi-style game

[Play here]()

## Premise

Your virtual pet tracks the following:  
- `Health`
- `Hunger`
- `Happiness`
- `Love`

`Health` starts full, with 10 points.

`Hunger` starts at 5, with a max of 10 points. It ticks up 1 every 4 hours.  
If `Hunger` is at max, tick health down 1 every hour.

`Happiness` starts at 0, and has a max of 10. If Happiness is >0, tick down `Health` slower?

If `Hunger` tick happens while full, add current `Happiness` to `Love`.

If `Love` is 100, pet is immortal?


## Features

- `Feed`  
Once an hour?

- `Play`  
Once every 10 minutes or something? 
An actual minigame? Choice of games?
Shwordle? Battleships?

## How

I'm hoping to use localStorage to hold date values and update them when the user revisits the page, negating the need for a backend.
