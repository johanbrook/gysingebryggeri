// Runs the CMS
import config from "./_cms.ts";

const app = config.init();

Deno.serve({
    port: 8000,
    handler: app.fetch,
});
