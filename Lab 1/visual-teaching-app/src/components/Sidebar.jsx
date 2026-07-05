import { 
    FileText, 
    Code2, 
    PlayCircle, 
    Cpu, 
    GraduationCap,
    BookOpen,
    Terminal,
    Network
  } from 'lucide-react';
  
  export default function Sidebar({ activeTab, setActiveTab }) {
    const navItems = [
      { id: 'theory', label: 'Theory & Basics', icon: BookOpen },
      { id: 'pipeline', label: 'How To Compile', icon: Terminal },
      { id: 'lexer', label: 'Lexer (lexer.l)', icon: Code2 },
      { id: 'parser', label: 'Parser (parser.y)', icon: Code2 },
      { id: 'header', label: 'Header (symbol_info.h)', icon: Cpu },
      { id: 'script', label: 'Runner (script.sh)', icon: Terminal },
      { id: 'input', label: 'Input Visualizer', icon: FileText },
      { id: 'walkthrough', label: 'Stack Animation', icon: PlayCircle },
      { id: 'ast', label: 'Syntax Tree Explorer', icon: Network },
      { id: 'flashcards', label: 'Viva Flashcards', icon: GraduationCap }
    ];
  
    return (
      <aside className="sidebar">
        <div className="logo" style={{ fontSize: '1.2rem' }}>
          <GraduationCap size={28} />
          CSE 420 Lab 1 Guide
        </div>
        
        <nav className="nav-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={20} /> {item.label}
              </div>
            );
          })}
        </nav>
      </aside>
    );
  }
