const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `i loves money`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `<@550089620675756052>`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `developer`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[none]()`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 
