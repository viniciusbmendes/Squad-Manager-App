export const request = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}