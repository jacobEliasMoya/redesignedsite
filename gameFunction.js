var textshrink;
var gameOn = false;

// let lightboxObj = {
//     closeButton:document.querySelector('.lightbox div button'),
//     lightbox:document.querySelector('.lightbox'),
//     lightboxEmbed:document.querySelector('.lightbox div'),
//     // lightboxEmbed1:document.querySelector('.lightbox embed'),
//     // lightboxEmbed2:document.querySelector('.lightbox embed'),
//     // lightboxEmbed3:document.querySelector('.lightbox embed'),
//     // lightboxEmbed4:document.querySelector('.lightbox embed'),

//     // closeMe:document.querySelector('.closeButton'),

//     displayBox(){
//         this.lightbox.style.display='flex';
//         this.lightboxEmbed.style.display='flex';
//     },


//     growSize(){
//         this.lightbox.style.opacity='1';
//         this.lightbox.style.height='1000vh';
//         this.lightbox.style.width='1000vw';
//         this.lightboxEmbed.style.height='95vh';
//         this.lightboxEmbed.style.width='95vw';
//     },

//     closeLightBox(){
//         this.lightbox.style.display='none';
//         this.lightboxEmbed.style.display='none';
//         this.lightbox.style.height='0vh';
//         this.lightbox.style.width='0vw';
//         this.lightboxEmbed.style.height='0vh';
//         this.lightboxEmbed.style.width='0vw';
//         setTimeout(() => {
//             jellySHOOT.bullet.style.display='none';
//         }, 1);

//     }
// }

