module.exports = {
  Admins: ["874657371459321900", "772982729104293919"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "OTIzOTg5MzM4MDQ2NDcyMjYy.YcYCIQ.YT7fu8aJ2jPM2wUjqUJPM7KHOGY", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "890736561770082314", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "VR2EhcS75nuzL1tf3QwJf-_avRI5gYFv", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "daniel", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "55fa604a9e564165b1aa7b3818d701ac", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "f1f2741542564750b635e4d514e90496", //Spotify Client Secret
  },
};
