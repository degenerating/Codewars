// Task
// Calculate a chess player's new Elo rating using their previous ratings (experience), their opponent's rating (opponent), the outcome of the new game (score), and the Factor k function (k).

// Arguments
// experience is an array/list containing the history of the player's ratings, with the last item in the array being the current rating. For example, if experience is [995, 1025, 1050], then the player's 2 old ratings are 995 and 1025, and their current rating is 1050. If a player has no recorded experience (experience = []), use 1000 for their rating.
// opponent is a single number indicating the opponent's rating
// score is the outcome of the new game. score is 1 if the player won, 0 if the player lost, or 0.5 if it was a tie.
// k is a function that takes in the experience array/list as an argument. k is an optional argument - sometimes a k function will be passed for you to use and sometimes not. You must write a default k function to use in case no k function is passed (see below for details).
// Return
// The elo function must return the new rating of the player rounded to the nearest integer.
// Elo rating formula
// The Elo rating system starts with an expectation formula:

// expectation = 
// 1 / (1+10^((opponent_rating - player_rating)/400))
// This can then be used in the new rating formula as follows:

// new_player_rating = 
// player_rating + k(experience) * (score - expectation)
// Note that k is a function taking in experience as a parameter.

// Factor K function
// You must write a default k function to use if no k function is passed to the elo function. The default k function should take in experience as an argument and return the following:

// If player is a newbie (less than 30 games of experience), return 25.
// If player is not a newbie, but player's rating has never reached 2400 before, return 15.
// If player is not a newbie and has at least one record of a rating >= 2400, return 10.
// (These are pre-2011 FIDE rules.)


function elo(experience, opponent, score, k) {
    let player_rating
    if (experience.length === 0) {
        player_rating = 1000
    }
    else {
        player_rating = experience[experience.length - 1]
    }

    function defk(experience) {
        if (experience.length < 30) {
            return 25
        }
        else if (Math.max(...experience) < 2400) {
            return 15
        }
        else {
            return 10
        }
    }

    let kVal
    if (typeof(k) === 'undefined') {
        kVal = defk(experience)
    }
    else {
        kVal = k(experience)
    }

    
    function expectation(player_rating, opponent) {
        return 1 / (1 + Math.pow(10, (opponent - player_rating) / 400))
    }

    

    let expectResult = expectation(player_rating, opponent)


    let new_player_rating = player_rating + kVal * (score - expectResult)

    new_player_rating = Math.round(new_player_rating)


    return(new_player_rating)


  }

//   elo([], 1725, 1)


//   elo([1000, 1025, 1050, 1075, 1100, 1125, 1150,
//     1175, 1200, 1225, 1250, 1275, 1300, 1325,
//     1350, 1375, 1400, 1425, 1450, 1475, 1500,
//     1525, 1550, 1575, 1600, 1625, 1650, 1675,
//     1700, 1725], 100, 0)


// function k_algo(exp){
//     return 26
// }
  
  
// elo([1025, 1025, 1050, 1075, 1100, 1125, 1150,
//     1175, 1200, 1225, 1250, 1275, 1300, 1325, 1350,
//     1375, 1400, 1425, 1450, 1475, 1500, 1525, 1550,
//     1575, 1600, 1625, 1650, 1675, 1700, 1725], 
//     1000,
//     0, 
//     k_algo)

