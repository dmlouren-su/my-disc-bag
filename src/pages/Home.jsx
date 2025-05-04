import React, { useState } from 'react';

const Home = ({ discs = [] }) => {
  const [selectedDisc, setSelectedDisc] = useState(null);  

  const handleDiscClick = (disc) => {
    setSelectedDisc(disc);  
  };

  const closeModal = () => {
    setSelectedDisc(null);  
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">My Disc Bag</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {discs.length === 0 ? (
          <p>No discs available. Add some!</p>
        ) : (
          discs.map((disc, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow-lg text-black cursor-pointer hover:bg-gray-200"
              onClick={() => handleDiscClick(disc)}  
            >
              <img src={disc.image} alt={disc.name} className="w-full h-40 object-cover rounded mb-2" />
              <h2 className="font-semibold">{disc.name}</h2>
              <p>{disc.company}</p>
              <p>{disc.color}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><strong>Speed:</strong> {disc.speed}</div>
                <div><strong>Glide:</strong> {disc.glide}</div>
                <div><strong>Turn:</strong> {disc.turn}</div>
                <div><strong>Fade:</strong> {disc.fade}</div>
                <div><strong>Disc Type:</strong> {disc.discType}</div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for displaying disc details */}
      {selectedDisc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-gray-800 p-6 rounded-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedDisc.name}</h2>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full hover:bg-red-500"
            >
              X
            </button>

            <div className="space-y-4">
              <div>
                <strong>Company:</strong> {selectedDisc.company}
              </div>
              <div>
                <strong>Color:</strong> {selectedDisc.color}
              </div>
              <div>
                <strong>Speed:</strong> {selectedDisc.speed}
              </div>
              <div>
                <strong>Glide:</strong> {selectedDisc.glide}
              </div>
              <div>
                <strong>Turn:</strong> {selectedDisc.turn}
              </div>
              <div>
                <strong>Fade:</strong> {selectedDisc.fade}
              </div>
              <div>
                <strong>Disc Type:</strong> {selectedDisc.discType}
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold">Throw History</h3>
                {selectedDisc.throws.length > 0 ? (
                  <ul className="space-y-2">
                    {selectedDisc.throws.map((throwEntry, i) => (
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
