import Launch from '../definitions';

interface LaunchCardProps {
  launch: Launch;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  return (
    <div className="launch-card">
      <h3>{launch.name}</h3>
      <p>Launch Date: {new Date(launch.date_utc).toLocaleString()}</p>
      <p>Rocket: {launch.rocket}</p>
      {launch.links.webcast && (
        <a
          href={launch.links.webcast}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Webcast
        </a>
      )}
    </div>
  );
};
