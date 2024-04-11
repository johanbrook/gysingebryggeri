import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import og_images from "lume/plugins/og_images.ts";

const site = lume({
    src: "./src",
    dest: "./build",
});

site
    //
    .copy('public', '.')
    .use(date())
    .use(
        postcss({
            includes: "_css",
        }),
    )
    .use(nunjucks())
    .use(og_images())
    // DATA
    .data("layout", "layouts/main.njk");

export default site;
