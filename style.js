var codeElements = document.querySelectorAll(".codeText");
codeElements.forEach(function (codeText) {
    var processedText = codeText.innerText
        .split('\n')
        .filter(function (line) { return line.trim() !== ''; }) // 空行を除去
        .map(function (line) { return line.trim(); }) // インデントを除去
        .join('<br>'); // 改行を追加
    codeText.innerHTML = processedText;
});
