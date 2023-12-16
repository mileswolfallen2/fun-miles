var inquirer = require("inquirer");
const cTable = require('console.table');
var colors = require('colors');

var money = 0;
var occupation = "";
var player1 = {
    name: "",
    health: 100,
    condition: "none",
    isAlive: true
};
var player2 = {
    name: "",
    health: 100,
    condition: "none",
    isAlive: true
};
var player3 = {
    name: "",
    health: 100,
    condition: "none",
    isAlive: true
};
var player4 = {
    name: "",
    health: 100,
    condition: "none",
    isAlive: true
};
var player5 = {
    name: "",
    health: 100,
    condition: "none",
    isAlive: true
};

var playerArray = [];

var startMonth = "";
var inventory = {
    oxen: 0,
    food: 0,
    clothing: 0,
    ammunition: 0,
    wheels: 0,
    axels: 0,
    tongues: 0,
    money: 100
};
var milesToGo = 1863;
var pace = 1;
var rations = 1;
var trailConditions = 0;
var nextLandmark = {};
var landmarkCounter = 0;
var fortCounter = 0;
var landmarks = [
    {
        name : "Kansas River Crossing",
        miles : 102,
        type : "river",
        modifier : "flatland",
        description: "The Kansas River is a tributary to the Missouri.  It is approximately 170 miles long.  Its width and depth vary depending on the recent amount of snow melt.  Where the Oregon Trail crosses the Kansas River, the average width is 620 feet and the usual depth in the middle is about 4 feet.  But be sure to check the conditions when you get there."
    },
    {
        name : "Big Blue River Crossing",
        miles : 83,
        type : "river",
        modifier : "flatland",
        description: "The Big Blue River is a tributary to the Kansas River, which is in turn a tributary to the Missouri.  It's approximately 300 miles long.  Farther to the south and west is the Little Blue River, which links up with the Big Blue at Blue Rapids.  You'll cross the Big Blue north of the rapids, allowing you to avoid the Little Blue River altogether."
    },
    {
        name : "Fort Kearney",
        miles : 119,
        type : "fort",
        modifier : "flatland",
        description: "Fort Kearney is a U.S. Army post established in 1848 near the Platte River. It garrisons cavalry troops who protect settlers and travelers along the Oregon Trail.  It was named for Gen. Stephen Kearny (often spelled 'Kearney'), who died in 1848 after helping establish law and order in the region and serving in the Mexican War" 
    },
    {
        name : "Chimney Rock",
        miles : 250,
        type : "camp",
        modifier : "disease",
        description: "Chimney Rock is an important landmark on the Oregon Trail.  It's a spectacular natural formation of solid rock and can be seen from miles around.  In fact, you can see it for a whole day as you approach it and another whole day as you leave it behind.  If you don't see it at all within a week or so after leaving Fort Kearney, you've probably strayed too far off the trail." 
    },
    {
        name : "Fort Laramie",
        miles : 86,
        type : "fort",
        modifier : "mountains",
        description: "Fort Laramie is a US Army post near the junction of the North Platte and Laramie Rivers.  Originally called Fort William, it was founded as a fur-trading post in 1834.  It was renamed for Jacques Laramie, a French trapper who worked in the region earlier in the century.  Fort Laramie is an important stop for resting and getting supplies along the trail."
    },
    {
        name : "Independence Rock",
        miles : 190,
        type : "camp",
        modifier : "disease",
        description: "Independence Rock is an important landmark and resting place along the Oregon Trail. It's a large natural formation, almost 200 feet tall, made of soft stone into which many travelers and traders have carved their names, initials, or brief messages.  It gets its name from the fact that, in order to stay on schedule, travelers try to reach it no later than July 4--Independence Day"
    },
    {
        name : "South Pass",
        miles : 102,
        type : "camp",
        modifier : "mountains",
        description: "South Pass is a valley that cuts through the Rocky Mountains at their highest point, the Continental Divide.  It marks the halfway point on your journey to Oregon.  After South Pass, the trail splits.  If you're short on supplies, you should head to Fort Bridger.  But if you don't need supplies, you may want to take the shorter route and go directly to the Green River."
    },
    {
        name : "Green River",
        miles : 57,
        type : "river",
        modifier : "disease",
        description: "The Green River is a tributary to the Colorado River, flowing south from the Continental Divide along a twisted, rugged path.  It's estimated to be more than 700 miles in length.  It's navigable only at high water, and even then it's extremely dangerous.  But you must cross it before proceeding west on the Oregon Trail, so be very careful."
    },
    {
        name : "Soda Springs",
        miles : 144,
        type : "camp",
        modifier : "disease",
        description: "Soda Springs is an important landmark and stopping-off point along the trail. It gets its name from the alkaline (sodium) mineral springs you find there. Some travelers separate from the Oregon Trail at this point and head southwest for California.  Others wait until they get to Fort Hall before going on the 'California Trail.'"
    },
    {
        name : "Fort Hall",
        miles : 57,
        type : "fort",
        modifier : "rockies",
        description: "Fort Hall is an outpost on the banks of the Snake River.  It was originally a fur-trading post, founded by Nathaniel Wyeth in 1834.  Later it was bought by the Hudson's Bay Company.  Ever since it has served as an important stop along the Oregon Trail, where emigrants can rest and buy supplies.  Some travelers turn southwest at this point and head for California."
    },
    {
        name : "Snake River Crossing",
        miles : 182,
        type : "river",
        modifier : "rockies",
        description: "After leaving Fort Hall, the trail follows the Snake River for hundreds of miles.  The Snake River gets its name from the way it twists and turns through this ruffed country, sometimes through steep gorges.  But the trail is fairly flat (through dry and desolate) near the river, which makes wagon travel possible.  Crossing the Snake River, however, can be dangerous."
    },
    {
        name : "Fort Boise",
        miles : 114,
        type : "fort",
        modifier : "rockies",
        description: "Fort Boise was built by the Hudson's Bay Company in 1834 as a fur-trading outpost.  Its name comes from the French word 'boise,' meaning 'wooded.' That's because there are lots of trees here, unlike the dry region of the Snake River Plain to the east.  An important stop on the Oregon Trail, it stands on the banks of the Boise River, a tributary to the Snake River."
    },
    {
        name : "Blue Mountains",
        miles : 102,
        type : "camp",
        modifier : "rockies",
        description: "The Grand Ronde (French for 'great ring') is a river that runs roughly parallel to the Blue Mountains.  The Oregon Trail crosses through the Grande Ronde river valley just before the mountains.  The Grande Ronde valley is noted for its beauty and is greatly appreciated by emigrants as a sign that their long journey is nearing its end."
    },
    {
        name : "Fort Walla Walla",
        miles : 55,
        type : "fort",
        modifier : "flatland",
        description: "Fort Walla Walla was established in 1818 as a fur-trading post at the juncture of the Columbia and Walla Walla Rivers.  It later became a military fort. Marcus Whitman worked as a medical missionary nearby from 1836 to 1847.  Walla Walla is the name of an American Indian tribe living in the region.  The Walla Wallas are close related to and allied with the Umatila."
    },
    {
        name : "The Dalles",
        miles : 120,
        type : "river",
        modifier : "flatland",
        description: "The Dalles is the chief embarkation point for rafts heading down the Columbia River toward the Willamette Valley.  It was named by French fur-trappers, who likened the deep, stony river gorge to a huge gutter.  (In French, the word 'dalles' can refer to 'gutters' or 'flagstones.') Emigrants to Oregon often stop here to rest and trade before rafting down the Columbia."
    },
    {
        name : "Barlow Toll Road",
        miles : 100,
        type : "camp",
        modifier : "flatland",
        description: "Emigrants who don't want to raft down the Columbia River can take the Barlow Toll Road.  It was cut in 1845 by Samuel Barlow, who obtained a grant from the territorial legislature to charge a toll for its use.  Passing through rough, mountainous terrain, it runs from The Dalles to the Willamette Valley.  It's a difficult 90 miles, but many prefer it to rafting."
    },
    {
        name : "The Willamette Valley, Oregon",
        miles : 37,
        type : "camp",
        modifier : "flatland",
        description: "The Willamette Valley is the goal of most emigrants to Oregon.  The WIllamette River flows north into the Columbia river, running parallel to the Pacific coast, only about 50 miles to the west.  The river has created a wide, fertile valley with some of the best soil in Oregon.  That, plus the mild climate and plenty of rainfall, makes it ideal for farming country."
    }
];
var atFort = false;
var atCamp = false;
var atRiver = false;
var oxModifier = 1;
var repairModifier = 1;
var daysTravelled = 0;
var currentlyStuck = false;
var currentWeather = "Fair";
var riverCounter = 0;
start();

