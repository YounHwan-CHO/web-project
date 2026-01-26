import React, { useState } from 'react';

function Intro() {
  const [activeTab, setActiveTab] = useState('growth');

  const content = {
    growth: `프란츠 카프카는 "책은 우리 내면의 얼어붙은 바다를 깨는 도끼여야 한다"고 말했습니다. 저는 이 철학을 삶의 이정표로 삼아 매 순간 스스로를 경계하며 성장을 멈추지 않는 삶을 지향해 왔습니다. 그 구체적인 실천으로 매년 70권의 독서라는 도전적인 목표를 설정하고, 바쁜 업무 속에서도 꾸준히 지식의 깊이를 더하며 통찰력을 기르고 있습니다. 이러한 성실함은 단순한 지식 습득에 그치지 않고, 복잡한 문제 상황에서도 당황하지 않고 본질적인 해결책을 찾아내는 밑거름이 되었습니다. 또한, 군포에 내 집 마련을 이루는 과정에서 보여준 철저한 계획성과 추진력은 제가 결심한 목표를 반드시 현실로 만들어내는 사람임을 증명하는 사례입니다. 저는 이러한 자기 주도적 성장 경험을 바탕으로, 교육 현장에서도 수강생들에게 단순히 지식을 전달하는 것을 넘어 스스로 성장하는 법을 깨닫게 돕는 조력자가 되고자 노력해 왔습니다. 스컬.`,
    
    strength: `현재 IT 아카데미에서 관리직으로 근무하며 개발 및 클라우드 교육 과정을 총괄 운영하고 있습니다. 저의 가장 큰 강점은 교육 현장의 다양한 변수를 조율하며 얻은 탁월한 문제 해결 능력입니다. 특히 TOEIC 875점이라는 글로벌 어학 역량은 저를 다른 매니저들과 차별화하는 핵심 무기입니다. 이를 통해 글로벌 기술 트렌드를 실시간으로 모니터링하고, AWS나 React 같은 최신 기술 문서를 직접 습득하여 교육 과정의 퀄리티를 고도화하는 데 기여하고 있습니다. 수강생들이 취업 시장에서 겪는 '답답함'을 누구보다 깊이 공감하기에, 저는 단순한 행정 관리를 넘어 기술적 이해도와 어학 능력을 결합한 맞춤형 상담을 제공합니다. 실무 현장에서 수강생과 기업 사이의 가교 역할을 수행하며 쌓아온 소통 능력은, 어떤 복잡한 비즈니스 환경에서도 조직의 목표를 달성하는 데 큰 힘이 될 것입니다. 스컬.`,
    
    goal: `현장에서 수강생들의 취업을 돕고 교육 퀄리티를 관리하며, 저는 IT 생태계의 성장이 결국 '사람'의 성장에서 시작된다는 것을 깊이 체감했습니다. 하지만 급변하는 기술 환경 속에서 교육 운영에 한계를 느끼며 답답함을 경험하기도 했습니다. 저는 이러한 한계를 혁신의 기회로 삼아, 보다 고도화되고 체계적인 교육 시스템을 구축하고자 본 포지션에 지원하게 되었습니다. 입사 후에는 제가 가진 기술적 이해도와 인문학적 소양을 결합하여, 수강생들이 단순한 지식 습득을 넘어 현업에서 즉시 활약할 수 있는 인재로 거듭나도록 돕는 최고의 커리어 파트너가 되겠습니다. 성실함으로 성과를 증명하는 매니저로서, 조직의 비전을 교육 현장에 투영하고 구성원 모두가 함께 성장하는 시너지를 창출하는 데 저의 모든 역량을 쏟겠습니다. 조윤환이라는 이름이 신뢰와 성장의 대명사가 될 수 있도록 끊임없이 정진하겠습니다. 스컬.`
  };

  return (
    <section id="intro">
      <h2>Professional Persona</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
        {['growth', 'strength', 'goal'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)} 
            style={tabStyle(activeTab === tab)}
          >
            {tab === 'growth' ? '성장과정' : tab === 'strength' ? '직무강점' : '지원동기'}
          </button>
        ))}
      </div>
      <div style={{ 
        padding: '40px', 
        backgroundColor: '#1e1e1e', 
        borderRadius: '20px', 
        minHeight: '300px', 
        lineHeight: '2', // 줄간격을 넓혀서 읽기 편하게!
        fontSize: '1.1rem',
        textAlign: 'left',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        <p style={{ whiteSpace: 'pre-wrap' }}>{content[activeTab]}</p>
      </div>
    </section>
  );
}

const tabStyle = (isActive) => ({
  padding: '12px 25px',
  backgroundColor: isActive ? '#61dafb' : 'transparent',
  color: isActive ? '#000' : '#61dafb',
  border: '2px solid #61dafb',
  borderRadius: '30px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.3s'
});

export default Intro;