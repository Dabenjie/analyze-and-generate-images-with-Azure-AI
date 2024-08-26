import React from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalyzeClick = () => {
    // Logic for image analysis
    console.log('Image analysis triggered with URL:', inputValue);
  };

  const handleGenerateClick = () => {
    // Logic for image generation
    console.log('Image generation triggered with prompt:', inputValue);
  };

  return (
    <div className="App">
      <h1>Image Analysis and Generation Tool</h1>
      <input
        type="text"
        placeholder="Enter image URL or prompt"
        value={inputValue}
        onChange={handleInputChange}
        style={{ width: '300px', padding: '10px', margin: '10px 0' }}
      />
      <div>
        <button onClick={handleAnalyzeClick} style={{ marginRight: '10px' }}>
          Analyze Image
        </button>
        <button onClick={handleGenerateClick}>
          Generate Image
        </button>
      </div>
    </div>
  );
}

export default App;