let jellySHOOT = {


    difficultylevel : 2000,

    score : 0,

    scoreDisplayer : document.querySelector('.scoredisplay'),

    earth : document.querySelector('.world'),

    displayTextCount : 0,

    displayTextCountEasteregg : 0,

    bulletShot : document.querySelectorAll('.bulletShot'),

    jellyHome : document.querySelector('#followWrapper'), 

    bullet: document.querySelector('#bullet'),

    asteroids : document.querySelectorAll('.asteroids'),

    xAxis:undefined,

    yAxis:undefined,

    outSideDistance: undefined,

    shootActive: undefined,

    shotStartingPos : undefined,

    shootInt : undefined,

    shootIntCount : 0,

    resetScore(){
        this.score =0;
        this.scoreDisplayer.innerHTML='0000';
        this.difficultylevel =2000;
    },

    incrementScoreVisually(){
        this.score += 1000;
        this.scoreDisplayer.innerHTML = jellySHOOT.score;
        this.scoreDisplayer.style.color='lime';

        setTimeout(() => {
            this.scoreDisplayer.style.color='white';
        }, 500);
    },

    raiseDifficulty(){
        if(this.score===10000){
            this.difficultylevel = 2000;
            setAsteroids.astergoidGameInt2 = setInterval(() => {
                setAsteroids.createAsteroid();
                setAsteroids.asteroids = document.querySelectorAll('.asteroids');
            }, jellySHOOT.difficultylevel);
        }
        if(this.score===15000){
            this.difficultylevel = 2500;
            setAsteroids.astergoidGameInt3 = setInterval(() => {
                setAsteroids.createAsteroid();
                setAsteroids.asteroids = document.querySelectorAll('.asteroids');
            }, jellySHOOT.difficultylevel);

        }
        if(this.score===20000){
            this.difficultylevel = 2750;
            setAsteroids.astergoidGameInt4 = setInterval(() => {
                setAsteroids.createAsteroid();
                setAsteroids.asteroids = document.querySelectorAll('.asteroids');
            }, jellySHOOT.difficultylevel);

        }
        if(this.score===25000){
            this.difficultylevel = 3000;
            setAsteroids.astergoidGameInt5 = setInterval(() => {
                setAsteroids.createAsteroid();
                setAsteroids.asteroids = document.querySelectorAll('.asteroids');
            }, jellySHOOT.difficultylevel);

        }

    },

    getAxisXnY(event){

        outSideDistance = (this.jellyHome.getBoundingClientRect().left - this.xAxis)*-1;

        this.xAxis = event.pageX ;

        if(isNaN(outSideDistance)){
            return;
        } else{
            outSideDistance = (this.jellyHome.getBoundingClientRect().left - this.xAxis)*-1;
            this.xAxis = Math.floor(outSideDistance);
        }

        this.yAxis = event.pageY;
    },

    setCursorPosition(div){

        // div.style.position = 'absolute';

        div.style.top = `${this.yAxis-10}px `;

        div.style.left = `400%`;

    },

    clearCursorPosition(div){
        div.style.top = ``;
        div.style.left = ``;
    },

    collisionDetection(projectile,targetObj){
        // horizontal check

        let chx = 0;

        if(projectile.getBoundingClientRect().right > targetObj.getBoundingClientRect().left && projectile.getBoundingClientRect().left < targetObj.getBoundingClientRect().right){
            chx++;
        } 

        if(projectile.getBoundingClientRect().top > targetObj.getBoundingClientRect().top && projectile.getBoundingClientRect().bottom < targetObj.getBoundingClientRect().bottom ){
            chx++;
        } 

        if(chx===2){
            targetObj.style.color='lime';
            this.shootActive = false;
            clearInterval(this.shootInt);
            setTimeout(function(){ 
                targetObj.style.textShadow='';

                targetObj.style.color='';
            }, 1000);

            return true;
            

 
        } else {
            targetObj.style.borderRadius='';
            return false;

        }
    },

    memeNumber1(){
        this.displayTextCountEasteregg++;
        switch(this.displayTextCountEasteregg){
            case 3:
                alert("This is pretty fun to shoot isn't it?");
            break
            case 6:
                alert('You are still doing this? You have a problem, stop.');
            break
            case 9:
                alert('I think you are a little to addicted to shooting this, a few more times, and I will get help for you...');
            break
            case 10:
                window.location ='https://www.youtube.com/watch?v=l60MnDJklnM';
            break

        }
    },

    // shrinkObj(){

    // },

    shootObj(element){
        //resets
        element.style.display='';
        // this.descrTxt.style.transition='none';
        // this.descrTxt.style.transform='';

        if(this.shootActive){
            clearInterval(this.shootInt);
        }
        this.shootActive = true;

        
        this.shootInt = setInterval(()=>{
            let curPos = parseInt(element.style.left);
            let newPos = curPos+20;
            element.style.left = `${newPos}px`;

            this.asteroids.forEach(asteroid=>{
                if(this.shootActive){
                    if(this.collisionDetection(element,asteroid)){
                        element.style.display='none';
                        if(asteroid.classList.contains('finalhit')){
                            asteroid.style.display='none';
                            this.incrementScoreVisually();
                            this.raiseDifficulty();
                            // this.raiseDifficulty();
                        }
                        if(asteroid.classList.contains('hitone')){
                            asteroid.src ='./customPhotos/asteroid2.png';
                            asteroid.classList.add('finalhit');
                            asteroid.style.width='2.5%';
                        
                        }
                        if(!asteroid.classList.contains('hitone')){
                            asteroid.classList.add('hitone');
                            asteroid.src ='./customPhotos/asteroid3.png';
                            asteroid.style.width='5%';
                        }


                    };


                }
            })   


        },1)
    },

}

