import React, { useState } from 'react';

const Track = ({ discs, onTrackThrow }) => {
  const [selectedDisc, setSelectedDisc] = useState('');
  const [distance, setDistance] = useState('');
  const [throwType, setThrowType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDisc && distance && throwType) {
      const newThrow = { distance, throwType };
      onTrackThrow(selectedDisc, newThrow);  // Update the selected disc's throws
      setDistance('');  // Reset the distance input
      setThrowType('');  // Reset the throw type input
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Track Your Throw</h1>
      
      {/* Form Section */}
      <div className="max-w-screen-lg mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold">Select Disc</label>
            <select
              value={selectedDisc}
              onChange={(e) => setSelectedDisc(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            >
              <option value="">Select a disc</option>
              {discs.map((disc, index) => (
                <option key={index} value={disc.name}>
                  {disc.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold">Distance (in feet)</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Distance"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Throw Type</label>
            <select
              value={throwType}
              onChange={(e) => setThrowType(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            >
              <option value="">Select Throw Type</option>
              <option value="Forehand">Forehand</option>
              <option value="Backhand">Backhand</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition duration-300"
          >
            Track Throw
          </button>
        </form>
      </div>

      {/* Throw History Section */}
      <div className="max-w-screen-lg mx-auto mt-8 px-4">
        <h2 className="text-xl font-semibold">Throw History</h2>
        {discs.map((disc, index) => (
          <div key={index} className="mt-4 bg-gray-800 p-4 rounded shadow-md">
            <h3 className="font-semibold text-lg">{disc.name}</h3>
            {disc.throws.length > 0 ? (
              <ul className="space-y-2">
                {disc.throws.map((throwEntry, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold">Throw {i + 1}: </span>
                    {throwEntry.distance} feet, {throwEntry.throwType}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No throws recorded for this disc yet.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Track;
