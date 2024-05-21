// Opening Ceremony function
function OpeningCeremony(callback) {
    console.log("Let the games begin");
    setTimeout(() => {
        let score = { red: 0, blue: 0, green: 0, yellow: 0 };
        console.log("Initial Scores:", score);
        Race100M(score, Race100M);
    }, 1000);
}

// Race100M function
function Race100M(score, callback) {
    setTimeout(() => {
        console.log("Race 100M starts");

        let times = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
        };

        console.log("Race Times:", times);

        let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);

        score[sortedTimes[0][0]] += 50;
        score[sortedTimes[1][0]] += 25;

        console.log("Updated Scores after Race 100M:", score);
        LongJump(score, LongJump);
    }, 3000);
}

// LongJump function
function LongJump(score, callback) {
    setTimeout(() => {
        console.log("Long Jump starts");

        let colors = ["red", "blue", "green", "yellow"];
        let winner = colors[Math.floor(Math.random() * colors.length)];

        score[winner] += 150;

        console.log(`Long Jump Winner: ${winner}`);
        console.log("Updated Scores after Long Jump:", score);
        HighJump(score, HighJump);
    }, 2000);
}

// HighJump function
function HighJump(score, callback) {
    setTimeout(() => {
        console.log("High Jump starts");

        let winner = prompt("What colour secured the highest jump? (red, blue, green, yellow)");

        if (winner && score.hasOwnProperty(winner)) {
            score[winner] += 100;
            console.log(`High Jump Winner: ${winner}`);
        } else {
            console.log("Event was cancelled");
        }

        console.log("Updated Scores after High Jump:", score);
        AwardCeremony(score);
    }, 2000);
}

// Award Ceremony function
function AwardCeremony(score) {
    console.log("Award Ceremony starts");

    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);

    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
    console.log(`${sortedScores[3][0]} came fourth with ${sortedScores[3][1]} points.`);
}
OpeningCeremony(Race100M);
