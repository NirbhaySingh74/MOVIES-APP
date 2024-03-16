import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzJlMWNkYjUxMzI5ODM4MDgwY2Y4YjEyYWI3OWE3NSIsInN1YiI6IjY1ZWZlOGUxMTdiNWVmMDE2MmI3ODExYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DfEDEYzb8ovOY4bfr-uNceBZu-Pr-bLo6BmlZ6CP-So";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
