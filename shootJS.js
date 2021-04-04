let lightboxObj = {
    lightbox:document.querySelector('.lightbox'),
    lightboxEmbed:document.querySelector('.lightbox embed'),
    // lightboxEmbed1:document.querySelector('.lightbox embed'),
    // lightboxEmbed2:document.querySelector('.lightbox embed'),
    // lightboxEmbed3:document.querySelector('.lightbox embed'),
    // lightboxEmbed4:document.querySelector('.lightbox embed'),

    closeMe:document.querySelector('.closeButton'),

    displayBox(){
        this.lightbox.style.display='block';
        this.lightboxEmbed.style.display='block';
    },


    growSize(){
        this.lightbox.style.opacity='1';
        this.lightbox.style.height='1000vh';
        this.lightbox.style.width='1000vw';
        this.lightboxEmbed.style.height='90vh';
        this.lightboxEmbed.style.width='90vw';
    },

    closeLightBox(){
        this.lightbox.style.display='none';
        this.lightboxEmbed.style.display='none';
        this.lightbox.style.height='0vh';
        this.lightbox.style.width='0vw';
        this.lightboxEmbed.style.height='0vh';
        this.lightboxEmbed.style.width='0vw';

    }
}

let jellySHOOT = {


    displayTextCount : 0,

    displayTextCountEasteregg : 0,

    previewImgs : document.querySelectorAll('.previews'),

    previewAbouts : document.querySelectorAll('.aboutpreview'),

    preview1shootable : false,
    preview2shootable : false,
    preview3shootable : false,
    preview4shootable : false,

    previewAboutText : document.querySelectorAll('#followWrapper4 .row'),

    gitlink : document.querySelector('.gitlink'),

    gitlinktext : document.querySelector('.gitlink span'),

    littleAsteroid : document.querySelector('#followWrapper3 .two'),

    littleAsteroidCount : 0,

    mainMoon : document.querySelector('.moon_spin'),

    descrTxt : document.querySelector('.descriptiveText'),

    bulletShot : document.querySelectorAll('.bulletShot'),

    interactiveText : document.querySelectorAll('.keyword'), 

    jellyHome : document.querySelector('#followWrapper'), 

    bullet: document.querySelector('#bullet'),

    // bulletStopper: document.querySelector('.stopBullet'),

    targets: document.querySelectorAll('.targetShot'),

    interactiveLogo : document.querySelector('#mainLogo'),

    ship : document.querySelector('#spaceX'),

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

        div.style.top = `${this.yAxis}px `;

        div.style.left = `${this.xAxis}px `;

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

    aboutmeText(elm){

        // setTimeout(() => {
            
        // }, 10);

        // if(elm.classList.contains("onet")){

        // } else if(elm.classList.contains("twot")){
            
        // } else if(elm.classList.contains("threet")){
            
        // } else if(elm.classList.contains("fourt")){
            
        // }
    },

    shootObj(element,potentialTarget ){
        //resets
        element.style.display='';
        potentialTarget.style.transition='none';
        potentialTarget.style.transform='';
        this.descrTxt.style.transition='none';
        this.descrTxt.style.transform='';

        if(this.shootActive){
            clearInterval(this.shootInt);
        }

        this.shootActive = true;

        let shootnum =0;
        
        this.shootInt = setInterval(()=>{
            let curPos = parseInt(element.style.left);
            let newPos = curPos+8;
            element.style.left = `${newPos}px`;
            shootnum++;
            if(shootnum>150){
                clearInterval(this.shootInt);
                this.bullet.style.display='none';

            }
            // if(this.collisionDetection(element,this.bulletStopper)){
            //     clearInterval(this.shootInt);
            //     element.style.display='none';
            // };

            this.previewAbouts.forEach(prev=>{
                if(this.collisionDetection(element,prev)){
                    prev.style.transition='all ease-out .25s';
                    prev.style.transform='rotateY(180deg)';
                    setTimeout(() => {
                    prev.style.transform='rotateY(0deg)';
                        
                    }, 250);
                };
            })

            if(this.collisionDetection(element, this.gitlink)){
                clearInterval(this.shootInt);
                element.style.display='none';
                this.gitlink.click();
                this.bullet.style.display='none';

            };

            if(this.collisionDetection(element, this.littleAsteroid)){
                clearInterval(this.shootInt);
                element.style.display='none';
                this.littleAsteroid.src="./customPhotos/asteroid2.png";
                if(this.littleAsteroidCount>0){
                    this.littleAsteroid.style.display='none';
                }
                this.littleAsteroidCount++;

            };


            this.targets.forEach(target=>{
                if(this.collisionDetection(element,target)){
                    clearInterval(this.shootInt);
                    target.style.display='none';
                    element.style.display='none';
                };
            })

            if(this.collisionDetection(element,potentialTarget)){
                clearInterval(this.shootInt);
                potentialTarget.style.transition='all ease-out .35s';
                element.style.display='none';
                potentialTarget.style.transform='rotateY(-360deg)';
                this.descrTxt.style.transition='all ease-out .35s';
                this.descrTxt.style.transform='rotateY(-360deg)';
                potentialTarget.style.border = '.25vw solid lime';
                this.descrTxt.style.color='lime';

                switch(this.displayTextCount){
                    case 0:
                        this.descrTxt.innerHTML='Creator <br><br> & <br><br> Innovator';
                        this.displayTextCount++;

                    break;
                    case 1:
                        this.descrTxt.innerHTML='Resolute <br><br> & <br><br> Determined';
                        this.displayTextCount++;
                    break;
                    case 2:
                        this.descrTxt.innerHTML='Designer <br><br> & <br><br> Developer';
                        this.displayTextCount=0;

                        this.memeNumber1();
                    break;
                }

                setTimeout(function(){ 
                    potentialTarget.style.border = '';
                    jellySHOOT.descrTxt.style.color='';

                }, 1000);

            };

            
            this.bulletShot.forEach(shot=>{
                if(this.collisionDetection(element,shot)){
                };
            })




            this.previewImgs.forEach(img=>{
                if(this.collisionDetection(element,img)){
                    clearInterval(this.shootInt);
                    element.style.display='none';

                    if(window.innerWidth<1000){

                    } else {
                        img.style.transform = 'rotateY(180deg)';
                    }

                    setTimeout(function(){

                        if(window.innerWidth<1000){
                            let path1='https://varep.net/newfront';
                            let path2='https://jacobmoya.com/projects/revisedwebsitebackup/index.html';
                            let path3='https://jacobmoya.com/projects/mancalajs/index.html';
                            let path4='https://jacobmoya.com/projects/photodesignsite/index.html';
                            let path5='https://jacobmoya.com/gametime.html';
    
    
                            if(img.classList.contains('wordpress_site')){
                                window.open(path1,"_blank")
                            } else if(img.classList.contains('mach2')){
                                window.open(path2,"_blank")
                            } else if(img.classList.contains('mancala')){
                                window.open(path3,"_blank")
                            } else if(img.classList.contains('photo')){
                                window.open(path4,"_blank")
                            } else{
                                window.open(path5,"_blank")
                            }
                        } else {
                            lightboxObj.displayBox();
                            lightboxObj.growSize();
                            img.style.transform = '';
                            let path1='https://varep.net/newfront';
                            let path2='https://jacobmoya.com/projects/revisedwebsitebackup/index.html';
                            let path3='https://jacobmoya.com/projects/mancalajs/index.html';
                            let path4='https://jacobmoya.com/projects/photodesignsite/index.html';
                            let path5='https://jacobmoya.com/gametime.html';
    
    
                            if(img.classList.contains('wordpress_site')){
                                lightboxObj.lightboxEmbed.src=path1;
                            } else if(img.classList.contains('mach2')){
                                lightboxObj.lightboxEmbed.src=path2;
                            } else if(img.classList.contains('mancala')){
                                lightboxObj.lightboxEmbed.src=path3;
                            } else if(img.classList.contains('photo')){
                                lightboxObj.lightboxEmbed.src=path4;
                            } else{
                                lightboxObj.lightboxEmbed.src=path5;
                            }
                            let allas = document.querySelectorAll('.previews a' );
                            allas.forEach(as=>{
                                as.click();
                            })
                            this.bullet.style.display='none';
                        }
                    },500)
                    

                }

            })


        },1)
    },

}


