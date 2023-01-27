var game = {
   fruit: 50,
   veggies: 50,
   spoiledFood: 0,
   water: 10,
   muddyWater: 0,
   population: 10,
   workforce: 0,
   maxWorkforce: 10,
   sick: 0,
   wounded: 0,
   dead: 0,
   babies: 0,
   children: 0,
   adults: 10,
   elders: 0,
   year: 0,
   happiness: 50,
   happyMult: 1,
   birthRate: 1
}

setInterval (function() {
   game.population = game.babies + game.children + game.adults + game.elders;
   document.getElementById("population").innerText = game.population;
   game.happyMult = game.happiness/50;
   document.getElementById("happiness").innerText = game.happiness;
   if (game.happiness <= 10) {
      game.happyMult = 0.1;
   }
}, 10);

