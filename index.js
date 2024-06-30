let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let arr=["Paper","Rock","Scissors"];
let score1=document.getElementById("score1");
let score2=document.getElementById("score2");
let end=document.getElementById("End");
let a;
let b;
let win=document.getElementById("win");
        paper.onclick = function() {
            player.textContent = `Player: Paper`;
            a="Paper";
            computerturn();
        };
        rock.onclick = function() {
            player.textContent = `Player: Rock`;
            a="Rock";
            computerturn();
        };
        scissors.onclick = function() {
            player.textContent = `Player: Scissors`;
            a="Scissors";
            computerturn();
        };
        function computerturn()
        {
            let random=Math.floor(Math.random()*3);
            computer.textContent=`Computer:${arr[random]}`;
            b=arr[random];
            check(a,b);
        }
        let x=0;
        let y=0;
        function check(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                win.textContent = "No one Wins";
            } else if (
                (playerChoice === "Paper" && computerChoice === "Rock") ||
                (playerChoice === "Rock" && computerChoice === "Scissors") ||
                (playerChoice === "Scissors" && computerChoice === "Paper")
            ) {
                x++;
                win.textContent = "You Win";
            } else {
                y++;
                win.textContent = "Computer Wins";
            }
            score1.textContent = `Player Score: ${x}`;
            score2.textContent = `Computer Score: ${y}`;
        }
        end.onclick=function()
        {
            if(x>y)
                {
                    win.textContent=`Player Wins`;
                }
                else if(y>x)
                    {
                        win.textContent=`Computer Wins`;
                    }
                    else{
                        win.textContent=`Draw`;
                    }
                    setTimeout(restartgame,2000);
        };
        function restartgame()
        {
            x=0;
            y=0;
            player.textContent = "Player: ";
    computer.textContent = "Computer: ";
    score1.textContent = "Player Score: 0";
    score2.textContent = "Computer Score: 0";
    win.textContent = "";
        }
        // function check(c,d)
        // {
        //     if(c===d)
        //         {
        //             win.textContent=`No one Wins`;
        //             score1.textContent=`Player Score:${x}`;
        //                         score2.textContent=`Computer Score:${y}`;
        //         }
        //         else if(c!=d)
        //             {
        //                 if(c=="Paper" && d=="Rock")
        //                     {
        //                         x=x+1;
        //                         score1.textContent=`Player Score:${x}`;
        //                         score2.textContent=`Computer Score:${y}`;
        //                         win.textContent=`You Wins`;

        //                     }
        //                     if(c=="Paper" && d=="Scissors")
        //                         {
        //                             y=y+1;
        //                             score1.textContent=`Player Score:${x}`;
        //                             score2.textContent=`Computer Score:${y}`;
        //                             win.textContent=`Computer Wins`;
        //                         }
        //                         if(d=="Paper" && c=="Rock")
        //                             {
        //                                 y=y+1;
        //                                 score1.textContent=`Player Score:${x}`;
        //                                 score2.textContent=`Computer Score:${y}`;
        //                                 win.textContent=`Computer Wins`;
        //                             }
        //                             if(d=="Paper" && c=="Scissors")
        //                                 {
        //                                     x=x+1;
        //                                     score1.textContent=`Player Score:${x}`;
        //                                     score2.textContent=`Computer Score:${y}`;
        //                                     win.textContent=`You Wins`;
        //                                 }

        //                         if(c=="Rock" && d=="Paper")
        //                             {
        //                                 y=y+1;
        //                                 score1.textContent=`Player Score:${x}`;
        //                                 score2.textContent=`Computer Score:${y}`;
        //                                 win.textContent=`Computer Wins`;
        //                             }
        //                             if(c=="Rock" && d=="Scissors")
        //                                 {
        //                                     x=x+1;
        //                                     score1.textContent=`Player Score:${x}`;
        //                                     score2.textContent=`Computer Score:${y}`;
        //                                     win.textContent=`You Wins`;
        //                                 }
        //                                 if(d=="Rock" && c=="Paper")
        //                                     {
        //                                         x=x+1;
        //                                         score1.textContent=`Player Score:${x}`;
        //                                         score2.textContent=`Computer Score:${y}`;
        //                                         win.textContent=`You Wins`;
        //                                     }
        //                                     if(d=="Rock" && c=="Scissors")
        //                                         {
        //                                             y=y+1;
        //                                             score1.textContent=`Player Score:${x}`;
        //                                             score2.textContent=`Computer Score:${y}`;
        //                                             win.textContent=`Computer Wins`;
        //                                         }
                                               
        //             }
        // }