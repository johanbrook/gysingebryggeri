import lumeCMS, { GitHub } from "lume/cms.ts";
import { Octokit } from "npm:octokit";

const useLocalFs = Deno.env.get("LUME_CMS_LOCAL");

const cms = lumeCMS({
    site: {
        name: "Gysinge Brygger",
        url: "https://gysingebryggeri.se",
    },
    auth: {
        method: "basic",
        users: {
            johan: "pass",
        },
    },
})
    // DOCUMENTS
    .document("landing: Redigera förstasidan", "src:index.md", [
        //
        "title: text",
        "content: markdown",
    ]);

if (useLocalFs) {
    cms.storage("files", "public");
    cms.upload("uploads", "files:uploads");
} else {
    cms.storage(
        "gh",
        new GitHub({
            client: new Octokit({ auth: Deno.env.get("LUME_CMS_GITHUB_TOKEN") }),
            owner: "oscarotero",
            repo: "test",
        }),
    );

    cms.upload("uploads", "gh:src/public");
}

export default cms;
