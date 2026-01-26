import React, { useState, useEffect } from 'react';

function Home() {
  const text = "성실함으로 성과를 증명하는 IT 매니저, 조윤환입니다.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <section id="home" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#61dafb' }}>{displayText}</h1>
      <p style={{ fontSize: '1.5rem', color: '#aaa' }}>글로벌 역량(TOEIC 875)과 교육 운영 전문성을 갖췄습니다. 스컬.</p>
    </section>
  );
}

export default Home;