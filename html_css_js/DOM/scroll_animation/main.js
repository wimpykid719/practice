document.addEventListener('DOMContentLoaded', function () {
//Intersectionは交差、Observerは監視する物。
    //<div class="animate-title"...</div>挟まれた要素まで取得できる。allだから同じ物をリストにして返してくれる。
    //監視したい要素がリストで格納される。
    const els = document.querySelectorAll('.animate-title');
    //このentriesはio.observe(child)、io.observe(child2)...のように監視する対象が複数ある場合にこちらにentriesに格納される。
    //関数だから順番は合ってる。コールバック関数として渡される。
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // entry.targetはelに値する。
                // 最初はentry.targetが.animate-titleだった。
                const ta = new TextAnimation(entry.target);
                ta.animate();
                //entry.target.classList.add('inview');
                // 監視を停止するには
                observer.unobserve(entry.target);
                
            } else {
                // console.log('out view');
                // entry.target.classList.remove('inview');
            }
            
        });
        //alert('intersectiong');
    }

    const options = {
        //交差対象にしたい親の要素を設定する事ができる。
        //今は画面に入るか入らないかだけど、それをタグないに入るかどうかで設定できる？
        root: null,
        //上から300pxの所で交差するように設定できる。
        //左右にも値を設定すると交差してない事になる。pxか%を付けないないとエラーになる。
        //              上    右  下   左
        rootMargin: "0px",
        //交差する部分の位置を設定できる。内側が0で外側が10.5で真ん中でも動作可能にする。
        threshold: 0

    }

    const io = new IntersectionObserver(cb, options);
    // queryselectorAllで取得したdiv要素
    els.forEach(el => io.observe(el));
});
//登録要素が画面に入ってくるときと、出ていくときに呼ばれる。
// io.observe(child);
// io.observe(child1);
// io.observe(child2);

// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割をしましょう。
// class TextAnimation {
//     constructor(el) {
//         this.DOM = {};
//         this.DOM.el = document.querySelector(el);
//         this.chars = this.DOM.el.innerHTML.trim().split("");
//         this.DOM.el.innerHTML = this._splitText();
//     }
//     _splitText() {
//         return this.chars.reduce((acc, curr) => {
//             curr = curr.replace(/\s+/, '&nbsp;');
//             return `${acc}<span class="char">${curr}</span>`;
//         }, "");
//     }
//     animate() {
//         this.DOM.el.classList.toggle('inview');
//     }
// }
// class TweenTextAnimation extends TextAnimation {
//     constructor(el) {
//         super(el);
//         this.DOM.chars = this.DOM.el.querySelectorAll('.char');
//     }
    
//     animate() {
//         this.DOM.el.classList.add('inview');
//         this.DOM.chars.forEach((c, i) => {
//             TweenMax.to(c, .6, {
//                 ease: Back.easeOut,
//                 delay: i * .05,
//                 startAt: { y: '-50%', opacity: 0},
//                 y: '0%',
//                 opacity: 1
//             });
//         });
//     }
// }
