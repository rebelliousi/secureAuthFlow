import { useContext } from "react";
import { AuthContext } from "../context/AuthContextApi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Session termination failed:", error);
    }
  };

  const userName = user?.email?.split("@")[0] || "Operator";

  return (
    <div className="min-h-screen bg-black text-white px-6 font-sans selection:bg-white/20">
      
      {/* 1. TOP NAVIGATION: Minimalist Path & Actions */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-8 border-b border-neutral-900">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-black text-xs">
            SH
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
            <span>Workspace</span>
            <span className="text-neutral-800">/</span>
            <span className="text-neutral-300">Overview</span>
          </div>
        </div>
        
        <button 
          onClick={handleLogOut}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors py-2 px-4 border border-neutral-800 rounded-md hover:border-neutral-600"
        >
          Terminate Session
        </button>
      </nav>

      {/* 2. HERO SECTION: Bold Contrast Greeting */}
      <main className="max-w-6xl mx-auto py-20 space-y-20">
        
        <header className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
              Identity Verified // System Live
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-none">
            Welcome back, <br />
            <span className="text-neutral-500">{userName}.</span>
          </h1>
        </header>

        {/* 3. BENTO GRID: Functional Data Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl">
          
          {/* Block 01 */}
          <div className="bg-black p-10 space-y-4 hover:bg-neutral-950 transition-colors group">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors">
              Access Level
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-medium tracking-tight uppercase">Administrator</p>
              <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Root Authority 01</p>
            </div>
          </div>

          {/* Block 02 */}
          <div className="bg-black p-10 space-y-4 hover:bg-neutral-950 transition-colors group">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors">
              Terminal ID
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-medium tracking-tight truncate">{user?.email}</p>
              <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Secured Node</p>
            </div>
          </div>

          {/* Block 03 */}
          <div className="bg-black p-10 space-y-4 hover:bg-neutral-950 transition-colors group">
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors">
              System Status
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-mono font-medium tracking-tight uppercase">Operational</p>
              <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">Encrypted Data Link</p>
            </div>
          </div>

        </div>

        {/* 4. TECHNICAL FOOTNOTE */}
        <footer className="pt-20 flex justify-between items-end border-t border-neutral-900">
           <div className="space-y-2">
             <p className="text-[10px] font-mono text-neutral-800 uppercase tracking-[0.5em]">Secure House OS</p>
             <p className="text-[9px] text-neutral-600">Built on React 19 // Tailwind v4 // AES-256 System</p>
           </div>
           <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-800">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
           </div>
        </footer>

      </main>

      {/* Spatial Accent: Bottom Fade */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-950/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default Dashboard;