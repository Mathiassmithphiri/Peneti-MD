const { registerCommand } = require('../bdd/lol');
const { button } = require('../framework/menu_button');
const { prefixe } = require('../set');

registerCommand({
  name: "menu2",
  categorie: "General"
  usage: `${prefixe}menu2`
}, async (dest, zk, commandOptions) => {
  const { ms, respond, authorName, mybotpic } = commandOptions;
  const commands = {};
  const categories = [];

  registerCommand.commandModules.forEach((command) => {
    if (!commands[command.categorie]) {
      commands[command.categorie] = [];
      categories.push(command.categorie);
    }
    commands[command.categorie].push(command.nomCom);
  });

  categories.sort();
  Object.keys(commands).forEach((categorie) => {
    commands[categorie].sort();
  });

  let menuMsg = `Sup boss \n\n`;
  let infoMsg = `**BOT INFORMATION** 
________________________
|😎😎😎😎😎😎😎😎😎😎😎
|😎<<<<<<<<<<<<<<<<<<<<<
|😎| *Prefix* : ${prefix} 
|😎| *Owner* : ${authorName} 
|😎| *Mode* : ${process.env.NODE_ENV} 
|😎| *Commands* : ${registerCommand.commandModules.length} 
|😎| *Date* : ${new Date().toLocaleDateString()} 
|😎| *Time* : ${new Date().toLocaleTimeString()} 
|😎| *Memory* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())} 
|😎| *Platform* : ${os.platform()} 
|😎| *Developer* : M Peneti 
|😎>>>>>>>>>>>>>>>>>>>> 
|😎😎😎★ninja★🤖 \n\n`;
------------------------

  menuMsg += infoMsg;

  categories.forEach((categorie) => {
  menuMsg += `${categorie}\n`;
  commands[categorie].forEach((command) => {
    menuMsg += `• ${command}\n`;
  });
  menuMsg += `\n`;
});
menuMsg += `${button.text}\n`;
    respond(menuMsg, {
      buttons: [button]
  });

  const link = mybotpic();
  if (link.match(/\.(mp4|gif)$/i)) {
    try {
      zk.sendMessage(dest, { video: { url: link }, caption: menuMsg, footer: "I am Peneti-MD, my creator is M Peneti", gifPlayback: true }, { quoted: ms });
    } catch (e) {
      console.log("Menu error: " + e);
      respond("Menu error: " + e);
    }
  } else if (link.match(/\.(jpeg|png|jpg)$/i)) {
    try {
      zk.sendMessage(dest, { image: { url: link }, caption: menuMsg, footer: "I am Peneti-MD, developed by Mathis" }, { quoted: ms });
    } catch (e) {
      console.log("Menu error: " + e);
      respond("Menu error: " + e);
    }
  } else {
    respond(menuMsg);
  }
});
