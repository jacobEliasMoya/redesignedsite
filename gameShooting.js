let lightboxObj = {
    closeButton:document.querySelector('.lightbox div button'),
    lightbox:document.querySelector('.lightbox'),
    lightboxEmbed:document.querySelector('.lightbox div'),
    // lightboxEmbed1:document.querySelector('.lightbox embed'),
    // lightboxEmbed2:document.querySelector('.lightbox embed'),
    // lightboxEmbed3:document.querySelector('.lightbox embed'),
    // lightboxEmbed4:document.querySelector('.lightbox embed'),

    // closeMe:document.querySelector('.closeButton'),

    displayBox(){
        this.lightbox.style.display='flex';
        this.lightboxEmbed.style.display='flex';
    },


    growSize(){
        this.lightbox.style.opacity='1';
        this.lightbox.style.height='1000vh';
        this.lightbox.style.width='1000vw';
        this.lightboxEmbed.style.height='95vh';
        this.lightboxEmbed.style.width='95vw';
    },

    closeLightBox(){
        this.lightbox.style.display='none';
        this.lightboxEmbed.style.display='none';
        this.lightbox.style.height='0vh';
        this.lightbox.style.width='0vw';
        this.lightboxEmbed.style.height='0vh';
        this.lightboxEmbed.style.width='0vw';
        setTimeout(() => {
            jellySHOOT.bullet.style.display='none';
        }, 1);

    }
}

let jellySHOOT = {

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
            let newPos = curPos+8;
            element.style.left = `${newPos}px`;

            this.asteroids.forEach(asteroid=>{
                if(this.shootActive){
                    if(this.collisionDetection(element,asteroid)){
                        element.style.display='none'
                        if(asteroid.classList.contains('finalhit')){
                            asteroid.style.display='none';
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


let counter2 = 0;

// 



lightboxObj.displayBox();
lightboxObj.growSize();
lightboxObj.closeButton.addEventListener('click',()=>{
    lightboxObj.closeLightBox();

    
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
    jellySHOOT.bullet.style.zIndex='150';


})


 
