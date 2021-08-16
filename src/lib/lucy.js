import { LucentClient } from "lucentcms-node";

export function lucent() {
    let config = {
        channel: "f1e2db82-f416-43b4-9972-74045b6c28e9",
        access_key: "demo_vZ5wazttmA0entRWxMHGqMESu51oiod4",
        locale: "en-US", // optional
    }

    let lucy = new LucentClient(config)

    console.log("config",config,"lucy",lucy)

    return lucy;
}