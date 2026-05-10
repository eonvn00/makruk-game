import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import AnalysisPanel from './components/AnalysisPanel';

function App() {
  const [analysis, setAnalysis] = useState({
    depth: 0,
    score: 0,
    time: 0,
    nps: 0,
    bestMove: null
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="flex gap-8 items-start">
        {/* Board */}
        <div className="bg-gray-800 rounded-lg shadow-2xl p-4">
          <Board onAnalysis={setAnalysis} />
        </div>

        {/* Analysis Panel */}
        <div className="bg-gray-800 rounded-lg shadow-2xl p-6 w-64">
          <h2 className="text-xl font-bold text-white mb-6">Analysis</h2>
          <AnalysisPanel analysis={analysis} />
        </div>
      </div>
    </div>
  );
}

export default App;
