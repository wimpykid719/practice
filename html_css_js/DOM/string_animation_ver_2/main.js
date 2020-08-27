document.addEventListener('DOMContentLoaded', function () {
    const ta = new TweenTextAnimation2('.tween-animate-title');
    ta.animate();
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        // クラスtween-animate-titleを取得する。
        this.DOM.el = document.querySelector(el);
        // tween-animate-titleの子要素を取得する。今回の場合は文字列が取得される。
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        //最初のreturnは普通に値を返すのもで二番目はreduce関数に対して値を返している。
        // currに分割された一文字、aacこれまでの合計された値が入ってる。
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}

class TweenTextAnimation2 extends TextAnimation {
    constructor(el) {
        // 親クラスのコンストラクタを呼び出したい場合はsuper()を使用する。
        super(el);
        //クラスtween-animate-title内にinnerHTMLでクラス<span class="char">...のタグを追加したのでそれをDOM.charsに代入する。
        this.DOM.chars = this.DOM.el.querySelectorAll('.char')
    }
    //継承したメソッドの内容を書き換えたい場合はオーバライドする事で変更できる。
    animate() {
        // tween-animate-titleにinviewのクラスを追加する。
        this.DOM.el.classList.add('inview');
        // 一タグずつ取り出してアニメーションをかけていく、iはインデックス番号でループするたびに増える。
        this.DOM.chars.forEach((c, i) => {
            console.log(c);
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: {y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            })
            
        });
        console.log('fdsafdsa')
    }
}