function start() {
    nextLandmark=landmarks[0];
    inquirer
        .prompt({
            name: "profession",
            type: "list",
            message: "\nMany kind of people made the trip to Oregon.\n You may:",
            choices: ["Be a banker from Boston", "Be a carpenter from Ohio", "Be a farmer from Illinois"]
        })
        .then(function(answer) {
            if (answer.profession === "Be a banker from Boston") {
                occupation = "Banker";
                inventory.money = 1600;
            }
            else if(answer.profession === "Be a carpenter from Ohio") {
                occupation = "Carpenter";
                inventory.money = 800;
                repairModifier = 2;
            } else{
                occupation = "Farmer";
                inventory.money = 400;
                oxModifier = 2;
            }
        namePlayers();
    });
}

function namePlayers(){
    inquirer
        .prompt([{
            name: "player1",
            type: "input",
            message: "\nWhat is the first name of the wagon leader?",
        },
        {
            name: "player2",
            type: "input",
            message: "What is the first name of another member in your party?",
        },
        {
            name: "player3",
            type: "input",
            message: "What is the first name of another member in your party?",
        },
        {
            name: "player4",
            type: "input",
            message: "What is the first name of another member in your party?",
        },
        {
            name: "player5",
            type: "input",
            message: "What is the first name of another member in your party?",
        }])
        .then(function(answer) {
            player1.name = answer.player1;
            player2.name = answer.player2;
            player3.name = answer.player3;
            player4.name = answer.player4;
            player5.name = answer.player5;
            playerArray.push(player1);
            playerArray.push(player2);
            playerArray.push(player3);
            playerArray.push(player4);
            playerArray.push(player5);
            pickStartTime();
    });
}

