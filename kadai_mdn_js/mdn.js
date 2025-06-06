// 現在の西暦年月日を文字列として取得
const getFormattedDate = () => {
    // Dateオブジェクトを使用して現在の日付を取得
    const date = new Date();
    // 年、月、日をそれぞれ取得し、2桁の文字列にフォーマット それぞれdateから読み取る
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    // フォーマットされた文字列を返す
    return `${year}年${month}月${day}日`;
}
// 現在の西暦年月日を取得して表示
console.log(getFormattedDate());
