const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });

client.once('ready', () => {
    console.log('Ready!'); // 起動した時に"Ready!"とコンソールに出力する
});

client.on("guildMemberAdd", member => {
    if (member.guild.id !== "利用するサーバーId") return; // 指定のサーバー以外では動作しないようにする
    member.guild.channels.cache.get("送信するチャンネルId").send(`${member.user}が参加しました！`);
});

client.login("先ほどメモしたToken");