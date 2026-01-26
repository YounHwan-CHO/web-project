import React from 'react';

function BookList() {
  const books = [
    { title: "변신", author: "프란츠 카프카", status: "완독", rating: "⭐⭐⭐⭐⭐" },
    { title: "심판", author: "프란츠 카프카", status: "읽는 중", rating: "⭐⭐⭐⭐" },
    { title: "클라우드 기초", author: "IT 전문가", status: "완독", rating: "⭐⭐⭐⭐⭐" }
  ]; // 네가 좋아하는 카프카 소설과 업무 관련 서적 예시야! 스컬.

  return (
    <section id="books">
      <h2>📖 My Reading List</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {books.map((book, index) => (
          <div key={index} style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '15px', border: '1px solid #333' }}>
            <h3 style={{ color: '#61dafb' }}>{book.title}</h3>
            <p>{book.author}</p>
            <span style={{ fontSize: '0.9rem', color: book.status === "완독" ? "#4facfe" : "#ffcc00" }}>{book.status}</span>
            <div style={{ marginTop: '10px' }}>{book.rating}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookList;