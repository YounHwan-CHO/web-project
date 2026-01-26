function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("메시지가 전송되었습니다! (실제 전송 기능은 서버가 필요해요. 스컬.)");
  };

  return (
    <section id="contact">
      <h2>📩 Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '0 auto' }}>
        <input type="text" placeholder="성함" style={{ padding: '10px', borderRadius: '5px', border: 'none' }} required />
        <input type="email" placeholder="이메일" style={{ padding: '10px', borderRadius: '5px', border: 'none' }} required />
        <textarea placeholder="메시지를 입력하세요" style={{ padding: '10px', borderRadius: '5px', border: 'none', height: '100px' }} required></textarea>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#61dafb', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          보내기 스컬!
        </button>
      </form>
    </section>
  );
}

export default Contact;