import baseUrl from "../config";

const Transaction = {
    create(storeId, itemId, params) {
      return fetch(`${baseUrl}/stores/${storeId}/items/${itemId}/transactions`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
  };
  
  export default Transaction;
  