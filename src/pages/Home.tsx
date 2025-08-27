import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Roo Code Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            分享 Roo Code 自訂模式和斜線指令的平台，讓開發者能夠輕鬆分享和使用。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Link
            to="/modes"
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 shadow-lg">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Custom Modes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                探索能提升 Roo Code 特定任務表現的自訂 AI 模式（角色）。
                從程式編寫助手到創意寫作夥伴，找到最符合您需求的完美模式。
              </p>
            </div>
          </Link>

          <Link
            to="/commands"
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300 shadow-lg">
                <svg
                  className="w-8 h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Slash Commands
              </h2>
              <p className="text-gray-600 leading-relaxed">
                探索能透過快速操作擴展 Roo Code 功能的強大斜線指令。
                從自動化測試生成到程式碼的重構，使用預建指令提升開發效率。
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
