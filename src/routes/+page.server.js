/** @type {import('./$types').PageServerLoad} */
import { dev } from '$app/environment';


export async function load() {
    return {};
};

export const actions = {
    default: async ({ request }) => {
        console.log("Waitlist form action triggered");
        const data = await request.formData();
        // console.log("Form data:", data);

        const email = data.get('email');
        // console.log("Email:", email);
        let url = 'https://templatejam.com'

        if (dev) {
            url = 'http://localhost:5173'
        }

        // subscribe via api
        try {
            console.log("Subscribing to waitlist", email);
            fetch(`${url}/api/sendy/waitlist`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            console.log("Waitlist subscription successful");
        } catch (error) {
            console.error("Error subscribing to waitlist", error);
        }

        return;
    }
}