let setAsteroids = {

    gamerestart : false,
    earthHealth : document.querySelectorAll('.healthbar.one img'),
    shipHealth : document.querySelector('.healthbar.two .bad'),
    asteroidContainer : document.querySelector(".gamecontainer"),
    startButton : document.querySelector('.startbutton'),
    asteroids : document.querySelectorAll('.asteroids'),
    earth: document.querySelector('.world'),
    ship : document.querySelector('#spaceX'),
    randomNum1:Math.floor(Math.random()*101),
    randomNum2:Math.floor(Math.random()*101),
    bullet: document.querySelector('#bullet'),
    startingPos : 110,
    incrementer : 0,
    collisionInt : undefined,
    asteroidInt : undefined,
 
    astergoidGameInt : undefined,
    astergoidGameInt2 : undefined,
    astergoidGameInt3 : undefined,
    astergoidGameInt4 : undefined,
    astergoidGameInt5 : undefined,
    earthDmg : 0,
    collidedCount : 0,

    damageEarth(number){
        if(number ===2){
            this.earth.src ='./customPhotos/worldIMGd1.png';
        } 
        if(number ===3){
            this.earth.src ='./customPhotos/worldIMGd2.png';
        } 
        if(number ===4){
            this.earth.src ='./customPhotos/worldIMGd3.png';
        } 
        if(number ===5){
            this.earth.src ='./customPhotos/worldIMGd4.png';
        } 
        if(number ===6){
            this.earth.src ='./customPhotos/worldIMGd5.png';
        } 
    },


    resetEarths(){
        this.earthHealth.forEach(earth=>{
            earth.src='./customPhotos/babyearth.png';
        })
        this.earth.classList.remove("hitone","hittwo","hitthree","hitfour","hitfive");
        this.earth.src ='./customPhotos/worldIMG.png';

    },

    armageddon(){
        textshrink.style = "transition:all ease 3s;font-size:4rem;z-index:100;";
        textshrink.innerHTML = "GAME OVER";
        clearInterval(setAsteroids.astergoidGameInt);
        clearInterval(setAsteroids.astergoidGameInt2);
        clearInterval(setAsteroids.astergoidGameInt3);
        clearInterval(setAsteroids.astergoidGameInt4);
        clearInterval(setAsteroids.astergoidGameInt5);

        clearInterval(setAsteroids.collisionInt);
        setAsteroids.startButton.innerHTML = '<a href="#followWrapper">Try Again?</a>';
        this.asteroids.forEach(asteroid=>{
            asteroid.style.display='none';
        })
        this.gamerestart = true;
        gameOn = false;
        this.collidedCoun=0;

        
    },
    

    earthHealthDown(){
        this.earth.classList.add('hitone');
        if(this.earth.classList.contains('hitone')){
            this.earthHealth.forEach(health=>{
                if(health.classList.contains('earthone')){
                    health.src='./customPhotos/babyearthcross.png';
                }
            })
        }
    },

    collisionDetection(){
            setAsteroids.asteroids.forEach(asteroid=>{
                if(asteroid.getBoundingClientRect().left < this.earth.getBoundingClientRect().right/1.9 && asteroid.getBoundingClientRect().left > 2){
                    asteroid.style.display='none';
                    // clearInterval(this.collisionInt); 
                    if(!this.earth.classList.contains('hitone')){
                        this.earth.classList.add('hitone');
                    }
                    this.collidedCount=1;

                    if(this.earth.classList.contains('hitfive')){
                        this.armageddon();
                        this.collidedCount++;
                        this.earthHealth.forEach(health=>{
                            if(health.classList.contains('earthfive')){
                                this.earth.classList.remove('hitfive');
                                health.src='./customPhotos/babyearthcross.png';
                                this.damageEarth(this.collidedCount);

                            }
                        })
                    }

                    if(this.earth.classList.contains('hitfour')){
                        this.earth.classList.add('hitfive');
                        this.earth.classList.remove('hitfour');

                        this.collidedCount++;
                        this.earthHealth.forEach(health=>{
                            if(health.classList.contains('earthfour')){
                                health.src='./customPhotos/babyearthcross.png';
                                this.damageEarth(this.collidedCount);

                            }
                        })
                    }

                    if(this.earth.classList.contains('hitthree')){
                        this.earth.classList.add('hitfour');
                        this.earth.classList.remove('hitthree');

                        this.collidedCount++;
                        this.earthHealth.forEach(health=>{
                            if(health.classList.contains('earththree')){
                                health.src='./customPhotos/babyearthcross.png';
                                this.damageEarth(this.collidedCount);

                            }
                        })
                    }

                    if(this.earth.classList.contains('hittwo')){
                        this.earth.classList.add('hitthree');
                        this.earth.classList.remove('hittwo');

                        this.collidedCount++;
                        this.earthHealth.forEach(health=>{
                            if(health.classList.contains('earthtwo')){
                                health.src='./customPhotos/babyearthcross.png';
                                this.damageEarth(this.collidedCount);

                            }
                        })
                    }

                    if(this.earth.classList.contains('hitone')){
                        this.earth.classList.add('hittwo');
                        this.earth.classList.remove('hitone');

                        this.collidedCount++;
                        this.earthHealth.forEach(health=>{
                            if(health.classList.contains('earthone')){
                                health.src='./customPhotos/babyearthcross.png';
                                this.damageEarth(this.collidedCount);

                            }
                        })
                    }
                    
                }
            })

        // // horizontal check

        // let chx = 0;

        // if(projectile.getBoundingClientRect().right < targetObj.getBoundingClientRect().left && projectile.getBoundingClientRect().left > targetObj.getBoundingClientRect().right){
        //     chx++;
        // } 

        // if(projectile.getBoundingClientRect().top > targetObj.getBoundingClientRect().top && projectile.getBoundingClientRect().bottom < targetObj.getBoundingClientRect().bottom ){
        //     chx++;
        // } 

        // if(chx===2){
        //     return true;     
        // } else {
        //     return false;
        // }
    },


    createAsteroid(){
        let newasteroid = document.createElement("img");
        let newStartingPos = this.startingPos;
        newasteroid.src='./customPhotos/asteroid1.png';
        newasteroid.classList.add("asteroids","large");
        newasteroid.style.left = `110%`;
        newasteroid.style.top = `${Math.floor(Math.random()*85  )}%` ;
        this.asteroidContainer.appendChild(newasteroid);
        this.collidedbool=true;

        this.asteroidInt=setInterval(() => {
            newasteroid.style.left = `${newStartingPos}%`;
            newStartingPos=newStartingPos-5;
        }, 90);
    },
}


