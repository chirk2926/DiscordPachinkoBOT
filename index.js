const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.application.commands.create({
    name: 'pachinko',
    description: '大当たり確率ぅ319分のイチィ。',
    options: [
      {
        name: 'user',
        description: '機種選択(ユーザー)',
        type: 'USER',
        required: true
      }
    ]
  });
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'pachinko') {
    const user = interaction.options.getUser('user');
    if (!user) {
      return interaction.reply('そんな機種ないよ');
    }

    // 319分の1の確率でタイムアウトを与える
    const chance = Math.floor(Math.random() * 319) + 1;
    if (chance !== 1) {
      // 319分の1の確率でタイムアウトを与える
const chance = Math.floor(Math.random() * 319) + 1;
if (chance !== 1) {
  const randomNumber = Math.floor(Math.random() * 1000); // 0から999までのランダムな数字を生成
  return interaction.reply(`ざんねぇーんｗ♡は♡ず♡れ♡大当たり確率ぅはぁ　319分のいちぃぃぃ (${randomNumber})`);
}

    }

    const guild = interaction.guild;
    const member = guild.members.cache.get(user.id);
    if (!member) {
      return interaction.reply('そんな人いないね');
    }

    const role = guild.roles.cache.find(role => role.name === 'Timeout'); // Timeoutの部分をタイムアウト用のロール名を作成し指定してください

    // ユーザーにタイムアウト用のロールを付与
    await member.roles.add(role);w

    // 5分後にタイムアウト用のロールを削除
    setTimeout(async () => {
      await member.roles.remove(role);
    }, 5 * 60 * 1000);

    return interaction.reply(`Congratulations！ 777 大当たり！！！さぁRUSH突入なるか！');

  }
});

client.login('YOUR TOKEN');
