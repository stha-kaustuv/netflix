const API_KEY = "b239f54b9e89f337ce66d2cff19fbcee";

const requests = {
    fetchTrending: `/movie/now_playing?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/movie/popular?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,  
    fetchUpcomingMovies: `/discover/movie?api_key=${API_KEY}`,  
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,  
    fetchAiringToday: `/tv/airing_today?api_key=${API_KEY}`,
    fetchTvTopRated: `/tv/top_rated?api_key=${API_KEY}`,
    fetchOnTheAir: `/tv/on_the_air?api_key=${API_KEY}`, 
    fetchLatestMovie: `/movie/latest?api_key=${API_KEY}`,
    fetchLatestTv: `/tv/latest?api_key=${API_KEY}`,
    fetchPersonPopular: `/person/popular?api_key=${API_KEY}`, 
    fetchPopularTv: `/tv/popular?api_key=${API_KEY}`,


    
    
};

export default requests;

