export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.CRC.fetch(new Request(url.toString(), request));
    }
    return env.CRC.fetch(request);
  },
};
