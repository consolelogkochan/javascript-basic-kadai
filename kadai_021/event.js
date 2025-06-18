// btnというidを持つTHML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
    setTimeout(() => {
        // text要素の内容を変更する
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});