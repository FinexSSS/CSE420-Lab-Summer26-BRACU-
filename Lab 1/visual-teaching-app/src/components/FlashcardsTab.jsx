import { useState } from 'react';
import { flashcardsData } from '../data/flashcardsData';

function Flashcard({ q, a }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <h3>{q}</h3>
        </div>
        <div className="card-back">
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FlashcardsTab() {
  return (
    <div className="tab-pane active" style={{ overflowY: 'auto' }}>
      <div className="header" style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(30, 41, 59, 0.95)' }}>
        <h1>Ultimate Viva Flashcards</h1>
        <p>30+ questions covering theory, code internals, and tricky edge cases.</p>
      </div>
      
      <div style={{ padding: '0 40px 40px' }}>
        {flashcardsData.map((section, idx) => (
          <div key={idx} style={{ marginTop: '40px' }}>
            <h2 style={{ color: 'var(--accent)', borderBottom: '2px solid var(--border)', paddingBottom: '10px', marginBottom: '20px' }}>
              {section.category}
            </h2>
            <div className="flashcards-grid" style={{ padding: '0' }}>
              {section.questions.map((card, i) => (
                <Flashcard key={i} q={card.q} a={card.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
