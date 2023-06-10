let teams = []


//!TAKIM EKLENDİ!
document.querySelector(".add").addEventListener("click",function(){
    let teamsValue = document.querySelector(".teamsValue").value;

    let teamsTest ={
        teamsName : teamsValue,
    }
    teams.push(teamsTest)
})


document.querySelector(".start").addEventListener("click",function(){
    let newTeams = [

    ]

    let donguSay = teams.length / 2;

    for (let i=0; i<donguSay; i++){
       
            let takımindex = Math.floor(Math.random() * teams.length)
            let temp = teams[takımindex]
            teams.splice(takımindex,1);
            let takımindex2 = Math.floor(Math.random() * teams.length)
            let temp1 = teams[takımindex2]
            teams.splice(takımindex2,1);
            
            let test = {
                    a:temp,
                    b:temp1
                }
            newTeams.push(test)
    }

    for(let i = 0; i<donguSay; i++){


        let left = document.querySelector(".left");
        let right = document.querySelector(".right");

        let teamsDivTitle = document.createElement("p");
        teamsDivTitle.innerHTML=newTeams[i].a.teamsName;
        left.appendChild(teamsDivTitle)



        let teamsDivTitle2 = document.createElement("p");
        teamsDivTitle2.innerHTML=newTeams[i].b.teamsName;
        right.appendChild(teamsDivTitle2)

    }
})