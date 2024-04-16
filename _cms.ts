import lumeCMS, { GitHub } from "lume/cms.ts";
import { Octokit } from "npm:octokit";

const githubToken = Deno.env.get("LUME_CMS_GITHUB_TOKEN");
const adminPw = Deno.env.get("LUME_CMS_ADMIN_PASS");

if (!adminPw) {
    console.error("No LUME_CMS_ADMIN_PASS set!");
    Deno.exit(1);
}

const storageOf = (path: string) => `${!githubToken ? "src:" : "gh:src/"}${path}`;

const cms = lumeCMS({
    site: {
        name: "Gysinge Bryggeri",
        url: "https://gysingebryggeri.se",
    },
    auth: {
        method: "basic",
        users: {
            ...(adminPw ? { admin: adminPw } : {}),
        },
    },
});

if (githubToken) {
    cms.storage(
        "gh",
        new GitHub({
            client: new Octokit({ auth: githubToken }),
            owner: "johanbrook",
            repo: "gysingebryggeri",
        }),
    );
}

// COLLECTIONS

cms.collection("Öl: Visas på sidan 'Produkter'", storageOf("beers/*.md"), [
    {
        name: "title",
        label: "Namn",
        type: "text",
        attributes: {
            required: true,
        },
    },
    {
        name: "content",
        label: "Beskrivning",
        type: "markdown",
        attributes: {
            required: true,
        },
    },
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
    {
        name: "color",
        label: "Bakgrundsfärg på etikett",
        type: "color",
        attributes: {
            required: true,
        },
    },
    {
        name: "color_text",
        label: "Textfärg på etikett",
        description: `Om bakgrunden är mörk, välj "Ljus". Om bakgrundsfärgen är ljus, välj "Mörk".`,
        type: "select",
        value: "light",
        options: [
            { value: "light", label: "Ljus" },
            { value: "dark", label: "Mörk" },
        ],
        attributes: {
            required: true,
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
    .document("Ölprovning", storageOf("beer-tasting.md"), [
        //
        "title: text!",
        "content: markdown!",
    ])
    .document("Kontakt", storageOf("contact.md"), [
        //
        "title: text!",
        "content: markdown!",
        "map_url: url",
    ])
    .upload("uploads", storageOf("public/uploads"));

export default cms;
