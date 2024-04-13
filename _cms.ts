import lumeCMS, { GitHub } from "lume/cms.ts";
import { Octokit } from "npm:octokit";

const githubToken = Deno.env.get("LUME_CMS_GITHUB_TOKEN");

const storageOf = (path: string) => `${!githubToken ? "src:" : "gh:src/"}${path}`;

const cms = lumeCMS({
    site: {
        name: "Gysinge Bryggeri",
        url: "https://gysingebryggeri.se",
    },
    auth: {
        method: "basic",
        users: {
            johan: "pass",
        },
    },
})
    // COLLECTIONS

    .collection("Öl: Visas på sidan 'Produkter'", storageOf("beers/*.md"), [
        //
        "title: text!",
        "content: markdown!",
        {
            name: "alcohol",
            type: "number",
            description: "Fyll i decimalnummer utan procenttecken. Använd punkt istället för komma.",
            attributes: {
                required: true,
                step: 0.1,
                min: 0,
            },
        },
    ])

    // DOCUMENTS
    .document("Hem", storageOf("index.md"), [
        //
        "heading: text!",
        "content: markdown!",
    ])
    .document("Om", storageOf("about.md"), [
        //
        "title: text!",
        "content: markdown!",
    ])
    .document("Produkter", storageOf("products.md"), [
        //
        "title: text!",
        "content: markdown",
    ])
    .document("Ölprovning", storageOf("beer-tasting.md"), [
        //
        "title: text!",
        "content: markdown!",
    ])
    .document("Kontakt", storageOf("contact.md"), [
        //
        "title: text!",
        "content: markdown!",
    ])
    .upload("uploads", storageOf("public/uploads"));

if (githubToken) {
    cms.storage(
        "gh",
        new GitHub({
            client: new Octokit({ auth: githubToken }),
            owner: "oscarotero",
            repo: "test",
        }),
    );
}

export default cms;
