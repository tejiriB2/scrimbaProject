
let homeTeamScore = 0 ;
let awayTeamScore = 0 ;

function score(point){

    homeTeamScore += point ;
      
    document.getElementById("Home-score").innerHTML = homeTeamScore ;
}


function scoreAway(point){

    homeTeamScore += point ;
      
    document.getElementById("Away-score").innerHTML = homeTeamScore ;
}