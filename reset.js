let reseter = {
    resetButton : document.querySelector('.mainUL .reset'),
    resetGame(){
        location.reload();
    }
}

reseter.resetButton.addEventListener('click',()=>{
    reseter.resetGame();
})