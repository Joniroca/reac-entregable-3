import axios from "axios";

const getCharacterByUrl = async (characterUrl) => {
  try {
    const res = await axios.get(characterUrl);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCharacterByUrl;
