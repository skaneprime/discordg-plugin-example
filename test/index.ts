import * as Discord from "../dingir_libs/discord@0.4.4";
import Example from '../src';

Discord.Client.Invoke({
    client: { 
        intents: [
            Discord.IntentsBitField.Flags.Guilds,
            Discord.IntentsBitField.Flags.GuildMessages
        ]
    },
    plugins: {
        plugins: [Example]
    },
    token: "token"
}).then(client => {
    console.log(client?.user?.tag, "successfully started", client.services.plugins.getList());
})