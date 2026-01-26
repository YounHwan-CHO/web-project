import React, { useState, useEffect } from 'react';

function Goals() {
  const goalCount = 70; // 2026년 목표
  const currentCount = 7; // 현재까지 읽은 권수
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const percentage = Math.round((currentCount / goalCount) * 100);
    const timer = setTimeout(() => setWidth(percentage), 500);
    return () => clearTimeout(timer);
  }, [currentCount, goalCount]);

  return (
    <section id="goals">
      <h2>🎯 2026 Reading Goal</h2>
      <p>성장을 위해 매달 꾸준히 읽어 <strong>연간 {goalCount}권</strong> 독서를 달성하겠습니다.</p>
      
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${width}%` }}>
          {width}%
        </div>
      </div>
      <p>현재까지 <strong>{currentCount}권</strong> 읽었습니다! (목표까지 {goalCount - currentCount}권) 스컬.</p>
    </section>
  );
}

export default Goals;