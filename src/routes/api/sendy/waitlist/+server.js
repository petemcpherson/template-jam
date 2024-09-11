/** @type {import('./$types').RequestHandler} */
import { json } from "@sveltejs/kit";
import { SENDY_API_KEY } from "$env/static/private";


export const POST = async ({ request }) => {
    console.log("starting API waitlist subscription");
    const data = await request.json();
    console.log("API subscription data:", data);
    const url = "https://doyouevenblog.com/sendy/subscribe";

    const payload = {
        api_key: SENDY_API_KEY,
        email: data.email,
        list: 'b7GN1RUsk8wQLrAyzfHuMg',
    }

    // console.log("Waitlist zap triggered. Data: ", data)

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        return json({ response: 'email optin success' }, { status: 200 })
    } else {
        return json({ response: 'email optin failed' }, { status: 400 })
    }

}