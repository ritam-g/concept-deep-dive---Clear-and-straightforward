function alarm(wakeUp) {
    console.log("weak up alearm tik tik tik ");
    setTimeout(() => {
         wakeUp(function (breakFast) {
        console.log("do your brash");
        setTimeout(() => {
            breakFast(function (attendClass) {
            console.log("catch your school bus");
            attendClass(function (backHOme) {
                console.log("finish your lunce");
                backHOme(function () {
                    console.log("go to your tution and finish your home workd \n finish your dinner and got to bed for sleep ");
                    
                })
            })
        })
        }, 3000);
        
    }
            )
    }, 2000);
   
}
alarm(function (brush) {
    console.log("wake up");
    setTimeout(() => {
        brush(function (schoolBus) {
        console.log("finish your brakfast");
        schoolBus(function (lunch) {
            console.log("attend your class");
            lunch(function (finalFun) {
                console.log("back to your home");
                finalFun()
            })
        })
    })
    }, 2000);
    
})
