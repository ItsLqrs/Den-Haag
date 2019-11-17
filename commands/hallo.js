const discord = require("discord.js");

module,exports.run = async(bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription ("Bot info")
        .setColor ("#29e53f")
        .setThumbmail (botIcon)
        .addfield ("Bot Naam", bot.user.name)
        .addfield ("Gemaakt op", bot.user.createdAt);

    return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "Info"
}