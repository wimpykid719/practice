//Intersectionは交差、Observerは監視する物。

const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('inview');
            // 監視を停止するには
            //observer.unobserve(entry.target);
            entry.target.classList.add('inview');
        } else {
            console.log('out view');
            entry.target.classList.remove('inview');
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
    rootMargin: "-300px 0px -300px 0px",
    //交差する部分の位置を設定できる。内側が0で外側が10.5で真ん中でも動作可能にする。
    threshold: [0, 0.5, 1]

}

const io = new IntersectionObserver(cb, options);
//登録要素が画面に入ってくるときと、出ていくときに呼ばれる。
io.observe(child);
// io.observe(child1);
// io.observe(child2);