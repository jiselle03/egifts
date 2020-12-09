import baseUrl from "../config";

const Session = {
    create(params) {
      return fetch(`${baseUrl}/session`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    destroy() {
      return fetch(`${baseUrl}/session`, {
        credentials: "include",
        method: "DELETE"
      }).then(res => res.json());
    }
  };
  
  export default Session;
  