import { 
    Code2, 
    FileText, 
    GitBranch, 
    PlayCircle, 
    Cpu, 
    GraduationCap,
    BookOpen
  } from 'lucide-react';
  
  export default function Sidebar({ activeTab, setActiveTab }) {
    const navItems = [
      { id: 'theory', label: 'Theory & Basics', icon: BookOpen },
      { id: 'lexer', label: 'Lexer (.l)', icon: FileText },
      { id: 'parser', label: 'Parser (.y)', icon: GitBranch },
      { id: 'walkthrough', label: 'Stack Walkthrough', icon: PlayCircle },
      { id: 'pipeline', label: 'Pipeline', icon: Cpu },
      { id: 'viva', label: 'Viva Flashcards', icon: GraduationCap },
    ];
  
    return (
      <aside className="sidebar">
        <div className="logo">
          <Code2 size={24} />
          <span>Compiler Lab</span>
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
  
