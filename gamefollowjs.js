let jellyFoll2 = {

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


    },



    clearCursorPosition(div){

        div.style.top = ``;


    },


    // triggerFall(elm){
    //     elm
    // }


}


let counter = 0;


jellyFoll2.jellyHome.addEventListener('mousemove',(e)=>{
    jellyFoll2.getAxisXnY(e);
    jellyFoll2.jellys.style.transition='' ; 

    jellyFoll2.flames.forEach(flame=>{
        flame.style.transition='' ; 
        if(window.innerWidth>1){
            jellyFoll2.setCursorPosition(flame);
        } else {
            return;
        }
    })

    if(window.innerWidth>1){
        jellyFoll2.setCursorPosition(jellyFoll2.jellys);
    } else {
        return;
    }
    
    // earth just in case needed for future reference
    jellyFoll2.jellys.style.width = '';
    jellyFoll2.jellys.style.transition = '';
})

jellyFoll2.jellyHome.addEventListener('click',(e)=>{
    jellyFoll2.getAxisXnY(e);
    jellyFoll2.jellys.style.transition='' ; 

    jellyFoll2.flames.forEach(flame=>{
        flame.style.transition='' ; 
        if(window.innerWidth>1){
            jellyFoll2.setCursorPosition(flame);
        } else {
            return;
        }
    })

    if(window.innerWidth>1){
        jellyFoll2.setCursorPosition(jellyFoll2.jellys);
    } else {
        return;
    }
    
    // earth just in case needed for future reference
    jellyFoll2.jellys.style.width = '';
    jellyFoll2.jellys.style.transition = '';
})


jellyFoll2.jellyHome.addEventListener('mouseleave',(e)=>{

    if(window.innerWidth>1){
        jellyFoll2.clearCursorPosition(jellyFoll2.jellys);
        jellyFoll2.jellys.style.transition='all ease 10s' ; 

    }

    jellyFoll2.flames.forEach(flame=>{
        flame.style.transition='all ease 10s' ; 
        if(window.innerWidth>1){
            jellyFoll2.clearCursorPosition(flame);
        } else {
            return;
        }
    })

})

