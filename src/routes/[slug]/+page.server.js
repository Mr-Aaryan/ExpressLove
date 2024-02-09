import { DATABASE_ID, MESSAGES_COLLECTION_ID, GOOGLE_EMAIL } from '$env/static/private';
import { databases } from '$lib/appwrite';
import transporter from '$lib/emai_setup.server';
import { redirect } from '@sveltejs/kit';

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

/** @type {import('./$types').Actions} */
export const actions = {
	yes_mail: async ({request}) => {
        if (request.method !== 'POST') {
            return { status: 405, body: 'Method Not Allowed' };
        }
        const formData = await request.formData()
        const receiver_name = formData.get("receiver_name")
        const email = formData.get("email")

        const message = {
            from: GOOGLE_EMAIL,
            to: email,
            subject: "Proposal Accepted",
            html: "Congratulations! "+ receiver_name +" said <b>YES</b>."
        };

        const sendEmail  = async (message) => {
            await new Promise((resolve, reject) => {
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });
        };

        await sendEmail(message);

        return redirect(308, '/acceptance/')
	},

    no_mail: async ({request}) => {
        if (request.method !== 'POST') {
            return { status: 405, body: 'Method Not Allowed' };
        }
        const formData = await request.formData()
        const receiver_name = formData.get("receiver_name")
        const email = formData.get("email")

        const message = {
            from: GOOGLE_EMAIL,
            to: email,
            subject: "Proposal Rejected",
            html: "Sorry! "+ receiver_name +" said <b>NO</b>."
        };

        const sendEmail  = async (message) => {
            await new Promise((resolve, reject) => {
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });
        };

        await sendEmail(message);

        return redirect(308, '/rejection/')
	},
};
