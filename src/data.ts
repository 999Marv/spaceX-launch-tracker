import Launch from './definitions';

export async function fetchLaunches(): Promise<Launch[]> {
  const response = await fetch(
    'https://api.spacexdata.com/v4/launches/upcoming'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch launches');
  }

  const data = await response.json();
  return data;
}
