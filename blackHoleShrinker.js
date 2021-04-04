let blackholeshrink ={

    verbage:document.querySelector('body h1'),
    verbage2:document.querySelector('body h3'),

    shrinkText(){
        this.verbage.classList.add("smallFont");
        this.verbage2.classList.add("smallFont");
    }
}

window.addEventListener('load',()=>{
    blackholeshrink.shrinkText();
})