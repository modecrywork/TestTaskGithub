// services
import { API_PARTS } from "constants";

import {AsyncService} from "services";

// constants
const getRepoMarkdown = async (full_name) => {
  const { repos, readme } = API_PARTS;
  const url = `${repos}/${full_name}${readme}`;
  const { data } = await AsyncService.get(url, {
    headers: { Accept: "application/vnd.github.VERSION.raw" }
  });
  return data || "";
};

export default  getRepoMarkdown;
