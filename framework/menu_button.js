module.exports = {
  button: {
    text: "Menu",
    url: {
      "View Channel": "https://whatsapp.com/channel/0029VaiVmtX4Y9lpUssihA1x",
      "bot channel": "https://whatsapp.com/channel/0029VaZpBvk17EmqqDyMrG2i"
    },
    click: async (zk, dest) => {
      const url = button.url[button.text];
      zk.openUrl(url);
        text: "Menu",
        buttons: [
          {
            text: "View Channel",
            url: "https://whatsapp.com/channel/0029VaiVmtX4Y9lpUssihA1x"
          },
          {
            text: "View Group",
            url: "https://chat.whatsapp.com/I2Lad1yJIOA4QwWnxyszAZ"
          }
        ]
      });
    }
  }
};
