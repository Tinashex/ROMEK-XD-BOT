export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "ʀᴏᴍᴇᴋ-xᴅ-ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "ʀᴏᴍᴇᴋ-xᴅ-ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "ʀᴏᴍᴇᴋ-xᴅ-ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "ʀᴏᴍᴇᴋ-xᴅ-ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "ʀᴏᴍᴇᴋ-xᴅ-ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "ʀᴏᴍᴇᴋ-xᴅ- ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
