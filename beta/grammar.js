// noinspection SpellCheckingInspection

import {get} from "../main.js";

const start = performance.now();

const message = {
    200: `GRAMMAR => PASS`,
    404: `GRAMMAR => MSG IS NULL`,
    500: `GRAMMAR => SERVER ERR`,
    403: `GRAMMAR => BAD RESPONSE`,
    408: `GRAMMAR => TIMED OUT`
}

get("/api/grammar?text=helo+how+r+u", true).then(data => {
    const elapsed = Math.round(performance.now() - start);
    if (message[data?.status]) return console.log(`${message[data?.status]} (${elapsed}ms)`);

    console.log(`GRAMMAR => FAIL (${elapsed}ms)`);
})