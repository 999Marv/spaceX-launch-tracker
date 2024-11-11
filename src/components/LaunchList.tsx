import { useEffect, useState } from 'react';
import Launch from '../definitions';
import { fetchLaunches } from '../data';
import { LaunchCard } from './LaunchCard';

export default function LaunchList() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLaunches = async () => {
      try {
        const data = await fetchLaunches();
        setLaunches(data);
      } catch (error) {
        setError('Error fetching data');
        console.error('error fetching data', error);
      }
    };

    loadLaunches();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="launch-list">
      {launches.map((launch, key) => (
        <LaunchCard key={key} launch={launch} />
      ))}
    </div>
  );
}
