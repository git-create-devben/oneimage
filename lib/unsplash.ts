import {axiosInstance as as} from "./axios"

export const useUnsplash =  async ( query:string) => {
    try {
        console.log("Query:", query);
    
        // Determine the correct endpoint
        const endpoint = query
          ? `/search/photos?query=${encodeURIComponent(query)}`
          : "/photos";
    
        const res = await as.get(endpoint);
        console.log("Query Endpoint", endpoint )
        console.log("Response Data:", res.data);
    
        // If searching, return the results array
        return query ? res.data.results : res.data;
    
      } catch (error) {
        console.error("Error fetching images:", error);
        return [];
      }
}