const headers = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  },
};
const urlBackend = "http://127.0.0.1:3000";

class FetchHttp {
  static async get(url) {
    const res = await fetch(urlBackend + url, { method: "GET", ...headers });
    return await res.json();
  }

  static async post(url, { nomeColaborador }) {
    const res = await fetch(urlBackend + url, {
      method: "POST",
      ...headers,
      body: JSON.stringify({
        nomeColaborador,
      }),
    });

    if (res.status == 201) {
      return await res.json();
    } else {
      const err = new Error(res.statusText);
      throw err;
    }
  }
}

module.exports = FetchHttp;