let counter2 = 0;

// 


document.addEventListener('mouseup', function(e) {
    if (!lightboxObj.lightboxEmbed.contains(e.target)) {
        lightboxObj.closeLightBox();
        lightboxObj.lightboxEmbed.src='null';
    }
  });


window.addEventListener('load',(e)=>{
    jellySHOOT.getAxisXnY(e);
    jellySHOOT.setCursorPosition(jellySHOOT.bullet);
});

jellySHOOT.jellyHome.addEventListener('mousemove',(e)=>{
    jellySHOOT.getAxisXnY(e);
});

jellySHOOT.jellyHome.addEventListener('click',(e)=>{
    jellySHOOT.getAxisXnY(e);
    jellySHOOT.setCursorPosition(jellySHOOT.bullet);

    if(window.innerWidth>1){
        jellySHOOT.shootObj(jellySHOOT.bullet,jellySHOOT.interactiveLogo);



    } else {
        return;
    }
    
    jellySHOOT.bullet.style.display='block';
    jellySHOOT.bullet.style.zIndex='150';


})

jellySHOOT.previewAbouts.forEach(prev=>{
    prev.addEventListener('mouseover',()=>{
            prev.style.transition='all ease-out .25s';
            prev.style.transform='rotateY(180deg)';
            setTimeout(() => {
            prev.style.transform='rotateY(0deg)';
                
            }, 250);
        })
})



 
