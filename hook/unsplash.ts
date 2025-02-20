import { useState, useEffect } from "react";
import { axiosInstance as as } from "../lib/axios";

export const useUnsplash = (query: string) => {
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // if (!query) return; 

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoint = query
        ? `/search/photos?query=${encodeURIComponent(query)}`
        : "/photos";
       console.log(endpoint)
        const res = await as.get(endpoint);
        setImages(query ? res.data.results : res.data);
      } catch (err) {
        setError("Failed to fetch images");
        setImages([]);
      }
      setLoading(false);
    };

    fetchImages();
  }, [query]);

  return { images, loading, error };
};