function pickStartTime(){
    inquirer
        .prompt({
            name: "month",
            type: "list",
            message: "\nIt is 1848. Your jumping off place for Oregon is Independence, Missouri. You must decide which month to leave Independence.",
            choices: ["March", "April", "May", "June", "July"]
        })
        .then(function(answer) {
            startMonth =  answer.month;
            startStore();
    });
}

function startStore(){
    buySupplies();
}

function getWeatherConditions(currentDateObject){
    var currentMonth = currentDateObject.getMonth();
    // console.log(currentMonth);
    //0,1,2 is winter. 6, 7, 8 is summer
    //4 and 5 slight summer, 11, 12 slight winter
    if(currentMonth >=0 && currentMonth<3){
        currentWeather = "cold".blue;
    }
    else if(currentMonth>=6 && currentMonth<9){
        currentWeather = "hot".red;
    }
    else if(currentMonth===4 || currentMonth===5){
        currentWeather = "warm".red;
    }
    else if(currentMonth===11 || currentMonth===12){
        currentWeather = "cool".blue;
    }
    else{
        currentWeather = "fair".gray;
    }
}

function gameLoop(){
    checkGameOver();
    var offerChoices = ["Continue on trail", "Check supplies", "Look at map", "Change pace", "Change food rations", "Stop to rest", "Hunt"];
    var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var currentDateObject = addDays(daysTravelled);
    getWeatherConditions(currentDateObject);
    console.log("------------------------------");
    // console.log("This is everyone's health\n");
    // for(var i = 0; i<5; i++){
    //     if(playerArray[i].isAlive){
    //         console.log(playerArray[i].health);
    //     }
    // }
    console.log("\nIt is " + monthNames[currentDateObject.getMonth()] +" "+ currentDateObject.getDate()+", "+currentDateObject.getFullYear() + ".\n");
    console.log("The current weather is "+currentWeather+".\n");
    if(atCamp){
        offerChoices = ["Continue on trail", "Check supplies", "Look at map", "Change pace", "Change food rations", "Stop to rest", "Attempt to trade", "Talk to People"];
    }
    if(atFort){
        offerChoices = ["Continue on trail", "Check supplies", "Look at map", "Change pace", "Change food rations", "Stop to rest", "Attempt to trade", "Talk to People", "Buy Supplies"];
    }
    if(atRiver){
        offerChoices = ["Continue on trail", "Check supplies", "Look at map", "Change pace", "Change food rations", "Stop to rest", "Attempt to trade", "Talk to People"];
    }
    inquirer
        .prompt({
            name: "turn",
            type: "list",
            message: "You may:\n",
            choices: offerChoices
        })
        .then(function(answer) {
            switch (answer.turn) {
                case "Continue on trail":
                    if(currentlyStuck){
                        console.log("\nYou cannot continue on the trail at this time. Attempt to trade or buy supplies!\n");
                        gameLoop();
                    }
                    else{
                        continueTrail();
                    }
                    break;
                case "Check supplies":
                    checkSupplies();
                    break;
                case "Look at map":
                    lookMap();
                    break;
                case "Change pace":
                    changePace();
                    break;
                case "Change food rations":
                    changeRations();
                    break;
                case "Stop to rest":
                    stopToRest();
                    break;
                case "Attempt to trade":
                    attemptTrade();
                    break;
                case "Talk to People":
                    talkToPeople();
                    break;
                case "Buy Supplies":
                    buySupplies();
                    break;
                case "Hunt":
                    hunt();
                    break;
                default:
                    break;
            }
    });
}

