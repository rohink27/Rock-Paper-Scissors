let json_string= localStorage.getItem('score');
let score = JSON.parse(json_string) ||{
    wins: 0,
    losses: 0,
    tie: 0
} ;// use or operator which stops when it detects a true

function display_score()
{
  
    wins= document.querySelector('.wins');
    wins.innerHTML = score.wins;
    losses= document.querySelector('.losses');
    losses.innerHTML= score.losses;
    ties= document.querySelector('.ties');
    ties.innerHTML= score.tie;
}
display_score();

function reset_score(){
    score.wins=0;
    score.losses=0;
    score.tie=0;
    localStorage.removeItem('score'); // remove score from local storage
    display_score();
}

function compute(computer, user)
{
let result='';
if(user===computer){
    score.tie++;
    display_result(convert(computer), convert(user), 'Draw');                
}
else if(user ===0 &&  comp===1){
    
    score.losses++;
    display_result(convert(computer), convert(user), 'You lose');
    
}
else if(user ===0)
{
    score.wins++;
    display_result(convert(computer), convert(user), 'You win');
    
}
else if(user ===1 && computer ===0)// use of and and
{
    score.wins++;
    display_result(convert(computer), convert(user), 'You win');
    
}
else if(user===1){
    score.losses++;
    display_result(convert(computer), convert(user), 'You lose');
    
}
else if(user ===2 && computer ===0)
{
    score.losses++;
    display_result(convert(computer), convert(user), 'You lose');
    
}
else if(user ===2){
    score.wins++;
    display_result(convert(computer), convert(user), 'You win');
    
}
localStorage.setItem('score', JSON.stringify(score)); // store the score as a JSON string
display_score();

}
function convert(choice){
if(choice ===0)
return 'Rock';
if(choice ===1)
return 'Paper';
if(choice ==2)
return 'Scissors';
}
function display_result(comp, player, result){
results_display = document.querySelector('.result');
results_display.innerHTML=result;
choices_display = document.querySelector('.information');
choices_display.innerHTML= `You: <img src="images/${player}-emoji.png" alt=""> vs Computer: <img src="images/${comp}-emoji.png" alt="">`;
//alert(`You Played ${player}, Computer played ${comp}. Result is: ${result}\n The score now is- Player: ${score.wins} vs Computer: ${score.losses}.\nThere have been ${score.tie} ties `);
}