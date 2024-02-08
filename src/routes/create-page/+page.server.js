import { DATABASE_ID, MESSAGES_COLLECTION_ID } from '$env/static/private';
import { ID } from 'appwrite';
import { databases } from '$lib/appwrite';
import { redirect } from '@sveltejs/kit';


/** @type {import('./$types').Actions} */
export const actions = {
	create_page: async ({request}) => {
		const data = await request.formData();
        const receiver_name = data.get('receiver_name');
        const message = data.get('message');
        const email = data.get('email');
        const sender_name = data.get('sender_name');

        const promise = await databases.createDocument(DATABASE_ID, MESSAGES_COLLECTION_ID, ID.unique(), {
            receiver_name,
            message,
            email,
            sender_name
        });
        return redirect(307, '/succeed/'+ promise.$id)
	},
};
