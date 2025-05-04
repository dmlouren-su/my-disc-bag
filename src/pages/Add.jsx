import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = ({ onAddDisc }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [color, setColor] = useState('');
  const [speed, setSpeed] = useState('');
  const [glide, setGlide] = useState('');
  const [turn, setTurn] = useState('');
  const [fade, setFade] = useState('');
  const [discType, setDiscType] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();  // initialize

  const handleSubmit = (e) => {
    e.preventDefault();

    // addinf new disc
    const newDisc = {
      name,
      company,
      color,
      speed,
      glide,
      turn,
      fade,
      discType,
      image,
      throws: []  
    };

    
    onAddDisc(newDisc);

    
    navigate('/');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Disc</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold">Disc Name</label>
          <input
            type="text"
            placeholder="Disc Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Company</label>
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Color</label>
          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-lg font-semibold">Speed</label>
            <input
              type="number"
              placeholder="Speed"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Glide</label>
            <input
              type="number"
              placeholder="Glide"
              value={glide}
              onChange={(e) => setGlide(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Turn</label>
            <input
              type="number"
              placeholder="Turn"
              value={turn}
              onChange={(e) => setTurn(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold">Fade</label>
            <input
              type="number"
              placeholder="Fade"
              value={fade}
              onChange={(e) => setFade(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
        </div>
        <div>
          <label className="block text-lg font-semibold">Disc Type</label>
          <select
            value={discType}
            onChange={(e) => setDiscType(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
          >
            <option value="">Select Disc Type</option>
            <option value="Driver">Driver</option>
            <option value="Midrange">Midrange</option>
            <option value="Putter">Putter</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-semibold">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition duration-300"
        >
          Add Disc
        </button>
      </form>
    </div>
  );
};

export default Add;
