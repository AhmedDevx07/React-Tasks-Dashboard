import { useState } from "react";
import { Mail, Lock, User, ArrowRight, Code, Globe } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");  
  const { login, signup, googleLogin } = useAuth();
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (isLogin) {
      await login(email, password);
       
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back to CodeLab PRO!',
        timer: 1500,
        showConfirmButton: false,
        background: '#0b0f19',
        color: '#fff',
        iconColor: '#6366f1'
      });
    } else {
      await signup(email, password, name);
       
      Swal.fire({
        icon: 'success',
        title: 'Account Created',
        text: 'Your registration was successful. Welcome!',
        background: '#0b0f19',
        color: '#fff',
        confirmButtonColor: '#6366f1'
      });
    }
    navigate("/");
  } catch (err) {
     
    let errorMessage = "An unexpected error occurred. Please try again.";
    
    if (err.code === 'auth/email-already-in-use') {
      errorMessage = "This email is already registered. Please sign in instead.";
    } else if (err.code === 'auth/wrong-password') {
      errorMessage = "Invalid password. Please check your credentials.";
    } else if (err.code === 'auth/user-not-found') {
      errorMessage = "No account found with this email.";
    }

    Swal.fire({
      icon: 'error',
      title: 'Authentication Failed',
      text: errorMessage,
      background: '#0b0f19',
      color: '#fff',
      confirmButtonColor: '#ef4444'
    });
  }
};

 
const handleGoogle = async () => {
  try {
    await googleLogin();
    Swal.fire({
      icon: 'success',
      title: 'Authenticated',
      text: 'Successfully signed in with Google.',
      timer: 1500,
      showConfirmButton: false,
      background: '#0b0f19',
      color: '#fff'
    });
    navigate("/");
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Google Sign-In Error',
      text: 'The authentication process was cancelled or failed.',
      background: '#0b0f19',
      color: '#fff'
    });
  }
};


 const handleGithubComingSoon = () => {
  Swal.fire({
    title: 'GitHub Authentication',
    text: 'GitHub sign-in is currently under maintenance and will be available soon.',
    icon: 'info',
    background: '#0b0f19',
    color: '#fff',
    confirmButtonColor: '#6366f1',
    confirmButtonText: 'Got it'
  });
};
  return (
    <div className="flex min-h-screen bg-[#0b0f19] text-white overflow-hidden font-sans relative">
       
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

     
      <div className="hidden lg:flex w-1/2 flex-col justify-center px-16 xl:px-24 border-r border-white/5 relative z-10 bg-gradient-to-br from-indigo-900/10 to-transparent">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-600/40 transform -rotate-6 transition-transform hover:rotate-0">
            <span className="font-black text-2xl italic">C</span>
          </div>
          <h1 className="text-3xl font-black tracking-tighter uppercase underline-offset-8 decoration-indigo-500 decoration-4">
            CodeLab{" "}
            <span className="text-indigo-500 font-light italic">PRO</span>
          </h1>
        </div>

        <h2 className="text-6xl font-black leading-[1.1] mb-8 tracking-tight">
          Master Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Logic Building
          </span>
        </h2>

        <div className="space-y-8 mt-4">
          <FeatureItem
            title="Modular Tasks"
            desc="9+ professional coding challenges ready to execute."
          />
          <FeatureItem
            title="Real-time Logic"
            desc="See how code works under the hood instantly."
          />
          <FeatureItem
            title="Cloud Sync"
            desc="Save your progress and access from anywhere."
          />
        </div>
      </div>

       
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative z-10">
        <div className="w-full max-w-[440px] space-y-8">
          <div className="text-center lg:text-left space-y-2">
            <h3 className="text-4xl font-extrabold tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h3>
            <p className="text-gray-400 text-sm font-medium">
              {isLogin
                ? "Enter your credentials to access your lab."
                : "Join our community of developers today."}
            </p>
          </div>

          <div className="bg-gray-900/30 border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <form className="space-y-6" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-indigo-400/80 ml-1 uppercase tracking-widest">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                      size={18}
                    />
                    <input
                      className="w-full bg-gray-950/40 border border-white/5 p-4 pl-12 rounded-2xl outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all text-white"
                      placeholder="Ahmed DevX"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black text-indigo-400/80 ml-1 uppercase tracking-widest">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-950/40 border border-white/5 p-4 pl-12 rounded-2xl outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all text-white"
                    placeholder="hello@dev.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-indigo-400/80 ml-1 uppercase tracking-widest">
                  Password
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors"
                    size={18}
                  />
                  <input
                    type="password"
                    required
                    className="w-full bg-gray-950/40 border border-white/5 p-4 pl-12 rounded-2xl outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/5 transition-all text-white"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-0.5 active:scale-95 group text-white"
              >
                {isLogin ? "Sign In" : "Get Started"}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
                <span className="bg-[#0b0f19] px-4 text-gray-500">
                  Secure Access
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogle}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-3.5 rounded-2xl hover:bg-white/10 transition-colors font-semibold text-sm text-white"
              >
                <Globe size={16} /> Google
              </button>
              <button
                onClick={handleGithubComingSoon}
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-3.5 rounded-2xl hover:bg-white/10 transition-colors font-semibold text-sm text-white"
              >
                <Code size={16} /> Github
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm font-medium">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors underline-offset-4 hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ title, desc }) => (
  <div className="flex gap-5 group">
    <div className="h-14 w-[2px] bg-gradient-to-b from-indigo-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
    <div>
      <h4 className="font-bold text-xl text-white/90 tracking-tight">
        {title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
        {desc}
      </p>
    </div>
  </div>
);

export default Auth;
