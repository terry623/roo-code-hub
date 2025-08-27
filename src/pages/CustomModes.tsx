import InstallationGuide from '../components/InstallationGuide'

const sampleModes = [
  {
    id: 1,
    name: 'Code Reviewer',
    description: '專業的程式碼審查助手，提供詳細的程式碼品質回饋、最佳實踐建議和改進方案。'
  },
  {
    id: 2,
    name: 'Technical Writer',
    description: '專門用於創建清晰、全面的技術文件和 API 指南的專業模式。'
  },
  {
    id: 3,
    name: 'System Architect',
    description: '協助設計可擴展的系統架構，並提供技術選型的專業見解。'
  },
  {
    id: 4,
    name: 'Debug Assistant',
    description: '專門協助識別和解決各種程式語言中的錯誤和問題。'
  }
]

export default function CustomModes() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Custom Modes</h1>
            <p className="text-gray-600">
              探索將 Roo Code 轉化為專業助手的 AI 模式，滿足您的特定需求。
            </p>
          </div>


          <div className="grid gap-6">
            {sampleModes.map((mode) => (
              <div key={mode.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{mode.name}</h3>
                    <p className="text-gray-600 mb-3">{mode.description}</p>
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors ml-4">
                    安裝
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
  )
}