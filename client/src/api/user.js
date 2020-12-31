import baseUrl from "../config";

const User = {
    current() {
        return fetch(`${baseUrl}/users/current`, {
            method: "GET",
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch (`${baseUrl}/users`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    update(id, params) {
        return fetch(`${baseUrl}/users/${id}`, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(params)
        }).then(res => res.json());
    },
};

export default User;
