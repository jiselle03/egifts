import baseUrl from "../config";

const Store = {
    all() {
      return fetch(`${baseUrl}/stores`, {
        credentials: "include"
      }).then(res => res.json());
    },
    one(id) {
      return fetch(`${baseUrl}/stores/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    create(params) {
      return fetch(`${baseUrl}/stores`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    update(id, params) {
      return fetch(`${baseUrl}/stores/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    destroy(id) {
      return fetch(`${baseUrl}/stores/${id}`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  
  export default Store;
  