setAsteroids.startButton.addEventListener('click',()=>{
    console.log(setAsteroids.gamerestart,gameOn);
    if(gameOn){
    }else if(gameOn === false){
        // setAsteroids.gamerestart === true || 
        jellySHOOT.resetScore();
        setAsteroids.resetEarths();
        // jellySHOOT.
        textshrink = document.querySelector('.readysetgo');
        textshrink.style = "transition:all ease 3s;font-size:0rem;z-index:1;"
        setAsteroids.startButton.innerHTML = '<a href="#followWrapper">Have Fun!</a>';

        setAsteroids.astergoidGameInt = setInterval(() => {
            setAsteroids.createAsteroid();
            setAsteroids.asteroids = document.querySelectorAll('.asteroids');
        }, jellySHOOT.difficultylevel);
    
        setAsteroids.collisionInt = setInterval(() => {
            setAsteroids.collisionDetection();
        }, 10);

        setAsteroids.startButton.style.background = 'rgba(84, 19, 115, 0.267)';
        gameOn=true;
    }

})

 window.addEventListener('load',(e)=>{
    jellySHOOT.getAxisXnY(e);
    jellySHOOT.setCursorPosition(jellySHOOT.bullet);
});

jellySHOOT.jellyHome.addEventListener('mousemove',(e)=>{
    jellySHOOT.getAxisXnY(e);
    jellySHOOT.asteroids = document.querySelectorAll('.asteroids');

});

jellySHOOT.jellyHome.addEventListener('click',(e)=>{
    jellySHOOT.getAxisXnY(e);
    jellySHOOT.setCursorPosition(jellySHOOT.bullet);

    if(window.innerWidth>1){
        jellySHOOT.shootObj(jellySHOOT.bullet);
    } else {
        return;
    }
    
    jellySHOOT.bullet.style.display='block';

})


 
