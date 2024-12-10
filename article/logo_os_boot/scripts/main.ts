// 各要素を取得
const logo = document.getElementById('logo')!;




const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

// 画像を不透明にする処理
async function logoAppear () {
    for (let i:number = 0; i < 100; i++) {
        let opacity_level = i / 100;
        console.log(opacity_level);
        await sleep(100);
        logo.style.opacity = String(opacity_level);
     }
  console.log("ロゴが表示されました");
};

// ページが完全に読み込まれた後に実行
window.addEventListener('load', () => {
  setTimeout(logoAppear, 0);
});
