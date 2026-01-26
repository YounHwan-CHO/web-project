import React, { useState, useEffect } from 'react';

function Quotes() {
  const quotes = [
    "“당신의 목적지가 어디든, 그곳으로 가는 길은 당신 자신이 만드는 것이다.”",
    "“책은 우리 내면의 얼어붙은 바다를 깨는 도끼여야 한다.”",
    "“올바른 길은 평평한 줄 위를 걷는 것과 같다.”",
    "“인간에게는 두 가지 죄악이 있다. 하나는 조급함이고, 다른 하나는 게으름이다.”"
  ]; // 네가 좋아하는 카프카의 철학을 담았어! 스컬.

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // 랜덤으로 명언 하나 선택 (스컬!)
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <section id="quotes" style={{ backgroundColor: '#1a1a1a', padding: '60px 20px', textAlign: 'center' }}>
      <h3 style={{ color: '#61dafb', marginBottom: '20px' }}>Franz Kafka Quotes</h3>
      <p style={{ fontSize: '1.4rem', fontStyle: 'italic', lineHeight: '1.6', color: '#eee' }}>
        {quote}
      </p>
      <p style={{ marginTop: '10px', color: '#888' }}>- 프란츠 카프카 -</p>
    </section>
  );
}

export default Quotes;