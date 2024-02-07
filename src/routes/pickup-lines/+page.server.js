import { DATABASE_ID, PICKUP_LINE_COLLECTION_ID } from '$env/static/private';
import { ID, Query } from 'appwrite';
import { databases } from '$lib/appwrite';

export async function load() {
	return {
		pickup_lines: await databases.listDocuments(
            DATABASE_ID,
            PICKUP_LINE_COLLECTION_ID,
            [Query.orderDesc('$createdAt')]
        ),
	};
}