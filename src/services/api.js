// Модули
import axios from "axios";


axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "23200970-d5201fb8f8a34679c1c031ab0";

const fetchHits = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `/?key=${KEY}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};


export { fetchHits };