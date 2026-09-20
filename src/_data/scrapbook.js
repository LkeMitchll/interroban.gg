import SaveeAPI from "../_providers/savee.js";

async function items() {
  const api = new SaveeAPI();
  const response = await api.getItems();

  return response.data;
}

export default items();
