import type { PageLoad } from "./$types"

export const load = (() => {
    // you can get this data from ANY SOURCE
    // fetch call here
    //gaphql client
    //manually change this object here whenever you want
    
    return {
        snippets: [
            {
                title: "Noble Six Snippet",
                language: "html",
                code: "<div>Lone Wolf, Threat Level: Hyper Lethal</div>",
                favorite: false
            },
            {
                title: "Master Chief Snippet",
                language: "html",
                code: "<div>THE Demon, Threat Level: Hyper Lethal</div>",
                favorite: false
            }
        ]
    }
}) satisfies PageLoad; // PageLoad -> PageData (in our front end)