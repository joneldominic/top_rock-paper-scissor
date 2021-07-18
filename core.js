window.onload = function(){
    
    const selections = {
        rock: "Rock",
        paper: "Paper",
        scissor: "Scissor"
    }

    const players = {
        user: "User",
        computer: "Computer"
    }

    function userPlay(){
        let userInput = null; 

        while(userInput==null){
            let input = prompt("select Move ([R]ock | [P]aper | [S]cissor)");
            
            switch(((input.trim()).charAt(0)).toUpperCase()) {
                case 'R':
                    userInput=selections.rock;
                break;
                case 'P':
                    userInput=selections.paper;
                break;
                case 'S':
                    userInput=selections.scissor;
                break;
                default:
                    userInput==null;
            }
        }

        return userInput
    }
    
    function computerPlay(){
        selectionKey = Object.keys(selections);
        return selections[selectionKey[Math.floor(Math.random() * selectionKey.length)]];
    }

    function playRound(userSelection, computerSelection) {
        let winner = null;

        console.info(`User: ${userSelection}, Computer: ${computerSelection}`);

        if(userSelection===selections.rock) {
            if(computerSelection===selections.scissor)
                winner = players.user;
            else if(computerSelection===selections.paper)
                winner = players.computer;
        }else if(userSelection===selections.paper) {
            if(computerSelection===selections.rock)
                winner = players.user;
            else if(computerSelection===selections.scissor)
                winner = players.computer;
        }else if(userSelection===selections.scissor) {
            if(computerSelection===selections.paper)
                winner = players.user;
            else if(computerSelection===selections.rock)
                winner = players.computer;
        }

        return winner
    }
    
    (function game() {
        let userScore=0;
        let computerScore=0;

        for(let i=1; i<=5; i++){
            console.info(`Round ${i}`);
            console.info(`Score (User: ${userScore}, Computer: ${computerScore})`)

            let playerSelection = userPlay();
            let computerSelection = computerPlay();

            let winner = playRound(playerSelection, computerSelection);

            if(winner === null){
                console.warn(`Round ${i} is a Draw`);
            }else if (winner === players.user) {
                console.warn(`Round ${i}: User Won`);
                userScore++;
            }else if (winner === players.computer) {
                console.warn(`Round ${i}: Computer Won`);
                computerScore++;
            }
        }

        let resultMessage = "Game Over. ";

        if(userScore===computerScore) {
            resultMessage+="It's a Draw";
        }else {
            resultMessage+=`${userScore>computerScore?"User":"Computer"} won.`;
        }

        console.info(`${resultMessage} Score (User: ${userScore}, Computer: ${computerScore})`)
    })()
}
