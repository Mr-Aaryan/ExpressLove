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
            html: `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    * {
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }
                    .title {
                        width: fit-content;
                        margin: 0 auto;
                        color: #DC2626;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }
                    .box {
                        display: flex;
                        align-items: center;
                        margin: 20px auto;
                        width: fit-content;
                        border-radius: 5px;
                        margin: 20 auto;
                        padding: 10px;
                        width: 80%;
                        background-color: #DC2626;
                    }
                    .box .text {
                        color: white;
                        font-size: 25px;
                        display: flex;
                        text-align: center;
                        line-height: 35px;
                        letter-spacing: 1;
                    }
                </style>
            </head>
            <body>
                <main>
                    <h1 class="title">Express Love</h1>
                    <div class="box">
                        <div class="text">
                            Congratulations, ${receiver_name} accepted your proposal.
                        </div>
                    </div>
                </main>
            </body>
            </html>`
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
            // html: "Sorry! "+ receiver_name +" said <b>NO</b>."
            html: `<!DOCTYPE html>
            <html>
            <head>
                <style>
                    * {
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }
                    .title {
                        width: fit-content;
                        margin: 0 auto;
                        color: #DC2626;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }
                    .box {
                        display: flex;
                        align-items: center;
                        margin: 20px auto;
                        width: fit-content;
                        border-radius: 5px;
                        margin: 20 auto;
                        padding: 10px;
                        width: 80%;
                        background-color: #0284C7;
                    }
                    .box .text {
                        color: white;
                        font-size: 25px;
                        display: flex;
                        text-align: center;
                        line-height: 35px;
                        letter-spacing: 1;
                    }
                </style>
            </head>
            <body>
                <main>
                    <h1 class="title">Express Love</h1>
                    <div class="box">
                        <div class="text">
                            Sorry, ${receiver_name} rejected your proposal.
                        </div>
                    </div>
                </main>
            </body>
            </html>`
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
