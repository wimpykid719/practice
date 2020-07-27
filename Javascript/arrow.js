// function timesTwo(i) {
//     return i * 2;
// }

// const timesTwo = function(i){
//     return i * 2;
// }

//アロー関数にすると
// const timesTwo = (i) => {
//     return i * 2;
// }

//引数が一つの場合はこのような書き方も可能
// const timesTwo = i => {
//     return i * 2;
// }

//さらに処理が一行しかない場合はここまで短く記載可能
// const timesTwo = i => i * 2;

// const res = timesTwo(2);
// console.log(res);




//thisのバインドについて
//arrow関数と無名関数は違う挙動をする。

// let normalFn;//オブジェクトの定義

// normalFn = {
//     id: 43, //idというプロパティ
//     counter: function() {
//         console.log(this.id); //43と出力 thisはnormalFnのオブジェクトを参照

//         window.setTimeout(function() {
//             console.log(this.id); 
//             /*
//             undefindと出力 Windowオブジェクを参照
//             windowというオブジェクにidが設定していないために
//             おこる
//             */

//         }, 1000);
//     }
// };


// normalFn = {
//     id: 43, //idというプロパティ
//     counter: function() {
//         console.log(this.id); //43と出力 thisはnormalFnのオブジェクトを参照

//         window.setTimeout(function() {
//             console.log(this.id); 
//             /*
//             thisの中身が違うのでこれを同じものに変更したい場合
//             bindを使用する。call,applyも使用可能
//             */

//         }.bind(this), 1000);
//     }
// };

// normalFn = {
//     id: 43, //idというプロパティ
//     counter: function() {
//         console.log(this.id); //43と出力 thisはnormalFnのオブジェクトを参照
//         let _this = this
//         window.setTimeout(function() {
//             console.log(_this.id); 
//             /*
//             thisの中身が違うのでこれを同じものに変更したい場合
//             bindを使用する。call,applyも使用可能
//             */

//         }.bind(this), 1000);
//     }
// };

//arrow関数で書く事も可能
// normalFn = {
//     id: 43, //idというプロパティ
//     counter: function() {
//         console.log(this.id); //43と出力 thisはnormalFnのオブジェクトを参照

//         //arrow関数を使用するとスコープチェーンという機能で
//         //値が見つからない場合は上の階層に探しに行く
//         //下記の場合はレキシカルスコープにthisが定義されているのでそのままそれを使用する。
//         window.setTimeout(() => {
//             id: 100,
//             console.log(this.id); 
//             /*
//             thisの中身が違うのでこれを同じものに変更したい場合
//             bindを使用する。call,applyも使用可能
//             arrow関数内でthisは定義されない。なので書いて
//             あっても見つからない。
//             */

//         }, 1000);
//     }
// };

// normalFn.counter();

// //arrowなし
// const add = function(a, b) {
//     return a + b;
// }
// //arrowあり functionが消えて =>が追加される
// const add = (a, b) => {
//     return a + b;
// }

// //さらに省略する処理が一行の場合
// const add = (a, b) => a + b;

// add(1, 2);

// //arrowなし
// const double = function(number) {
//     return 2 * number;
// }

// //引数が一の場合はさらに省略することができる
// const double = number => 2 * number;

// double(8);

const numbers = [1, 2, 3];

//arrowなし
numbers.map(function(number) {
    return 2 * number;
});

let result = numbers.map((number) => {
    return 2 * number;
});

//さらに省略
let result = numbers.map(number => 2 * number);


console.log(result);

const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member}は${this.teamName}の所属です。`;

        });
    }
};
team.teamSummary();//teamNameがundefindとなる。
/*
これの理由はコールバック関数が実行される場所が別の世界で実行
されるためthisの中に名前が入ってない。
callback関数内でthisを使用する場合は気を付ける。
*/


//解決策1
const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member}は${this.teamName}の所属です。`;

        }.bind(this));
    }
};

//解決策2
const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function() {
        var self = this;
        return this.members.map(function(member) {
            return `${member}は${self.teamName}の所属です。`;

        });
    }
};

//arrow関数による解決策
/*
arrow関数がlexical（レキシカル）なhtisを使用するから
構文的なthisと訳し書く場所によってthisが決まる。
*/

const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function() {
        //this === team
        return this.members.map((member) => {
            return `${member}は${this.teamName}の所属です。`;

        });
    }
};

//問題でアロー関数に直しただけ
const fibonacci = (n) => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

//問題2
const profile = {
    name: '太郎',
    getName: function() {
        return this.name;
    }
};

