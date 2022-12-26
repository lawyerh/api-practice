import axios from "axios";

const searchImages = async (searchQuery) => {
  const options = {
    headers: {
      Authorization: "Client-ID xN_xy288qL_RZ_uhHmn1Jbu4l4onnAA938s6ML5jh-Y",
    },
    params: {
      query: searchQuery,
    },
  };

  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    options
  );

  console.log(response);
  return response.data.results;
};

export default searchImages;
