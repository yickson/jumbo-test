require('dotenv').config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASS;
const API_KEY = process.env.API_KEY;
// Script for get User Profile

async function getUserProfile() {
    // Get Auth Token
    const response = await fetch("https://apijumboweb.smdigital.cl/user/api/v1/vtexid/pub/authentication/start", {
        "headers": {
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "x-api-key": API_KEY,
            "Referer": "https://www.jumbo.cl/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });

    const authData = await response.json();
    const authenticationToken = authData.authenticationToken;

    // Get User Profile
    const responseUser = await fetch("https://apijumboweb.smdigital.cl/user/api/v1/vtexid/pub/authentication/classic/validate", {
        "headers": {
            "accept": "*/*",
            "accept-language": "es-VE,es-419;q=0.9,es;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-api-key": "IuimuMneIKJd3tapno2Ag1c1WcAES97j",
            "Referer": "https://www.jumbo.cl/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": JSON.stringify({
            authenticationToken,
            login: EMAIL,
            password: PASSWORD
        }),
        "method": "POST"
    });

    const userProfile = await responseUser.json();

    console.log(userProfile.user);

    return userProfile.user;
}

getUserProfile();


