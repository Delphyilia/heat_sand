function createRandomMessage(text: string, count: number): void {
    const body = document.body;
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    for (let i = 0; i < count; i++) {
      const message = document.createElement("div");
      message.textContent = text;
      message.className = "message";
  
      // ランダムな位置を計算
      const x = Math.random() * (width - 100); // 100は要素の幅を考慮
      const y = Math.random() * (height - 30); // 30は要素の高さを考慮
  
      message.style.left = `${x}px`;
      message.style.top = `${y}px`;
  
      body.appendChild(message);
    }
  }
  
  // ページロード時に実行
  window.onload = () => {
    createRandomMessage("テストお疲れ様", 3);
  };
  