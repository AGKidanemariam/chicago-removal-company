export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.MY-BINDINGS.fetch(new Request(url.toString(), request));
    }
    return env.MY-BINDINGS.fetch(request);
  },
};
