const base_url = 'http://35.198.243.157/buzzerfinder';

export async function fetchBuzzer() {
  return fetch(`${base_url}`);
}
