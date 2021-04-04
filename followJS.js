let jellyFoll = {

    jellyHome : document.querySelector('#followWrapper'), 

    jellys : document.querySelector('#spaceX'),
    flames : document.querySelectorAll('#flame'),
    flag : document.querySelector('.flagDrop'),
    moon : document.querySelector('.moon'),
    mars : document.querySelector('.mars'),
    earth: document.querySelector('.world'),
    // Greenland refrence 
    earthDestroyers : document.querySelectorAll('.asteroids'),


    xAxis:undefined,

    yAxis:undefined,

    outSideDistance: undefined,


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

        div.style.top = `${this.yAxis-55}px `;

        div.style.left = `${this.xAxis-125}px`;

    },



    clearCursorPosition(div){

        div.style.top = ``;

        div.style.left = ``;

    },


    // triggerFall(elm){
    //     elm
    // }


}


let counter = 0;


jellyFoll.jellyHome.addEventListener('mousemove',(e)=>{
    jellyFoll.getAxisXnY(e);
    jellyFoll.jellys.style.transition='' ; 

    jellyFoll.flames.forEach(flame=>{
        flame.style.transition='' ; 
        if(window.innerWidth>1){
            jellyFoll.setCursorPosition(flame);
        } else {
            return;
        }
    })

    if(window.innerWidth>1){
        jellyFoll.setCursorPosition(jellyFoll.jellys);
    } else {
        return;
    }
    
    // earth just in case needed for future reference
    jellyFoll.jellys.style.width = '';
    jellyFoll.jellys.style.transition = '';
})

jellyFoll.jellyHome.addEventListener('click',(e)=>{
    jellyFoll.getAxisXnY(e);
    jellyFoll.jellys.style.transition='' ; 

    jellyFoll.flames.forEach(flame=>{
        flame.style.transition='' ; 
        if(window.innerWidth>1){
            jellyFoll.setCursorPosition(flame);
        } else {
            return;
        }
    })

    if(window.innerWidth>1){
        jellyFoll.setCursorPosition(jellyFoll.jellys);
    } else {
        return;
    }
    
    // earth just in case needed for future reference
    jellyFoll.jellys.style.width = '';
    jellyFoll.jellys.style.transition = '';
})


jellyFoll.jellyHome.addEventListener('mouseleave',(e)=>{

    if(window.innerWidth>1){
        jellyFoll.clearCursorPosition(jellyFoll.jellys);
        jellyFoll.jellys.style.transition='all ease 10s' ; 

    }

    jellyFoll.flames.forEach(flame=>{
        flame.style.transition='all ease 10s' ; 
        if(window.innerWidth>1){
            jellyFoll.clearCursorPosition(flame);
        } else {
            return;
        }
    })

})