function continueTrail(){
    atCamp = false;
    atFort = false;
    atRiver = false;
    var milesTraveled = 0;
    daysTravelled++;
    if(nextLandmark.modifier==="flatland"){
        trailConditions = 5;
    }
    else{
        trailConditions = 0;
    }
    milesTraveled = (inventory.oxen)*pace+Math.floor(Math.random() * (2*trailConditions) +1);
    if(milesTraveled>40){
        milesTraveled = 40;
    }
    nextLandmark.miles -= milesTraveled;
    if(nextLandmark.miles<=0){
        landmark();
    }
    else{
        console.log("");
        console.log(nextLandmark.miles + " miles to reach " + nextLandmark.name);
        milesToGo -= milesTraveled;
        var poundsEaten = 0;
        var peopleAlive = 0;
        if(nextLandmark.modifier==="rockies"){
            trailConditions = 5;
        }
        else{
            trailConditions = 0;
        }
        var trailProblem = Math.floor(Math.random() * Math.floor(15-trailConditions))===1;
        var somethingBroke = Math.floor(Math.random() * Math.floor(20-trailConditions))===1;
        var oxDied = Math.floor(Math.random() * Math.floor(25*oxModifier))===1;
        var wasRobbed = Math.floor(Math.random() * Math.floor(50))===1;
        var wasFire = Math.floor(Math.random() * Math.floor(50))===1;

        if(trailProblem){
            var daysDelayed = Math.floor(Math.random() * 5 +1);
            console.log("There's a problem on the trail. You were delayed ".yellow+daysDelayed+" days.".yellow);
            rest(daysDelayed, "problem");
            //subtract food;
        }
        else if(somethingBroke){
            partBroke();
        }
        else if(oxDied && inventory.oxen>0){
            oxenDied();
        }
        else if(wasRobbed){
            disaster("robbed");
        }
        else if(wasFire){
            disaster("fire");
        }
        else{

        }

        if(!trailProblem&&!wasRobbed&&!wasFire&&!somethingBroke&&!oxDied){
            for(var i = 0; i<5; i++){
                if(playerArray[i].isAlive){
                    //disease
                    if(nextLandmark.modifier==="disease"){
                        trailConditions = 5;
                    }
                    else{
                        trailConditions = 0;
                    }
                    var getSick = Math.floor(Math.random() * Math.floor(20-trailConditions));
                    var justGotSick = false;
                    if(getSick === 1){
                        justGotSick = true;
                    }
                    if(getSick === 1 && playerArray[i].condition === "none"){
                        if(justGotSick){
                            var randomIllness = Math.floor(Math.random() * 7);
                            // console.log(randomIllness);
                            switch (randomIllness) {
                                case 0:
                                    playerArray[i].condition = "cholera";
                                    break;
                                case 1:
                                    playerArray[i].condition = "exhaustion";
                                    break;
                                case 2:
                                    playerArray[i].condition = "a broken arm";
                                    break;
                                case 3:
                                    playerArray[i].condition = "a broken leg";
                                    break;
                                case 4:
                                    playerArray[i].condition = "measles";
                                    break;
                                case 5:
                                    playerArray[i].condition = "typhoid";
                                    break;
                                case 6:
                                    playerArray[i].condition = "dysentery";
                                    break;    
                                default:
                                    break;
                            }
                            console.log(playerArray[i].name.yellow + " has ".yellow + playerArray[i].condition.yellow + ".".yellow);
                        }
                        playerArray[i].health -= 10;
                    }
                    if(playerArray[i].isAlive){
                        if(rations === 1 && inventory.food > 0){
                            poundsEaten +=3;
                            playerArray[i].health -= 1;
                        }
                        if(rations === 2 && inventory.food > 0){
                            poundsEaten +=2;
                            playerArray[i].health -= 3;
                        }
                        if(rations === 3 && inventory.food > 0){
                            poundsEaten +=1;
                            playerArray[i].health -= 5;
                        }
                        if(pace === 1){
                            playerArray[i].health -= 2;
                        }
                        if(pace === 2){
                            playerArray[i].health -= 3;
                        }
                        if(pace === 3){
                            playerArray[i].health -= 4;
                        }
                        if(inventory.food === 0){
                            playerArray[i].health -= 10;
                        }
                        if(currentWeather === "cold" && inventory.clothing<10)
                        {
                            playerArray[i].health -= 3;
                        }
                        if(currentWeather === "cool" && inventory.clothing<5){
                            playerArray[i].health -= 1;
                        }
                        if(currentWeather === "hot")
                        {
                            playerArray[i].health -= 2;
                        }
                        if(currentWeather === "warm")
                        {
                            playerArray[i].health -= 1;
                        }
                    }
                    if(playerArray[i].condition!=="none" && !justGotSick){
                        checkCure(playerArray[i], 1+pace);
                        if(playerArray[i].condition==="none"){
                            console.log(playerArray[i].name.green + " is well again!".green);
                        }
                    }
                    if(playerArray[i].health<=0&&playerArray[i].isAlive===true)
                    {
                        playerDied(playerArray[i]);
                    }
                    if(playerArray[i].isAlive===true){
                        peopleAlive++;
                    }
                }
            }
            inventory.food -= poundsEaten;
            if(peopleAlive<=0){
                gameLost();
            }
            console.log("You traveled " + milesTraveled + " miles today.\n");
            gameLoop();
        }
    }
}

