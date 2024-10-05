import React, { useState } from 'react'

function App() {
  const [serverUrl, setServerUrl] = useState('')
  const [proxyUrl, setProxyUrl] = useState('')

  // Handle URL input
  const handleGenerateProxy = () => {
    if (serverUrl.trim() === '') return
    // Assuming the proxy server is running on http://localhost:5000
    const generatedUrl = `http://localhost:3001/proxy?url=${encodeURIComponent(serverUrl)}`
    setProxyUrl(generatedUrl)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Proxy URL Generator</h1>
      <input
        type="text"
        placeholder="Enter server URL"
        value={serverUrl}
        onChange={(e) => setServerUrl(e.target.value)}
        style={{ padding: '10px', width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleGenerateProxy} style={{ padding: '10px' }}>
        Generate Proxy URL
      </button>
      {proxyUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Proxy URL:</h3>
          <a href={proxyUrl} target="_blank" rel="noopener noreferrer">
            {proxyUrl}
          </a>
        </div>
      )}
    </div>
  )
}

export default App
