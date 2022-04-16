import * as Discord from "../dingir_libs/discord@0.4.4";

export default Discord.Plugins.createPlugin(
    async function Example({ client }) {
        console.log("Hello! I'm loaded. Is Client Ready?:", client.isReady());

        return {
            onReady(client) {
                console.log("Logged as", client.user.tag);
            }
        }
    }
)