function gameLost(){
    console.log("\nEveryone in your party has died.\nMany wagons fail to make it all the way to Oregon.".red);
    getScore("lost");
}

function playerDied(thePlayer){
    console.log("");
    if(thePlayer.condition!="none"){
        console.log(thePlayer.name.red + " has died of ".red+ thePlayer.condition.red+"!".red);
    }
    else{
        console.log(thePlayer.name.red + " got sick and died!".red);
    }
    thePlayer.isAlive = false;
    console.log("");
}

function landmark(){
    if(nextLandmark.name == "The Willamette Valley, Oregon"){
        gameWon();
    }
    console.log("You have arrived at ".green + nextLandmark.name.green);
    console.log("\n"+nextLandmark.description.green+"\n");
    if(nextLandmark.type === "river"){
        riverCrossing();
    }
    if(nextLandmark.type === "fort"){
        fortArrival();
        fortCounter++;
    }
    if(nextLandmark.type === "camp"){
        campArrival();
    }

    landmarkCounter++;
    nextLandmark = landmarks[landmarkCounter];
    
}

function oxenDied(){
    if(inventory.oxen>0){
        console.log("An ox died.\n".yellow);
        inventory.oxen--;
    }
    if(inventory.oxen<=0){
        currentlyStuck = true;
        foreverStuck();
    }
    else{
        gameLoop();
    }
}

function partBroke(){
    console.log("Something on your wagon broke and must be repaired or replaced.\n".yellow);
    var partBroke = Math.floor(Math.random() * 3 +1);
    if(partBroke===1){
        console.log("\nA wagon wheel broke! You must repair or replace it!\n".yellow);
        var didRepair = Math.floor(Math.random() * 4 +1);
        if(didRepair===1||didRepair===repairModifier){
            console.log("\nYou were able to repair it!\n");
            gameLoop();
        }
        else if(inventory.wheels>0){
            console.log("\nYou were unable to repair it, but were able to replace it!\n");
            inventory.wheels--;
            gameLoop();
        }
        else{
            console.log("\nYou were unable to repair or replace it! You must attempt to trade for a new part before continuing!\n");
            currentlyStuck = true;
            foreverStuck();
            // gameLoop();
        }
    }
    else if(partBroke===2){
        console.log("\nA wagon axel broke! You must repair or replace it!\n".yellow);
        var didRepair = Math.floor(Math.random() * 4 +1);
        if(didRepair===1||didRepair===repairModifier){
            console.log("\nYou were able to repair it!\n");
            gameLoop();
        }
        else if(inventory.axels>0){
            console.log("\nYou were unable to repair it, but were able to replace it!\n");
            inventory.axels--;
            gameLoop();
        }
        else{
            console.log("\nYou were unable to repair or replace it! You must attempt to trade for a new part before continuing!\n");
            currentlyStuck = true;
            foreverStuck();
            // gameLoop();
        }
    }
    else{
        console.log("\nA wagon tongue broke! You must repair or replace it!\n".yellow);
        var didRepair = Math.floor(Math.random() * 4 +1);
        if(didRepair===1||didRepair===repairModifier){
            console.log("\nYou were able to repair it!\n");
            gameLoop();
        }
        else if(inventory.tongues>0){
            console.log("\nYou were unable to repair it, but were able to replace it!\n");
            inventory.tongues--;
            gameLoop();
        }
        else{
            console.log("\nYou were unable to repair or replace it! You must attempt to trade for a new part before continuing!\n");
            currentlyStuck = true;
            foreverStuck();
            // gameLoop();
        }
    }


    
}

