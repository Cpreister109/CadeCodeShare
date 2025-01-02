import { writable, get } from "svelte/store";

// SnippetStore
// Code Snippet
// Title, Code, Language, Favorite
export const snippetStore = writable<CodeSnippet[]>([]); // [codesnippet1, codesnippet2, etc.]

// addSnippet
export function addSnippet(input: CodeSnippetInput) {
    let snippets = get(snippetStore); // $snippetStore -> listens to changes to the valeu of snippetStore
    snippetStore.update(() => { // Code Snippet[]
        return [ { ...input, favorite: false}, ...snippets]
    })
}

//deleteSnippet
export function deleteSnippet(index: number) { // with database you can delete by id
    let snippets = get(snippetStore);
    snippets.splice(index, 1); // removes one item from index clarified by user
    snippetStore.update(() => {
        return snippets;
    })
}

//toggleFavorite
export function toggleFavorite(index: number) { 
    let snippets = get(snippetStore); 
    snippetStore.update(() => { // [ { favorite: true }, { favorite: false } ] 1
        return snippets.map((snippet, snippetIndex) => {
            if(snippetIndex === index) {
                return { ...snippet, favorite: !snippet.favorite}
            }
            return snippet;
        }); // List created like this -> [ "1", "2", "3", "CHANGED OBJECT" ]
    });
}
