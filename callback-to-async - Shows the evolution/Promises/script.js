function alarm() {
    return new Promise((resolve) => {
        console.log("Alarm: TIK TIK TIK TIK!!!");
        setTimeout(resolve, 1000);
    });
}

function wakeUp() {
    return new Promise((resolve) => {
        console.log("Uth gaya bhai… bas 5 minute aur...");
        setTimeout(resolve, 2000);
    });
}

// Ab tu yeh 7 functions khud likh de (same pattern):

function brush() {
    return  new Promise((resolve) => {
        console.log("Brush kar raha hu bro ...");
        setTimeout(resolve, 3000);
    })
}
// 4. breakfast() 
function breakFast() {
    new Promise(resolve => {
        console.log("breakFast khatam karo ");
        setTimeout(resolve, 4000);
    })
}
// 5. catchBus() 
function catchBus() {
    return new Promise(resolve => {
        console.log("Bus pakar");
        setTimeout(resolve, 5000);
    })
}
// 6. attendClass()
function attendClass() {
    return new Promise(resolve => {
        console.log("attend class");
        setTimeout(resolve, 5000);
    })
}
// 7. lunch()
function lunch() {
    return new Promise(resolve => {
        console.log("lucnch karo ");
        setTimeout(resolve, 5000);
    })
}
// 8. backHome()
function backHome() {
    return new Promise(resolve => {
        console.log("gahr pea return jau");
        setTimeout(resolve, 5000);
    })
}
// 9. sleepMode()
function sleepMode() {
    return new Promise(resolve => {
        console.log("sleepMode on ");
        setTimeout(resolve, 5000);
    })
}

// Har function mein:
// → console.log() apna message
// → setTimeout(resolve, time)  → time tu decide kar (800, 1000, 2000, 3000 etc.)

// Final chaining tu likhega aise:
alarm()
    .then(() => wakeUp())
    .then(() => brush())
    .then(() => breakFast())
    .then(() => catchBus())
    .then(() => attendClass())
    .then(() => lunch())
    .then(() => backHome())
    .then(() => sleepMode())
    .then(() => console.log("Day complete! Kal phir alarm bajega"))
    .catch((err) => console.log("Kuch toh gadbad hua:", err));