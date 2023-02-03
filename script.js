const prompt = require('prompt-sync')();
let startPoints = 0;
let bet1 = 500;
let bet2 = 1000;
let levelSelect;
 levelSelect = String(prompt('Level select: Type...Easy, Medium, or hard: '))

// switch(levelSelect){
//     case levelSelect = 'Easy' || 'easy':
//         startPoints = 10000;
//        console.log(startPoints)
// }
// startlevel and start points.
if(levelSelect === 'easy' || levelSelect === 'Easy'){
    startPoints = 10000;
    console.log('you have selected' , levelSelect)
    console.log(startPoints, 'startpoints')
} 
else if (levelSelect === 'medium' || levelSelect ==='Medium'){
    startPoints = 7500;
    console.log('you have selected' , levelSelect)
    console.log(startPoints, 'startpoints')
    
}
else if(levelSelect === 'hard' || levelSelect === 'Hard'){
    startPoints = 5000;
    console.log('you have selected' , levelSelect)
    console.log(startPoints, 'startpoints')
   

}


// 


// setTimeout(()=>{
// console.log('loading')
// },1000)
// setTimeout(()=>{
// console.log('loading')
// },2000)
// setTimeout(()=>{
// console.log('loading')
// },3000)



let bet;
 setTimeout(()=>{
    //max bet check
const maxBet = 1001;
 bet = Number(prompt('ENTER A BET: 500, 1000: '));

if(bet >= maxBet){
    console.log('too high of a bet...')
}
 //

//bets
// if(bet === bet1){
//     console.log('bet 1')
// }
// else if(bet === bet2){
//     console.log('bet 2')
// }


//

//if success we add up whatever bet we did, else we got to remove it. Later we can change bets if we want.
let loopAgain = 1;
let slot1Random
let slot2Random
let slot3Random

for(let i = 0; i < loopAgain; i++){
  slot1Random = Math.floor(Math.random() * 10 + 1)
  slot2Random = Math.floor(Math.random() * 10 + 1)
  slot3Random = Math.floor(Math.random() * 10 + 1)

console.log(slot1Random,slot2Random,slot3Random)

// check to see if they're equal to one another. If they're we will add startpoints depending on what level we chose. Also we will add or subtract bets depending on if we got lucky or not.

// we need to add 
setTimeout(()=>{
if(slot1Random === slot2Random && slot3Random && bet === bet1){
    console.log(" that's a match!!! ")
    startPoints += bet1;
    console.log(startPoints, ' points remaining')
  


}
else if(slot1Random === slot2Random && slot3Random && bet === bet2){
    console.log(" that's a match!!! ")
    startPoints += bet2;
    console.log(startPoints, ' points remaining')
   
 
}
if(slot1Random !== slot2Random && slot3Random && bet === bet1){

    console.log(` Sorry not a match, you lose ${bet1} points`)
    startPoints -= bet1;
    console.log(startPoints, ' points remaining')
    
   

}
else if(slot1Random !== slot2Random && slot3Random && bet === bet2){
    console.log(`Sorry not a match, you lose ${bet2} points '\n'`)
    startPoints -= bet2;
    console.log(startPoints, ' points remaining')
    
   
   loopAgain++ // loopAgain =2;
}
},3000)

}
},1000);





// if we get to zero we lose and the game is over.