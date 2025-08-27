import InstallationGuide from "../components/InstallationGuide";

const sampleModes = [
  {
    id: 1,
    name: "Code Reviewer",
    description:
      "專業的程式碼審查助手，提供詳細的程式碼品質回饋、最佳實踐建議和改進方案。",
  },
  {
    id: 2,
    name: "Technical Writer",
    description: "專門用於創建清晰、全面的技術文件和 API 指南的專業模式。",
  },
  {
    id: 3,
    name: "System Architect",
    description: "協助設計可擴展的系統架構，並提供技術選型的專業見解。",
  },
  {
    id: 4,
    name: "Debug Assistant",
    description: "專門協助識別和解決各種程式語言中的錯誤和問題。",
  },
];

export default function CustomModes() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Custom Modes
            </h1>
            <p className="text-gray-600">
              探索將 Roo Code 轉化為專業助手的自訂 AI 模式。
            </p>
            <p className="text-sm text-blue-600 mt-2">
              <a
                href="https://docs.roocode.com/features/custom-modes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                查看官方文件 →
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleModes.map((mode) => (
              <div
                key={mode.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {mode.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {mode.description}
                </p>
                <div className="flex justify-end">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                    下載
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-80">
          <InstallationGuide type="modes" />
        </div>
      </div>
    </div>
  );
}