function addDays(days) {
    //Month is "April", year is "1848", day is 01.
    var monthNumber = new Date(Date.parse(startMonth +" 1, 1848")).getMonth();
    var result = new Date("1848", monthNumber, "1");
    // console.log(result);
    result.setDate(result.getDate() + days);
    return result;
}

function fortArrival(){
    atFort = true;
    gameLoop();
}

function foreverStuck(){
    console.log("\nYou cannot continue on the journey anymore!\nMany wagons fail to make it all the way to Oregon.".red);
    getScore("stuck");
}

function campArrival(){
    atCamp = true;
    gameLoop();
}

function riverCrossing(){
    atRiver = true;
    riverCounter++;
    var riverModifier = 1;
    if(currentWeather==="hot"){
        riverModifier = 3;
    }
    if(currentWeather==="warm"){
        riverModifier = 2;
    }
    var riverDepth = (Math.random()*(4-riverModifier+riverCounter)+1).toFixed(1);
    var riverWidth = Math.floor(Math.random() * (225+(50*(riverCounter/riverModifier)))) + 400;
    inquirer
        .prompt({
            name: "choice",
            type: "list",
            message: "You must cross the river in order to continue. The river at this point is currently "+riverWidth+" feet across, and "+riverDepth+" feet deep in the middle.\nYou may:",
            choices: ["attempt to ford the river", "caulk the wagon and float it across", "take a ferry across the river for $"+(4+riverCounter)+".00.", "wait to see if conditions improve"]
        })
        .then(function(answer) {
            if(answer.choice === "attempt to ford the river"){
                if(riverDepth>3){
                    if((Math.floor(Math.random() * 2) == 0)){
                        disaster("river");
                    }
                    else{
                        console.log("You made it safely across the river.");
                        gameLoop();
                    }
                }
                else{
                    console.log("You made it safely across the river.");
                    gameLoop();
                }
            }
            else if(answer.choice === "caulk the wagon and float it across"){
                if(riverWidth>600){
                    if((Math.floor(Math.random() * 2) == 0)){
                        disaster("river");
                    }
                    else{
                        console.log("You made it safely across the river.");
                        gameLoop();
                    }
                }
                else{
                    console.log("You made it safely across the river.");
                    gameLoop();
                }
            }
            // else if(answer.choice === "take a ferry across"){
            //     console.log("You made it safely across the river.");
            //     gameLoop();
            // }
            else if(answer.choice === "wait to see if conditions improve"){
                //this isn't working correctly
                riverWaiting();
            }
            else{
                if(inventory.money>=(4+riverCounter)){
                    inventory.money-=(4+riverCounter);
                    console.log("You made it safely across the river.");
                    gameLoop();
                }
                else{
                    console.log("You don't have enough money to take the ferry!");
                }
            }
    });
}

function riverWaiting(){
    console.log("\nYou waited 1 day for conditions to change.\n");
    riverCounter--;
    rest(1, "river");
    riverCrossing();
}

function disaster(disasterType){
    if(disasterType === "river"){
        console.log("The river caused damage to your wagon! You lost:".red);
        for(var i = 0; i<5; i++){
            if(playerArray[i].isAlive && (Math.floor(Math.random() * 10) == 0)){
                console.log(playerArray[i].name.red + " (drowned)".red);
                playerArray[i].isAlive = false;
            }
        }
    }
    else if(disasterType === "fire"){
        console.log("A fire in your wagon destroyed:".red);
        for(var i = 0; i<5; i++){
            if(playerArray[i].isAlive && (Math.floor(Math.random() * 10) == 0)){
                console.log(playerArray[i].name.red + " (burned)".red);
                playerArray[i].isAlive = false;
            }
        }
    }
    else{
        console.log("A thief stole:".red);
    }
    for(var key in inventory){
        if(inventory[key]>0 && (Math.floor(Math.random() * 2) == 0)){
            var numberLost = parseInt((Math.floor(Math.random() * inventory[key] + 1))/2);
            if(numberLost>0){
                inventory[key]=inventory[key]-numberLost;
                console.log(numberLost+" "+key);
            }
        }
    }
    console.log("");
    gameLoop();
}

function gameWon(){
    console.log("\nYou made it to Oregon!\n".green);
    getScore("won");
}

