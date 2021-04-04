let bubbleFacts = {

    bText:document.querySelector('.creativePiece.prev'),

    bs: document.querySelectorAll('.aboutpreview'),

    b1Text: 'I am a family man! I love to play with my kids and get outside with them to enjoy the beauty in life! My kids are my everything! ',
    b2Text: 'I love music, I have been playing guitar for over a decade! It is and always has been the best creative outlet for me!',
    b3Text: 'I love all types of technology, and using technology to create my code. To me, technology is a means for creativity!',
    b4Text: 'I love to spend some quality time with my family, and fishing is a fun when we go! There really is nothing like fishing time!',
    
    resetHTML(element){
        element.innerHTML = this.oText;
    },

    assignText(element){

        if(window.innerWidth<1000){
            this.bText.style.color='';
                    if(element.classList.contains("onet")){
                this.bText.innerHTML=this.b1Text;
            } else if(element.classList.contains("twot")){
                this.bText.innerHTML=this.b2Text;
            } else if(element.classList.contains("threet")){
                this.bText.innerHTML=this.b3Text;
            } else if(element.classList.contains("fourt")){
                this.bText.innerHTML=this.b4Text;
            }   
    
        } else {
            this.bText.style.transition='all ease-out .5s';
            this.bText.style.transform='rotateX(180deg)';
            this.bText.style.width='rotateX(180deg)';
            this.bText.style.color='rgba(128, 0, 128, 0)';
    
    
            setTimeout(() => {
                this.bText.style.transform='rotateX(0deg)';
            this.bText.style.color='';
                    if(element.classList.contains("onet")){
                this.bText.innerHTML=this.b1Text;
            } else if(element.classList.contains("twot")){
                this.bText.innerHTML=this.b2Text;
            } else if(element.classList.contains("threet")){
                this.bText.innerHTML=this.b3Text;
            } else if(element.classList.contains("fourt")){
                this.bText.innerHTML=this.b4Text;
            }   
                
            }, 500);
    
    
        }

    }
}

bubbleFacts.bs.forEach(prev=>{
    prev.addEventListener('mouseover',()=>{
        bubbleFacts.assignText(prev);
    })
})
// // window.addEventListener('load',()=>{
//     bubbleFacts.bs.forEach(prev=>{
//     bubbleFacts.assignText(prev);
//     })
// })