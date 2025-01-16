import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Store this in an .env file for security

export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchFireAlerts = async () => {
  // Similar structure for fire alerts API
};

export const fetchLocalNews = async () => {
  // Similar structure for news API
};