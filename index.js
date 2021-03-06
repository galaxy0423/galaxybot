const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format");
const welcomeChannelName = "신입한명추가요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '>help를 쳐보세요.' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'no pain') {
    return message.reply('no gain');
  }

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == '>무') {
    return message.reply('천재');
  }

  if(message.content == '>휴턴') {
    return message.reply('마음씨 좋으신 분');
  }

  if(message.content == '>싸테') {
    return message.reply('우리들의 가수이자 고인물, 선생님');
  }

  if(message.content == '>티머') {
    return message.reply('우리들의 친구이자, 마음씨 착하신분');
  }

  if(message.content == '>선주') {
    return message.reply('귀여우시고 섹시하신(?)분');
  }

  if(message.content == '>미로') {
    return message.reply('우리들의 귀여운 동생');
  }

  if(message.content == '>쪼꼬카레') {
    return message.reply('우리들의 선배이자 마음씨 착하신분');
  }

  if(message.content == '블루스크린') {
    return message.reply('https://tenor.com/view/chris-turns-blue-kid-turns-blue-and-fucking-dies-chris-turns-blue-and-fucking-dies-chris-turns-blue-and-dies-chris-gif-16761628');
  }

  if(message.content == '화딱지나네') {
    return message.reply('워워 릴렉스 캄다운');
  }

  if(message.content == '레식') {
    return message.reply('꿀잼');
  }

  if(message.content == '탈콥') {
    return message.reply('공포겜');
  }

  if(message.content == '>농담') {
    return message.reply('A : 님 어금니가 영어로 뭐임? B : 몰라 A : 님 공부 잘하잖아 B : 근데 A : 그니까 어금니가 영어로 뭐냐고 B : 몰라 A : ㅅㅂ');
  }

  if(message.content == '>si') {
    let embed = new Discord.RichEmbed()
    let img = 'https://media.discordapp.net/attachments/739067472400875611/739123139296100403/galaxy.png?width=467&height=467';
    var duration = moment.duration(client.uptime).format(" D [일], H [시간], m [분], s [초]");
    embed.setColor('#32009D')
    embed.setAuthor('server info of 우주 BOT', img)
    embed.setFooter(`우주 BOT`)
    embed.addBlankField()
    embed.addField('RAM usage',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('running time', `${duration}`, true);
    embed.addField('user',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('server',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('Discord.js',   `v${Discord.version}`, true);
    embed.addField('Node',         `${process.version}`, true);
    
    let arr = client.guilds.array();
    let list = '';
    list = `\`\`\`css\n`;
    
    for(let i=0;i<arr.length;i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField('list:',        `${list}`);

    embed.setTimestamp()
    message.channel.send(embed);
  }

  if(message.content == '>제작자') {
    let img = 'https://media.discordapp.net/attachments/725916808405712978/738749417535832064/KakaoTalk_20200514_185244621_02.jpg?width=461&height=467';
    let embed = new Discord.RichEmbed()
      .setTitle('Galaxy')
      .setURL('http://www.twitch.tv/galaxy0423')
      .setAuthor('럭시', img, 'https://discord.gg/GKZMnp')
      .setThumbnail(img)
      .addBlankField()
      .addField('트위치', 'http://www.twitch.tv/galaxy0423')
      .addField('유튜브', 'https://www.youtube.com/channel/UCz7B5q7wPM_7NxnlTszIPjg', true)
      .addField('디코', 'https://discord.gg/GKZMnp', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('럭시가 만듬', img)

    message.channel.send(embed)
  } else if(message.content == '>help') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '>help', desc: 'help'},
      {name: 'ping', desc: '현재 핑 상태'},
      {name: '>si', desc: '현재 봇 정보'},
      {name: '>제작자', desc: '제작자 소개'},
      {name: '>전체공지', desc: 'dm으로 전체 공지 보내기'},
      {name: '>전체공지2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
      {name: '>청소', desc: '텍스트 지움'},
      {name: '>초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '>초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
      {name: '>닉네임', desc: '궁금하시면 쳐보슈(없으면 럭시에게 갠디로신청 가능함다)'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 우주 BOT', helpImg)
      .setColor('#32009D')
      .setFooter(`우주 BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '>초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '>초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('>전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('>전체공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of 우주 BOT')
        .setColor('#32009D')
        .setFooter(`우주 BOT`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('>전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('>전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('>청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('>청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 500 < clearLine)) {
      message.channel.send("1부터 500까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);