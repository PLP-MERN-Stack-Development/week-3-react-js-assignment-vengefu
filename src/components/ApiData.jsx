import { useState, useEffect } from 'react'
import Button from './Button'
import Card from './Card'

const ApiData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${searchTerm}`
      )
      if (!response.ok) throw new Error('Failed to fetch data')
      const jsonData = await response.json()
      setData(prev => page === 1 ? jsonData : [...prev, ...jsonData])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page, searchTerm])

  const handleSearch = (e) => {
    e.preventDefault()
    setPage(1)
    fetchData()
  }

  return (
    <div className="space-y-6">
      <Card>
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">API Data</h1>
        
        <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Button type="submit">Search</Button>
        </form>
      </Card>

      {loading && page === 1 ? (
        <Card>
          <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
        </Card>
      ) : error ? (
        <Card>
          <p className="text-center text-red-500">{error}</p>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map(item => (
              <Card key={item.id}>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={() => setPage(prev => prev + 1)}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default ApiData;