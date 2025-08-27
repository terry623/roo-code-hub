import InstallationGuide from "../components/InstallationGuide";

const sampleCommands = [
  {
    id: 1,
    name: "/test-gen",
    description: "自動為您的程式碼函數和類別生成全面的測試案例。",
  },
  {
    id: 2,
    name: "/doc-gen",
    description: "根據程式碼分析，為函數、類別和模組創建詳細文件。",
  },
  {
    id: 3,
    name: "/refactor",
    description: "建議並應用程式碼重構改進，提升程式碼可維護性。",
  },
  {
    id: 4,
    name: "/security-scan",
    description: "對您的程式碼進行安全分析，識別潛在的安全漏洞。",
  },
  {
    id: 5,
    name: "/api-gen",
    description: "根據您的資料模型生成 REST API 端點和 OpenAPI 文件。",
  },
  {
    id: 6,
    name: "/commit-msg",
    description: "根據您的暫存變更生成有意義的提交訊息。",
  },
];

export default function SlashCommands() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Slash Commands</h1>
            <p className="text-gray-600">
              強大的指令，擴展 Roo Code 的功能以快速完成開發任務。
            </p>
          </div>

          <div className="grid gap-6">
            {sampleCommands.map((command) => (
              <div
                key={command.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <code className="text-lg font-mono font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                        {command.name}
                      </code>
                    </div>
                    <p className="text-gray-600 mb-3">{command.description}</p>
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
          <InstallationGuide type="commands" />
        </div>
      </div>
    </div>
  );
}
