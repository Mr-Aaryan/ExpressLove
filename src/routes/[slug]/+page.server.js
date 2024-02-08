import { DATABASE_ID, MESSAGES_COLLECTION_ID } from '$env/static/private';
import { databases } from '$lib/appwrite';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
        page_info: await databases.getDocument(
            DATABASE_ID,
            MESSAGES_COLLECTION_ID,
            params.slug
        ),
	};
}