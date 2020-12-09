import baseUrl from "../config";

const Item = {
    one(storeId, id) {
      return fetch(`${baseUrl}/stores/${storeId}/items/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    create(storeId, params) {
      return fetch(`${baseUrl}/stores/${storeId}/items`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    update(storeId, id, params) {
      return fetch(`${baseUrl}/stores/${storeId}/items/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    destroy(storeId, id) {
      return fetch(`${baseUrl}/stores/${storeId}/items/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  
  export default Item;
  