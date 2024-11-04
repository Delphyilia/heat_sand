const codeElements = document.querySelectorAll<HTMLElement>(".code__Text");

codeElements.forEach((codeText) =>{
    const processedText = codeText.innerText
        .split('\n')
        .filter(line => line.trim() !== '')  // 空行を除去
        .map(line => line.trim())  // インデントを除去
        .join('<br>');  // 改行を追加

    codeText.innerHTML = processedText;
    console.log(processedText)
});