function checkSupplies(){
    console.log("");
    for(var i = 0; i<5; i++){
        if(playerArray[i].isAlive){
            var playerConditionString = "";
            if(playerArray[i].health>80&&playerArray[i].health<=100){
                playerConditionString = "great";
            }
            if(playerArray[i].health>60&&playerArray[i].health<=80){
                playerConditionString = "good";
            }
            if(playerArray[i].health>40&&playerArray[i].health<=60){
                playerConditionString = "fair";
            }
            if(playerArray[i].health>20&&playerArray[i].health<=40){
                playerConditionString = "poor";
            }
            if(playerArray[i].health>0&&playerArray[i].health<=20){
                playerConditionString = "very poor";
            }
            if(playerArray[i].condition !== "none"){
                console.log(playerArray[i].name + " has " + playerArray[i].condition + ".");
            }
            if(playerArray[i].condition === "none"){
                console.log(playerArray[i].name + " is in " + playerConditionString + " condition.");
            }
        }
    }
    console.log("Your current pace is set to: " + pace);
    console.log("Your current rations is set to: " + rations);
    console.log("This is your inventory: ");
    console.table(inventory);
    // console.log(inventory);
    gameLoop();
}

function lookMap(){
    console.log("");
    console.log(nextLandmark.name + " is " + nextLandmark.miles + " miles away!");
    console.log("You have a total of " + milesToGo + " miles to go for your entire journey!");
    console.log("");
    gameLoop();

}

function changePace(){
    inquirer
        .prompt({
            name: "pace",
            type: "list",
            message: "The pace at which you travel can change. Your choices are: ",
            choices: ["a steady pace", "a strenuous pace", "a grueling pace"]
        })
        .then(function(answer) {
            if (answer.pace === "a steady pace") {
                pace = 1;
            }
            else if(answer.pace === "a strenuous pace") {
                pace = 2;

            } else{
                pace = 3;
            }
        gameLoop();
    });
}

function changeRations(){
    inquirer
        .prompt({
            name: "rations",
            type: "list",
            message: "The amount of food the people in your party eat each day can change. These amounts are:",
            choices: ["filling - meals are large and generous.", "meager - meals are small, but adequate.", "bare bones - meals are very small; eevryone stays hungry."]
        })
        .then(function(answer) {
            if (answer.rations === "filling - meals are large and generous.") {
                rations = 1;
            }
            else if(answer.rations === "meager - meals are small, but adequate.") {
                rations = 2;

            } else{
                rations = 3;
            }
        gameLoop();
    });
}

function rest(numberOfDays, whyRest){
    if(whyRest==="rest"){
        console.log("You rested " + numberOfDays + " days.\n");
    }
    for(var i = 0; i<numberOfDays; i++){
        daysTravelled++;
        for(var j = 0; j<5; j++)
        {
            if(playerArray[j].health<=97){
                playerArray[j].health +=3;
            }
            if(playerArray[j].condition!=="none"&&whyRest!=="problem"){
                checkCure(playerArray[j], 1);
                if(playerArray[j].condition==="none"){
                    console.log(playerArray[j].name.green + " is well again!".green);
                }
            }
            if(rations === 1 && inventory.food > 0){
                inventory.food -= 3;
                playerArray[j].health -= 0;
            }
            if(rations === 2 && inventory.food > 0){
                inventory.food -= 2;
                playerArray[j].health -= 1;
            }
            if(rations === 3 && inventory.food > 0){
                inventory.food -= 1;
                playerArray[j].health -= 2;
            }
            if(inventory.food <= 0)
            {
                playerArray[j].health -= 5;
            }
        }
    }
    if(whyRest!=="river"){
        gameLoop();
    }
}

function stopToRest(){
    inquirer
        .prompt({
            name: "rest",
            type: "input",
            message: "How many days would you like to rest?",
        })
        .then(function(answer) {
            // console.log("You rested " + answer.rest + " days");
            rest(answer.rest, "rest");
    });
}

function checkCure(thePlayer, modifier){
    if(thePlayer.isAlive){
        if(Math.floor(Math.random() * Math.floor(5*modifier))===1){
            thePlayer.condition = "none";
        }
    }
}

function attemptTrade(){

}

function talkToPeople(){
    console.log("\nYou spoke with some people. I don't really know what this is supposed to do!\n");
    gameLoop();
}

function hunt(){
    var shotsFired = Math.floor(Math.random() * 10 +1);
    var poundsOfFood =  Math.floor(Math.random() * 200 +1);
    if(inventory.ammunition>0){
        console.log("\nBANG! BANG!\nYou fired "+shotsFired+" times and got "+poundsOfFood+" pounds of food.\n");
        inventory.ammunition -= shotsFired;
        inventory.food += poundsOfFood;
        daysTravelled++;
    }
    else{
        console.log("\nYou don't have enough ammunition!\n");
    }
    gameLoop();
}

