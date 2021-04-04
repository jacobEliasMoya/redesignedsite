let quoteChange = {

    txtNode : document.querySelector('.quotetxt'),
    quoteNode : document.querySelector('.quoteAuth'),

    quoteText : ['"<span class="purple keyword">Do</span> or do not, there is no <span class="purple keyword">try</span>."','"<span class="purple keyword">Everything</span> worth doing, <span class="purple keyword">is worth overdoing</span>."','"<span class="purple keyword">You</span> must be the <span class="purple keyword">change</span> you wish to see in <span class="purple keyword">the world</span>."','"Keep away from people who <span class="purple keyword">be</span>little <span class="purple keyword">your</span> <span class="purple keyword">ambitions</span>."','"The universe has <span class="purple keyword">no restrictions.</span>"','"I am <span class="purple keyword">always</span> doing that which I cannot do, in order that I may <span class="purple keyword">learn</span>."','"Your <span class="purple keyword">time is limited,</span> so <span class="purple keyword">dont waste it</span> living someone elses life."','"Act as if what <span class="purple keyword">you</span> do <span class="purple keyword">make</span>s<span class="purple keyword"> a difference</span>. It does."','"<span class="purple keyword">Hmmmmm</span>..."'],
    quoteAuth : ['- Yoda','- Philip Stanhope','- Ghandi','– Mark Twain','- Deepak Chopra','- Pablo Picasso','- Steve Jobs','- William James','- everyone'],
    
    changer(){
        let randomNum = Math.floor(Math.random()*9 )
        //need to set the inner html(x) of both nodes(x) to the same index(x) between 2 arrays(x)
        this.txtNode.innerHTML = this.quoteText[randomNum];
        this.quoteNode.innerHTML = this.quoteAuth[randomNum];

    }

}

quoteChange.changer();
