function Skills() {
  const skills = ["AWS Cloud", "Java", "Python", "React", "Docker", "English (TOEIC 875)"];
  
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {skills.map(skill => (
          <span key={skill} style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            borderRadius: '30px',
            color: '#61dafb',
            border: '1px solid #61dafb',
            fontWeight: 'bold'
          }}>
            {skill}
          </span>
        ))}
      </div>
      <p style={{ marginTop: '20px' }}>IT 교육 과정 운영 및 인재 양성에 필요한 기술 역량을 보유하고 있습니다.</p>
    </section>
  );
}

export default Skills;