let lightboxObj = {

    lightbox:document.querySelector('.lightbox'),
    lightboxEmbed:document.querySelector('.lightbox embed'),

    triggers:document.querySelectorAll('.previews'),

    displayBox(){
        this.lightbox.style.display='block';
    },

    growSize(){
        this.lightbox.style.opacity='1';
        this.lightbox.style.height='1000vh';
        this.lightbox.style.width='1000vw';
        this.lightboxEmbed.style.height='95vh';
        this.lightboxEmbed.style.width='95vw';

    }

}