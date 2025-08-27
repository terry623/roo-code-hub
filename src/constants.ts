export const WIKI_URL =
  "https://wiki.mediatek.inc/spaces/GAIA/pages/2297894099/01.+AI+Coding+Assistant+Tools+Hub";
export const SURVEY_URL = "https://surveycake.com/example";

export const SLASH_COMMANDS = [
  {
    name: "/test-gen",
    description: "自動為您的程式碼函數和類別生成全面的測試案例。",
    filename: "test-gen.md",
  },
  {
    name: "/doc-gen",
    description: "根據程式碼分析，為函數、類別和模組創建詳細文件。",
    filename: "doc-gen.md",
  },
  {
    name: "/refactor",
    description: "建議並應用程式碼重構改進，提升程式碼可維護性。",
    filename: "refactor.md",
  },
  {
    name: "/security-scan",
    description: "對您的程式碼進行安全分析，識別潛在的安全漏洞。",
    filename: "security-scan.md",
  },
  {
    name: "/api-gen",
    description: "根據您的資料模型生成 REST API 端點和 OpenAPI 文件。",
    filename: "api-gen.md",
  },
  {
    name: "/commit-msg",
    description: "根據您的暫存變更生成有意義的提交訊息。",
    filename: "commit-msg.md",
  },
];

export const CUSTOM_MODES = [
  {
    name: "Code Reviewer",
    description: "專業的程式碼審查助手，提供詳細的程式碼品質回饋、最佳實踐建議和改進方案。",
    filename: "code-reviewer.md",
  },
  {
    name: "Technical Writer",
    description: "專門用於創建清晰、全面的技術文件和 API 指南的專業模式。",
    filename: "technical-writer.md",
  },
  {
    name: "System Architect",
    description: "協助設計可擴展的系統架構，並提供技術選型的專業見解。",
    filename: "system-architect.md",
  },
  {
    name: "Debug Assistant",
    description: "專門協助識別和解決各種程式語言中的錯誤和問題。",
    filename: "debug-assistant.md",
  },
];
