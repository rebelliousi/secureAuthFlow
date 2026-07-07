import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextApi";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { error, data } = await signUp(email, password);
      
      if (error) {
        setError(error.message || "Credential validation failed.");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Network protocol failed. Connection refused.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-neutral-100 selection:bg-white/20 px-6 font-sans">
      
      <div className="w-full max-w-[400px] space-y-12">
        
        {/* Brand/Logo Section */}
        <div className="space-y-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm" />
          </div>
          <div>
            <h1 className="text-3xl font-medium tracking-tighter text-white">Create Account</h1>
            <p className="text-neutral-500 text-sm tracking-tight">Register your credentials for Secure House.</p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleRegister} className="space-y-8">
          <div className="space-y-4">
            {/* Email Input */}
            <div className="group space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 transition-colors group-focus-within:text-white">
                Email Address
              </label>
              <input 
                type="email" 
                required
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-white transition-all text-sm placeholder:text-neutral-700 text-white"
                placeholder="operator@system.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="group space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 transition-colors group-focus-within:text-white">
                Set Password
              </label>
              <input 
                type="password" 
                required
                minLength={6}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-white transition-all text-sm placeholder:text-neutral-700 text-white"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-[10px] text-neutral-600 tracking-tight">Minimum 6 characters required.</p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-[11px] font-bold uppercase tracking-widest text-red-400 bg-red-400/5 border border-red-400/10 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-white hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 text-black py-3.5 rounded-lg text-sm font-bold tracking-tight transition-all active:scale-[0.98] disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Identity..." : "Complete Registration"}
          </button>
        </form>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-neutral-900">
          <Link to="/login" className="text-neutral-500 hover:text-white text-xs tracking-tight transition-colors">
            Already have an account? <span className="text-white font-medium underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-all">Sign in here.</span>
          </Link>
        </div>

      </div>

      {/* Version Tag */}
      <div className="fixed bottom-8 text-[10px] font-mono text-neutral-800 tracking-[0.3em] uppercase">
        SH-OS // Ver 2.6.4
      </div>
    </div>
  );
};

export default Register;