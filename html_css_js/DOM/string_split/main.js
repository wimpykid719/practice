// document.addEventListener('DOMContentLoaded', function() {
//     const el = document.querySelector('.animate-title');
//     const str = el.innerHTML.trim();
//     let concatStr = '';

//     for(let c of str) {
//         c = c.replace(/\s+/, '&nbsp;');
//         concatStr += `<span class="char">${c}</span>`;
//     }

//     el.innerHTML = concatStr;
// })

//reduceで書き直す
// document.addEventListener('DOMContentLoaded', function() {
//     const el = document.querySelector('.animate-title');
//     const str = el.innerHTML.trim().split("");
    
//     // let concatStr = '';

//     // for(let c of str) {
//     //     c = c.replace(/\s+/, '&nbsp;');
//     //     concatStr += `<span class="char">${c}</span>`;
//     // }

//     el.innerHTML = str.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
// });

//classで書いていきましょう。
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    btn.addEventListener('click', ta.animate.bind(ta));
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);
})

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    //_メソッドの先頭にあるアンダースコアの意味はこのメソッドの中身を触って欲しくない意味だと思われる。
    //違ったこれはクラス内でのみ使用して下さいという意味でした。インスタンス化した後に外から使用しないで
    //コンストラクタ内などで使用を推奨する。名前はプライベートメソッド、アンダースコアがないのもに関しては
    //パブリックメソッドこれは普通によくみるやつ
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}

class TextAnimation2 extends TextAnimation {
    constructor(el) {
        // 親クラスのコンストラクタを呼び出したい場合はsuper()を使用する。
        super(el);
        this.el2 = 'hello';
        // this.el = document.querySelector(el);
        // this.chars = this.el.innerHTML.trim().split("");
        // this.el.innerHTML = this._splitText();
    }
    //継承したメソッドの内容を書き換えたい場合はオーバライドする事で変更できる。
    animate() {
        console.log('fdsafdsa')
    }
}