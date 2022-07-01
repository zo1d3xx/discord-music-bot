module.exports.run = (client) => {
    console.log(`• ${client.user.username} Онлайн!\nСерверов: ${client.guilds.cache.size} | Пользователей: ${client.users.cache.size}`)

    client.user.setActivity('Cemetery', { type: "PLAYING", url: "https://discord.gg/zd3wMDeXzY" });
}
