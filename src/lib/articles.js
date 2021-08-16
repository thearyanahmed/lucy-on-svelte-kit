import { lucent } from "$lib/lucy.js";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function getArticles() {
    let lucentClient = lucent()

    return lucentClient.get('documents',{})
}