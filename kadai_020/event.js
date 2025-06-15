// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// 置き換えるtextというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// btn要素にクリックイベントを追加する
btn.addEventListener('click', () => {
    // h2要素のテキスト内容を変更する
    text.textContent = 'ボタンをクリックしました';
    
});