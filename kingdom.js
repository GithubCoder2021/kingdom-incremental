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
   farmers: 0,
   dreamers: 0
}


setInterval (function() {
   game.population = game.babies + game.children + game.adults + game.elders;
   document.getElementById("population").innerText = game.population;
   game.happyMult = game.happiness/50;
   document.getElementById("happiness").innerText = game.happiness;
   if (game.happiness <= 12) {
      game.happyMult = 0.25;
   }
   if (game.happiness >= 100) {
      game.happiness = 100;
   }
   if (game.happiness <= 0) {
      game.happiness = 0;
   }
   
}, 10);

setInterval (function() {
   game.babies += 1;
}, 120000);

function giveJob(job) {
   if (game.workforce >= game.maxWorkforce){
      if (job == 'farmers') {
         game.farmers++;
      } else {
         game.dreamers++;
      }
      game.workforce++;
   }
}