function getScore(winCondition){
    
    var score = 50;
    
    if(winCondition==="won"){
        for(var i = 0; i<5; i++){
            if(playerArray[i].isAlive){
                if(playerArray[i].health>80){
                    score += 500;
                }
                else if(playerArray[i].health>60){
                    score += 400;
                }
                else if(playerArray[i].health>40){
                    score += 300;
                }
                else if(playerArray[i].health>20){
                    score += 200;
                }
                else{
                    score += 100;
                }
            }
        }
        for(var key in inventory){
            if(inventory[key]<0){
                inventory[key]=0;
            }
            if(key==="oxen"){
                score+=inventory[key]*4;
            }
            if(key==="food"){
                score+=inventory[key]/25;
            }
            if(key==="clothing"){
                score+=inventory[key]*2;
            }
            if(key==="ammunition"){
                score+=inventory[key]/50;
            }
            if(key==="wheel"){
                score+=inventory[key]*2;
            }
            if(key==="axels"){
                score+=inventory[key]*2;
            }
            if(key==="tongues"){
                score+=inventory[key]*2;
            }
            if(key==="money"){
                score+=inventory[key]/5;
            }
        }
        if(occupation==="Banker"){
            score=score*1;
        }
        if(occupation==="Carpenter"){
            score=score*2;
        }
        if(occupation==="Farmer"){
            score=score*3;
        }
    }
    score+=(1863-milesToGo);
    console.log("Your final score is: "+parseInt(score, 10));
    process.exit();

}

function checkGameOver(){
    if(inventory.oxen<=0){
        currentlyStuck = true;
        foreverStuck();
    }
    var peopleAlive = 0;
    for(var i = 0; i<5; i++){
        if(playerArray[i].isAlive){
            peopleAlive++;
        }
    }
    if(peopleAlive<=0){
        gameLost();
    }
    
}

function buySupplies(){
    inquirer
        .prompt([{
            name: "oxen",
            type: "input",
            message: "\nI recommend having at least 6 oxen at all times. I charge $"+(20+fortCounter*5)+" an ox.\nHow many oxen do you want?",
        },
        {
            name: "food",
            type: "input",
            message: "I recommend you have at least 200 pounds of food for each person at all times. My price is "+(20+fortCounter*5)+" cents per pound.\nHow many pounds of food do you want?",
        },
        {
            name: "clothing",
            type: "input",
            message: "You'll need warm clothing in the mountains. I recommend having at all times 2 sets of clothes per person. Each set is $"+(10+fortCounter*5)+".\nHow many sets of clothing do you want?",
        },
        {
            name: "ammunition",
            type: "input",
            message: "I sell ammunition in boxes of 20 bullets. Each box costs $"+(2+fortCounter*5)+".\nHow many boxes do you want?",
        },
        {
            name: "wheels",
            type: "input",
            message: "It's a good idea to have a few spare parts for your wagon.\nHow many wagon wheels would you like to buy? (avaliable for "+(10+fortCounter*5)+" each)",
        },
        {
            name: "axels",
            type: "input",
            message: "It's a good idea to have a few spare parts for your wagon.\nHow many wagon axels would you like to buy? (avaliable for "+(10+fortCounter*5)+" each)",
        },
        {
            name: "tongues",
            type: "input",
            message: "It's a good idea to have a few spare parts for your wagon.\nHow many wagon tongues you like to buy? (avaliable for "+(10+fortCounter*5)+" each)",
        }])
        .then(function(answer) {
            var foodprice = (20+fortCounter*5);
            foodprice /= Math.pow(10, 2);
            var bill = (parseInt(answer.oxen)*(20+fortCounter*5))+parseInt(answer.food)*foodprice+(parseInt(answer.clothing)*(10+fortCounter*5))+(parseInt(answer.ammunition)*(2+fortCounter*5))+(parseInt(answer.wheels)*(10+fortCounter*5))+(parseInt(answer.axels)*(10+fortCounter*5))+(parseInt(answer.tongues)*(10+fortCounter*5));
            if(bill<inventory.money){
                console.log("\nThank you for your patronage!\n");
                inventory.oxen += parseInt(answer.oxen);
                inventory.food += parseInt(answer.food);
                inventory.clothing += parseInt(answer.clothing);
                inventory.ammunition += parseInt(answer.ammunition)*20;
                inventory.wheels += parseInt(answer.wheels);
                inventory.axels += parseInt(answer.axels);
                inventory.tongues += parseInt(answer.tongues);
                inventory.money -= bill;
                gameLoop();
            }
            else{
                console.log("Okay, that comes to a total of $"+bill+". But I see that you only have $"+inventory.money+", we'd better go over the list again.");
                buySupplies();
            }

            
    });
}
