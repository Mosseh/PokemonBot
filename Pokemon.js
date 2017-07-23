const Discord = require("discord.js");
const token = "MzM4NjQ4MTc1ODIyODk3MTU0.DFYhXw.C9T5fxDe5HI12ZQOn4F0IyWbjTQ";
const prefix = "=";

const bot = new Discord.Client();

bot.on("ready", function () {
    console.log("Ready");
});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var msg = message.content.substring(prefix.length).split(" ");

    switch (msg[0].toLowerCase()) {
        case "commands":
            break;

        case "starter":
            var embed = new Discord.RichEmbed()
                .setThumbnail("http://orig04.deviantart.net/f60e/f/2017/042/0/7/pokeball_gif_by_termatior0-dayo3ow.gif")
                .setColor("#00c3ff")
                .setAuthor("Pokemon", "http://farm9.static.flickr.com/8635/27805240133_062d857e0b.jpg")
                .setTitle("Pick Your Starter Pokemon")
            message.channel.sendEmbed(embed);

            var embed = new Discord.RichEmbed()
                .setThumbnail("http://www.pokestadium.com/sprites/xy/charmander.gif")
                .setColor("#00c3ff")
                .setAuthor("Charmander", "http://farm9.static.flickr.com/8635/27805240133_062d857e0b.jpg")
                .addField("Type", "Fire").addField("Gender", "Male")

                .addField("Move", "Scratch")
                .addField("Stats")
            message.channel.sendEmbed(embed);
            break;

        case "roam":
            break;

        default:
            message.channel.send("Invalid Command. Type =Commands to view command list.");
            break;
    }
})

bot.login(token);