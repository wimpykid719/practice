class TextAnimation {
    constructor(el) {
        //elには<div class...が入ってる
        this.DOM = {};
        // 順番おかしい気がする。 分割された値が出てくる。
        
        // const test = String(document.querySelector(el).outerHTML);
        // console.log(test);


        // if(el instanceof HTMLElement) {
        //     this.DOM.el = el;
        // } else {
        //     // 一応年のためにセレクターの文字列の場合'.animate-title'エレメントを取得する動作をする。
        //     this.DOM.el = document.querySelector(el);
        // }
    
        // 上記の条件式と同じ意味
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);


        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            // console.log(acc);
            /* 
            querySelectorだと要素の最初しか取得されずHTMLに
            分割をかける事になる<span class="char"><</span><span class="char">s</span>...
            このように<span>タグが分割されていく。
            */
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }
    
    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            });
        });
    }
}
