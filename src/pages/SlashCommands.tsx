import InstallationGuide from '../components/InstallationGuide'

const sampleCommands = [
  {
    id: 1,
    name: '/test-gen',
    description: 'Automatically generates comprehensive test cases for your code functions and classes.',
    author: 'Testing Tools Team',
    tags: ['Testing', 'Code Generation', 'Automation'],
    downloads: 2100,
    rating: 4.9
  },
  {
    id: 2,
    name: '/doc-gen',
    description: 'Creates detailed documentation for functions, classes, and modules based on code analysis.',
    author: 'Documentation Guild',
    tags: ['Documentation', 'Auto-generation', 'Code Analysis'],
    downloads: 1850,
    rating: 4.7
  },
  {
    id: 3,
    name: '/refactor',
    description: 'Suggests and applies code refactoring improvements for better maintainability.',
    author: 'Code Quality Team',
    tags: ['Refactoring', 'Code Quality', 'Maintenance'],
    downloads: 1450,
    rating: 4.8
  },
  {
    id: 4,
    name: '/security-scan',
    description: 'Performs security analysis on your code to identify potential vulnerabilities.',
    author: 'Security Team',
    tags: ['Security', 'Vulnerability', 'Code Analysis'],
    downloads: 980,
    rating: 4.6
  },
  {
    id: 5,
    name: '/api-gen',
    description: 'Generates REST API endpoints and OpenAPI documentation from your data models.',
    author: 'API Development Team',
    tags: ['API', 'OpenAPI', 'Code Generation'],
    downloads: 1320,
    rating: 4.5
  },
  {
    id: 6,
    name: '/commit-msg',
    description: 'Generates meaningful commit messages based on your staged changes.',
    author: 'Git Tools Community',
    tags: ['Git', 'Commit Messages', 'Version Control'],
    downloads: 2500,
    rating: 4.8
  }
]

export default function SlashCommands() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Slash Commands</h1>
            <p className="text-gray-600">
              Powerful commands that extend Claude's functionality for quick development tasks.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <input 
                  type="text"
                  placeholder="Search commands..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>All Categories</option>
                  <option>Testing</option>
                  <option>Documentation</option>
                  <option>Code Generation</option>
                  <option>Security</option>
                  <option>Git</option>
                </select>
              </div>
              <div className="text-sm text-gray-500">
                {sampleCommands.length} commands available
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {sampleCommands.map((command) => (
              <div key={command.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <code className="text-lg font-mono font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                        {command.name}
                      </code>
                    </div>
                    <p className="text-gray-600 mb-3">{command.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>By {command.author}</span>
                      <span>•</span>
                      <span>{command.downloads.toLocaleString()} downloads</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {command.rating}
                      </div>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors ml-4">
                    Install
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {command.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
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
  )
}