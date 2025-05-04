import React from 'react';

const Stats = ({ discs }) => {
  const calculateStatsForThrowType = (disc, throwType) => {
    if (!disc.throws || disc.throws.length === 0) return { furthest: 0, average: 0 };

    const filteredThrows = disc.throws.filter(throwEntry => throwEntry.throwType === throwType);

    if (filteredThrows.length === 0) return { furthest: 0, average: 0 };

    const furthest = Math.max(...filteredThrows.map(t => t.distance));

    const totalDistance = filteredThrows.reduce((sum, t) => sum + t.distance, 0);
    const average = totalDistance / filteredThrows.length;

    return { furthest, average };
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Stats</h1>

      <div className="space-y-6">
        {discs.length === 0 ? (
          <p>No discs available. Please add some discs first.</p>
        ) : (
          discs.map((disc, index) => {
            const forehandStats = calculateStatsForThrowType(disc, 'Forehand');
            const backhandStats = calculateStatsForThrowType(disc, 'Backhand');

            return (
              <div key={index} className="bg-gray-800 p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold">{disc.name}</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {/* Forehand stats */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Forehand</h3>
                    <div><strong>Furthest Forehand:</strong> {forehandStats.furthest} feet</div>
                    <div><strong>Average Forehand:</strong> {forehandStats.average.toFixed(2)} feet</div>
                  </div>

                  {/* Backhand stats */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Backhand</h3>
                    <div><strong>Furthest Backhand:</strong> {backhandStats.furthest} feet</div>
                    <div><strong>Average Backhand:</strong> {backhandStats.average.toFixed(2)} feet</div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Stats;
