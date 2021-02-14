const Discord = require("discord.js");
const fs = require("fs");
const ayarlar = require('./ayarlar.json');

const client = new Discord.Client();
const config = require("./ayarlar.json");

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./komutlar/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Bekle biraz şu komutu yüklüyom ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(ayarlar.token);