import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextApi";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { error, data } = await signIn(email, password);
      if (error) {
        setError(error.message);
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Protocol verification failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-neutral-100 selection:bg-white/20 px-6 font-sans">
      
      {/* Container: Spacing ve Genişlik Kontrolü */}
      <div className="w-full max-w-[400px] space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
        
        {/* Branding: Minimalist Kare Logo ve Başlık */}
        <div className="space-y-6">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <div className="w-4 h-4 bg-black rounded-sm" />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-medium tracking-tighter text-white uppercase">Secure House</h1>
            <p className="text-neutral-500 text-sm tracking-tight">Identity verification for terminal access.</p>
          </div>
        </div>

        {/* Form: Logic & Inputs */}
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-5">
            
            {/* Input Group: Email */}
            <div className="group space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-600 transition-colors group-focus-within:text-white">
                Terminal ID
              </label>
              <input 
                type="email" 
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-white transition-all text-sm placeholder:text-neutral-700 text-white font-mono"
                placeholder="operator@system.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Input Group: Password */}
            <div className="group space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-600 transition-colors group-focus-within:text-white">
                Access Key
              </label>
              <input 
                type="password" 
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-white transition-all text-sm placeholder:text-neutral-700 text-white font-mono"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Logic: Conditional Error Display */}
          {error && (
            <div className="text-[11px] font-bold uppercase tracking-widest text-red-400 bg-red-400/5 border border-red-400/10 px-4 py-3 rounded-lg flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          )}

          {/* Action: Main Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-white hover:bg-neutral-200 disabled:bg-neutral-900 disabled:text-neutral-600 text-black py-3.5 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-[0.98] disabled:cursor-not-allowed shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            {isLoading ? "Verifying..." : "Initialize Session"}
          </button>
        </form>

        {/* Navigation: Secondary Links */}
        <div className="pt-8 border-t border-neutral-900 flex justify-between items-center">
          <Link to="/register" className="text-neutral-500 hover:text-white text-xs tracking-tight transition-colors">
            No access? <span className="text-white font-medium underline underline-offset-4 decoration-neutral-800 hover:decoration-white transition-all">Request credentials.</span>
          </Link>
          <span className="text-[10px] font-mono text-neutral-800 uppercase tracking-widest">v2.6.4</span>
        </div>

      </div>

      {/* Spatial Detail: Top Edge Line */}
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent pointer-events-none" />
    </div>
  );
};

export default Login;