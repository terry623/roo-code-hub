import InstallationGuide from '../components/InstallationGuide'

const sampleModes = [
  {
    id: 1,
    name: 'Code Reviewer',
    description: 'An expert code reviewer that provides detailed feedback on code quality, best practices, and potential improvements.',
    author: 'Developer Community',
    tags: ['Development', 'Code Review', 'Best Practices'],
    downloads: 1250,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Technical Writer',
    description: 'A specialized mode for creating clear, comprehensive technical documentation and API guides.',
    author: 'Documentation Team',
    tags: ['Documentation', 'Technical Writing', 'API'],
    downloads: 890,
    rating: 4.6
  },
  {
    id: 3,
    name: 'System Architect',
    description: 'Helps design scalable system architectures and provides insights on technology choices.',
    author: 'Architecture Guild',
    tags: ['Architecture', 'System Design', 'Scalability'],
    downloads: 675,
    rating: 4.9
  },
  {
    id: 4,
    name: 'Debug Assistant',
    description: 'Specialized in helping identify and resolve bugs across different programming languages.',
    author: 'Debug Masters',
    tags: ['Debugging', 'Problem Solving', 'Multi-language'],
    downloads: 1100,
    rating: 4.7
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
              Discover AI modes that transform Claude into specialized assistants for your specific needs.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <input 
                  type="text"
                  placeholder="Search modes..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>All Categories</option>
                  <option>Development</option>
                  <option>Documentation</option>
                  <option>Architecture</option>
                  <option>Debugging</option>
                </select>
              </div>
              <div className="text-sm text-gray-500">
                {sampleModes.length} modes available
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {sampleModes.map((mode) => (
              <div key={mode.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{mode.name}</h3>
                    <p className="text-gray-600 mb-3">{mode.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>By {mode.author}</span>
                      <span>•</span>
                      <span>{mode.downloads.toLocaleString()} downloads</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {mode.rating}
                      </div>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors ml-4">
                    Install
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mode.tags.map((tag, index) => (
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
          <InstallationGuide type="modes" />
        </div>
      </div>
    </div>
  )
}