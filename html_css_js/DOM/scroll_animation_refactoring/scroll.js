class ScrollObserver {
    constructor(els, cb, options) {
        //<div class="animate-title"...</div>挟まれた要素まで取得できる。allだから同じ物をリストにして返してくれる。
        //監視したい要素がリストで格納される。
        //elsには.animate-titleの文字列が入る。
        this.els = document.querySelectorAll(els);
        const defaultOptuions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;// text-animationが入ってる。
        // 引数で{once: false}の場合はoneceをfalseに変更する。
        this.options = Object.assign(defaultOptuions, options);
        this.once = this.options.once;
        this._init();
    }
    _init() {
        //このentriesはio.observe(child)、io.observe(child2)...のように監視する対象が複数ある場合にこちらにentriesに格納される。
        // this.elsの所でentriesの内容を作成している。
        //関数だから順番は合ってる。コールバック関数として渡される。
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    // entry.targetはelに値する。
                    // 最初はentry.targetが.animate-titleだった。
                    // const ta = new TextAnimation(entry.target);
                    // ta.animate();
                    //entry.target.classList.add('inview');
                    this.cb(entry.target, true);
                    // this.onceで監視を切って、cbでテキストのアニメーションを切る。
                    if(this.once) {
                        // 監視を停止するには再び分割されるのを回避するため
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                    // console.log('out view');
                    // entry.target.classList.remove('inview');
                }
                
            });
            //alert('intersectiong');
        };
        //callbackは監視要素と交差した時に実行される。callback→cbと関数の中に関数
        this.io = new IntersectionObserver(callback.bind(this), this.options);
        this.io.POLL_INTERVAL = 100;
        // queryselectorAllで取得したdiv要素
        this.els.forEach(el => this.io.observe(el));
    }
    destory() {
        this.io.disconnect();
    }
}