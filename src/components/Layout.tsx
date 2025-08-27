import { Link, useLocation } from "react-router-dom";
import { WIKI_URL, SURVEY_URL } from "../constants";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-emerald-50 flex flex-col">
      <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Roo Code Hub
              </Link>

              <div className="flex space-x-6">
                <Link
                  to="/modes"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === "/modes"
                      ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  Custom Modes
                </Link>
                <Link
                  to="/commands"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === "/commands"
                      ? "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  Slash Commands
                </Link>
                <a
                  href={WIKI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all duration-200"
                >
                  Wiki 文件
                </a>
              </div>
            </div>

            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              投稿
            </a>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}
