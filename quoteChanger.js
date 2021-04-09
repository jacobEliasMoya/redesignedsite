let quoteChange = {

    txtNode : document.querySelector('.quotetxt'),
    quoteNode : document.querySelector('.quoteAuth'),

    quoteText : ['"<span style=`color:lime !important`>Do</span> or do not, there is no <span style=`color:lime !important`>try</span>."','"<span style=`color:lime !important`>Everything</span> worth doing, <span style=`color:lime !important`>is worth overdoing</span>."','"<span style=`color:lime !important`>You</span> must be the <span style=`color:lime !important`>change</span> you wish to see in <span style=`color:lime !important`>the world</span>."','"Keep away from people who <span style=`color:lime !important`>be</span>little <span style=`color:lime !important`>your</span> <span style=`color:lime !important`>ambitions</span>."','"The universe has <span style=`color:lime !important`>no restrictions.</span>"','"I am <span style=`color:lime !important`>always</span> doing that which I cannot do, in order that I may <span style=`color:lime !important`>learn</span>."','"Your <span style=`color:lime !important`>time is limited,</span> so <span style=`color:lime !important`>dont waste it</span> living someone elses life."','"Act as if what <span style=`color:lime !important`>you</span> do <span style=`color:lime !important`>make</span>s<span style=`color:lime !important`> a difference</span>. It does."','"<span style=`color:lime !important`>Hmmmmm</span>..."'],
    quoteAuth : ['- Yoda','- Philip Stanhope','- Ghandi','– Mark Twain','- Deepak Chopra','- Pablo Picasso','- Steve Jobs','- William James','- everyone'],
    
    changer(){
        let randomNum = Math.floor(Math.random()*9 )
        //need to set the inner html(x) of both nodes(x) to the same index(x) between 2 arrays(x)
        this.txtNode.innerHTML = this.quoteText[randomNum];
        this.quoteNode.innerHTML = this.quoteAuth[randomNum];

    }

}

quoteChange.changer();
