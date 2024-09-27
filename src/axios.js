import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",  // Ensure this is correctly set to baseURL
});

export default instance;

//instance.get('/anime') garyo bhane hamile
//https://api.themoviedb.org/3/anime ma janxa