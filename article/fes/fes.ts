let waitTime1Count = 0;
let waitTime2Count = 0;

// HTML要素を取得
const waitTime1 = document.getElementById("waitTime1");
const waitTime2 = document.getElementById("waitTime2");

// waitTime1を更新する関数
function updateWaitTime1() {
    if (waitTime1) {
        waitTime1.textContent = waitTime1Count.toString();
    }
}

// waitTime2を更新する関数
function updateWaitTime2() {
    if (waitTime2) {
        waitTime2.textContent = waitTime2Count.toString();
    }
}

// ページの切り替え処理
function togglePage() {
    const currentPath = window.location.pathname;
    if (currentPath.endsWith("fes1.html")) {
        window.location.href = "fes2.html";
    } else {
        window.location.href = "fes1.html";
    }
}

// キー入力のイベントリスナー
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
        case "W":
            waitTime1Count += 2;
            updateWaitTime1();
            break;
        case "s":
        case "S":
            waitTime1Count = Math.max(0, waitTime1Count - 2); // 減らすが0未満にはしない
            updateWaitTime1();
            break;
        case "e":
        case "E":
            waitTime2Count += 2;
            updateWaitTime2();
            break;
        case "d":
        case "D":
            waitTime2Count = Math.max(0, waitTime2Count - 2); // 減らすが0未満にはしない
            updateWaitTime2();
            break;
        case "n":
        case "N":
            togglePage();
            break;
    }
});
