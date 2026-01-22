// Cloudflare Workers script for serving static assets
export default {
  async fetch(request, env, ctx) {
    return env.ASSETS.fetch(request);
  },
};