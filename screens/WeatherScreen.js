import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchWeather } from '../services/api';

export default function WeatherScreen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather('Los Angeles');
      setWeather(data);
    };

    getWeather();
  }, []);

  return (
    <View>
      {weather ? (
        <Text>Temperature: {weather.main.temp}°C</Text>
      ) : (
        <Text>Loading weather...</Text>
      )}
    </View>
  );
}