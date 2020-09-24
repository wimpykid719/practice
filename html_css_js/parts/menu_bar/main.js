class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        console.log(this.DOM.btn);
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        //スマホで見る場合このプロパティが存在する事になる    True        False
        return window.ontouchstart ? 'touchstart' : 'click';
    }
    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    // 分けたのは後でaddEventListerを複数登録する予定のため
    _addEvent() {
        // thisを束縛しないとaddEventListerが取得される。ためMobileMenu内の関数なので束縛が必要
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

new MobileMenu();