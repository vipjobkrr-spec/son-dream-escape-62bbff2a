import { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, CloudFog, Thermometer } from "lucide-react";

interface WeatherData {
  temperature: number;
  weathercode: number;
}

const wmoToIcon = (code: number) => {
  if (code === 0 || code === 1) return <Sun className="w-3.5 h-3.5 text-secondary" />;
  if (code === 2 || code === 3) return <Cloud className="w-3.5 h-3.5 text-muted-foreground" />;
  if (code >= 45 && code <= 48) return <CloudFog className="w-3.5 h-3.5 text-muted-foreground" />;
  if (code >= 51 && code <= 55) return <CloudDrizzle className="w-3.5 h-3.5 text-blue-400" />;
  if (code >= 61 && code <= 67) return <CloudRain className="w-3.5 h-3.5 text-blue-400" />;
  if (code >= 71 && code <= 77) return <CloudSnow className="w-3.5 h-3.5 text-blue-200" />;
  if (code >= 80 && code <= 82) return <CloudRain className="w-3.5 h-3.5 text-blue-400" />;
  if (code >= 95) return <CloudLightning className="w-3.5 h-3.5 text-yellow-400" />;
  return <Thermometer className="w-3.5 h-3.5" />;
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=44.15&longitude=38.88&current_weather=true")
      .then((r) => r.json())
      .then((d) => {
        if (d.current_weather) {
          setWeather({
            temperature: Math.round(d.current_weather.temperature),
            weathercode: d.current_weather.weathercode,
          });
        }
      })
      .catch(() => {});
  }, []);

  if (!weather) return null;

  return (
    <div className="flex items-center gap-1 text-xs text-foreground/70">
      {wmoToIcon(weather.weathercode)}
      <span className="font-medium">{weather.temperature > 0 ? "+" : ""}{weather.temperature}°</span>
    </div>
  );
};

export default WeatherWidget;
