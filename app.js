const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
document.querySelectorAll('title')[0].innerHTML = `${name} | SweatyStats`
const navs = document.querySelectorAll(".nav-item");
const key = 'd5db2401-3d43-4ece-a681-a013df180a3c';

let data = {};
let selected;

const colors = {
  'DARK_RED': '#AA0000',
  'RED': '#FF5555',
  'GOLD': '#FFAA00',
  'YELLOW': '#FFFF55',
  'DARK_GREEN': '#00AA00',
  'GREEN': '#55FF55',
  'AQUA': '#55FFFF',
  'DARK_AQUA': '#00AAAA',
  'DARK_BLUE': '#0000AA',
  'BLUE': '#5555FF',
  'LIGHT_PURPLE': '#FF55FF',
  'DARK_PURPLE': '#AA00AA',
  'WHITE': '#FFFFFF',
  'GRAY': '#AAAAAA',
  'DARK_GRAY': '#555555',
  'BLACK': '#000000',
}

const ranking = (rank, color) => {
  let final;
  if (rank === 'VIP') {
    final = [
      ['[VIP]', '#55FF55']
    ];
  } else if (rank === 'VIP_PLUS') {
    final = [
      ['[VIP', '#55FF55'],
      ['+', '#FFAA00'],
      [']', '#55FF55']
    ];
  } else if (rank === 'MVP') {
    final = [
      ['[MVP]', '#55FFFF']
    ];
  } else if (rank === 'MVP_PLUS') {
    final = [
      ['[MVP', '#55FFFF'],
      ['+', colors[color]],
      [']', '#55FFFF']
    ];
  } else if (rank === 'MVP_PLUS_PLUS') {
    final = [
      ['[MVP', '#FFAA00'],
      ['++', colors[color]],
      [']', '#FFAA00']
    ];
  } else if (rank === 'YOUTUBER') {
    final = [
      ['[', '#AA0000'],
      ['YOUTUBE', 'lightgray'],
      [']', '#AA0000']
    ];
  } else if (rank === 'HELPER') {
    final = [
      ['[HELPER]', '#0000AA']
    ];
  } else if (rank === 'MODERATOR') {
    final = [
      ['[MODERATOR]', '#00AA00']
    ];
  } else {
    final = [
      ['', '#AAAAAA']
    ];
  }
  return final;
};


navs.forEach(button => {
  button.addEventListener('click', (e) => {
    updateSelected(button.firstElementChild.firstElementChild.innerHTML);

  });
})

document.getElementById('show').addEventListener('click', (e) => {
  
  guildmems();
});


function guildmems() {
  let i = document.getElementById(selected).children[6].children.length - 1;
  for(let x = i; x < data.guild.guild.members.length; x++) {
    
    fetch(`https://api.hypixel.net/player?key=${key}&uuid=${data.guild.guild.members[x].uuid}`).then(response => response.json()).then(player => {
      document.getElementById(selected).children[6].innerHTML += `<span><a target="_blank" href="stats.html?name=${player.player.displayname}">${player.player.displayname} - ${data.guild.guild.members[x].rank}</span><br>`
      //console.log(player)
    }).catch(err => console.log(err));
    
  }
}

const updateInterface = (stuff) => {
  if (selected === "Network") {
    const prefix = ranking(stuff.rank, stuff.pluscolor).map(arr => {
      return `<span style="color: ${arr[1]}">${arr[0]}</span>`;

    }).join('') + ` <span style="color: ${ranking(stuff.rank, stuff.pluscolor)[0][1]}">${stuff.name}</span>`;
    
    const elems = document.getElementById(selected).children;
    console.log(stuff);
    let checkguild = stuff.guild.guild !== null ? ` <span style="color: ${colors[stuff.guild.guild.tagColor]}">[${stuff.guild.guild.tag}]` : '';
    elems[0].innerHTML = prefix + checkguild;
    elems[2].firstElementChild.innerHTML = stuff.rank;
    elems[3].firstElementChild.innerHTML = stuff.level;
    elems[4].firstElementChild.innerHTML = stuff.nameHistory.join(', ');
    elems[5].firstElementChild.innerHTML = stuff.karma;
    elems[6].firstElementChild.innerHTML = stuff.lastLogin;
    if (stuff.guild.guild !== null) {
      elems[8].firstElementChild.innerHTML = stuff.guild.guild.name;
      elems[9].firstElementChild.innerHTML = stuff.guild.guild.members.length;
    } else {
      elems[7].style.display = 'none';
      elems[8].style.display = 'none';
      elems[9].style.display = 'none';
    }
    if (stuff.status.online === false) {
      elems[12].firstElementChild.innerHTML = 'offline';
    } else {
      elems[12].firstElementChild.innerHTML = `Online, playing: ${stuff.status.gameType}, mode: ${stuff.status.mode}`;
    }
    elems[14].innerHTML = `<a target="_blank" href="https://sky.lea.moe/stats/${stuff.name}">Skyblock Stats</a>`;
  } else if (selected === "Bedwars") {
    const prefix = ranking(stuff.rank, stuff.pluscolor).map(arr => {
      return `<span style="color: ${arr[1]}">${arr[0]}</span>`;

    }).join('') + ` <span style="color: ${ranking(stuff.rank, stuff.pluscolor)[0][1]}">${stuff.name}</span>`;
    let checkguild = stuff.guild.guild !== null ? ` <span style="color: ${colors[stuff.guild.guild.tagColor]}">[${stuff.guild.guild.tag}]</span>` : '';
    const elems = document.getElementById(selected).children;
    elems[0].innerHTML = prefix + checkguild + ' - Bedwars';
    elems[2].firstElementChild.innerHTML = stuff.stats.bedwars.coins;
    elems[3].firstElementChild.innerHTML = stuff.stats.bedwars.winstreak;
    elems[4].firstElementChild.innerHTML = stuff.stats.bedwars.level;
    //kills
    elems[5].children[1].firstElementChild.children[1].innerHTML = stuff.stats.bedwars.solo.kills || 0;
    elems[5].children[1].firstElementChild.children[2].innerHTML = stuff.stats.bedwars.doubles.kills || 0;
    elems[5].children[1].firstElementChild.children[3].innerHTML = stuff.stats.bedwars.threes.kills || 0;
    elems[5].children[1].firstElementChild.children[4].innerHTML = stuff.stats.bedwars.fours.kills || 0;
    elems[5].children[1].firstElementChild.children[5].innerHTML = stuff.stats.bedwars.fourvfour.kills || 0;
    elems[5].children[1].firstElementChild.children[6].innerHTML = stuff.stats.bedwars.overall.kills || 0;
    //kills
    elems[5].children[1].children[1].children[1].innerHTML = stuff.stats.bedwars.solo.deaths || 0;
    elems[5].children[1].children[1].children[2].innerHTML = stuff.stats.bedwars.doubles.deaths || 0;
    elems[5].children[1].children[1].children[3].innerHTML = stuff.stats.bedwars.threes.deaths || 0;
    elems[5].children[1].children[1].children[4].innerHTML = stuff.stats.bedwars.fours.deaths || 0;
    elems[5].children[1].children[1].children[5].innerHTML = stuff.stats.bedwars.fourvfour.deaths || 0;
    elems[5].children[1].children[1].children[6].innerHTML = stuff.stats.bedwars.overall.deaths || 0;
    //kills
    elems[5].children[1].children[2].children[1].innerHTML = stuff.stats.bedwars.solo.kdr || 0;
    elems[5].children[1].children[2].children[2].innerHTML = stuff.stats.bedwars.doubles.kdr || 0;
    elems[5].children[1].children[2].children[3].innerHTML = stuff.stats.bedwars.threes.kdr || 0;
    elems[5].children[1].children[2].children[4].innerHTML = stuff.stats.bedwars.fours.kdr || 0;
    elems[5].children[1].children[2].children[5].innerHTML = stuff.stats.bedwars.fourvfour.kdr || 0;
    elems[5].children[1].children[2].children[6].innerHTML = stuff.stats.bedwars.overall.kdr || 0;
    //kills
    elems[5].children[1].children[3].children[1].innerHTML = stuff.stats.bedwars.solo.finals || 0;
    elems[5].children[1].children[3].children[2].innerHTML = stuff.stats.bedwars.doubles.finals || 0;
    elems[5].children[1].children[3].children[3].innerHTML = stuff.stats.bedwars.threes.finals || 0;
    elems[5].children[1].children[3].children[4].innerHTML = stuff.stats.bedwars.fours.finals || 0;
    elems[5].children[1].children[3].children[5].innerHTML = stuff.stats.bedwars.fourvfour.finals || 0;
    elems[5].children[1].children[3].children[6].innerHTML = stuff.stats.bedwars.overall.finals || 0;
    //kills
    elems[5].children[1].children[4].children[1].innerHTML = stuff.stats.bedwars.solo.fdeaths || 0;
    elems[5].children[1].children[4].children[2].innerHTML = stuff.stats.bedwars.doubles.fdeaths || 0;
    elems[5].children[1].children[4].children[3].innerHTML = stuff.stats.bedwars.threes.fdeaths || 0;
    elems[5].children[1].children[4].children[4].innerHTML = stuff.stats.bedwars.fours.fdeaths || 0;
    elems[5].children[1].children[4].children[5].innerHTML = stuff.stats.bedwars.fourvfour.fdeaths || 0;
    elems[5].children[1].children[4].children[6].innerHTML = stuff.stats.bedwars.overall.fdeaths || 0;
    //kills
    elems[5].children[1].children[5].children[1].innerHTML = stuff.stats.bedwars.solo.fkdr || 0;
    elems[5].children[1].children[5].children[2].innerHTML = stuff.stats.bedwars.doubles.fkdr || 0;
    elems[5].children[1].children[5].children[3].innerHTML = stuff.stats.bedwars.threes.fkdr || 0;
    elems[5].children[1].children[5].children[4].innerHTML = stuff.stats.bedwars.fours.fkdr || 0;
    elems[5].children[1].children[5].children[5].innerHTML = stuff.stats.bedwars.fourvfour.fkdr || 0;
    elems[5].children[1].children[5].children[6].innerHTML = stuff.stats.bedwars.overall.fkdr || 0;
    //kills
    elems[5].children[1].children[6].children[1].innerHTML = stuff.stats.bedwars.solo.wins || 0;
    elems[5].children[1].children[6].children[2].innerHTML = stuff.stats.bedwars.doubles.wins || 0;
    elems[5].children[1].children[6].children[3].innerHTML = stuff.stats.bedwars.threes.wins || 0;
    elems[5].children[1].children[6].children[4].innerHTML = stuff.stats.bedwars.fours.wins || 0;
    elems[5].children[1].children[6].children[5].innerHTML = stuff.stats.bedwars.fourvfour.wins || 0;
    elems[5].children[1].children[6].children[6].innerHTML = stuff.stats.bedwars.overall.wins || 0;
    //kills
    elems[5].children[1].children[7].children[1].innerHTML = stuff.stats.bedwars.solo.losses || 0;
    elems[5].children[1].children[7].children[2].innerHTML = stuff.stats.bedwars.doubles.losses || 0;
    elems[5].children[1].children[7].children[3].innerHTML = stuff.stats.bedwars.threes.losses || 0;
    elems[5].children[1].children[7].children[4].innerHTML = stuff.stats.bedwars.fours.losses || 0;
    elems[5].children[1].children[7].children[5].innerHTML = stuff.stats.bedwars.fourvfour.losses || 0;
    elems[5].children[1].children[7].children[6].innerHTML = stuff.stats.bedwars.overall.losses || 0;
    //kills
    elems[5].children[1].children[8].children[1].innerHTML = stuff.stats.bedwars.solo.wlr || 0;
    elems[5].children[1].children[8].children[2].innerHTML = stuff.stats.bedwars.doubles.wlr || 0;
    elems[5].children[1].children[8].children[3].innerHTML = stuff.stats.bedwars.threes.wlr || 0;
    elems[5].children[1].children[8].children[4].innerHTML = stuff.stats.bedwars.fours.wlr || 0;
    elems[5].children[1].children[8].children[5].innerHTML = stuff.stats.bedwars.fourvfour.wlr || 0;
    elems[5].children[1].children[8].children[6].innerHTML = stuff.stats.bedwars.overall.wlr || 0;
    //kills
    elems[5].children[1].children[9].children[1].innerHTML = stuff.stats.bedwars.solo.bedsbroken || 0;
    elems[5].children[1].children[9].children[2].innerHTML = stuff.stats.bedwars.doubles.bedsbroken || 0;
    elems[5].children[1].children[9].children[3].innerHTML = stuff.stats.bedwars.threes.bedsbroken || 0;
    elems[5].children[1].children[9].children[4].innerHTML = stuff.stats.bedwars.fours.bedsbroken || 0;
    elems[5].children[1].children[9].children[5].innerHTML = stuff.stats.bedwars.fourvfour.bedsbroken || 0;
    elems[5].children[1].children[9].children[6].innerHTML = stuff.stats.bedwars.overall.bedsbroken || 0;
    //kills
    elems[5].children[1].children[10].children[1].innerHTML = stuff.stats.bedwars.solo.bedslost || 0;
    elems[5].children[1].children[10].children[2].innerHTML = stuff.stats.bedwars.doubles.bedslost || 0;
    elems[5].children[1].children[10].children[3].innerHTML = stuff.stats.bedwars.threes.bedslost || 0;
    elems[5].children[1].children[10].children[4].innerHTML = stuff.stats.bedwars.fours.bedslost || 0;
    elems[5].children[1].children[10].children[5].innerHTML = stuff.stats.bedwars.fourvfour.bedslost || 0;
    elems[5].children[1].children[10].children[6].innerHTML = stuff.stats.bedwars.overall.bedslost || 0;
    //kills
    elems[5].children[1].children[11].children[1].innerHTML = stuff.stats.bedwars.solo.bblr || 0;
    elems[5].children[1].children[11].children[2].innerHTML = stuff.stats.bedwars.doubles.bblr || 0;
    elems[5].children[1].children[11].children[3].innerHTML = stuff.stats.bedwars.threes.bblr || 0;
    elems[5].children[1].children[11].children[4].innerHTML = stuff.stats.bedwars.fours.bblr || 0;
    elems[5].children[1].children[11].children[5].innerHTML = stuff.stats.bedwars.fourvfour.bblr || 0;
    elems[5].children[1].children[11].children[6].innerHTML = stuff.stats.bedwars.overall.bblr || 0;

    //DREAMS

    //kills
    elems[6].children[1].children[0].children[1].innerHTML = stuff.stats.bedwars.rush2.kills || 0;
    elems[6].children[1].children[0].children[2].innerHTML = stuff.stats.bedwars.rush4.kills || 0;
    elems[6].children[1].children[0].children[3].innerHTML = stuff.stats.bedwars.ultimate2.kills || 0;
    elems[6].children[1].children[0].children[4].innerHTML = stuff.stats.bedwars.ultimate4.kills || 0;
    elems[6].children[1].children[0].children[5].innerHTML = stuff.stats.bedwars.castle.kills || 0;
    elems[6].children[1].children[0].children[6].innerHTML = stuff.stats.bedwars.voidless2.kills || 0;
    elems[6].children[1].children[0].children[7].innerHTML = stuff.stats.bedwars.voidless4.kills || 0;
    elems[6].children[1].children[0].children[8].innerHTML = stuff.stats.bedwars.armed2.kills || 0;
    elems[6].children[1].children[0].children[9].innerHTML = stuff.stats.bedwars.armed4.kills || 0;
    elems[6].children[1].children[0].children[10].innerHTML = stuff.stats.bedwars.lucky2.kills || 0;
    elems[6].children[1].children[0].children[11].innerHTML = stuff.stats.bedwars.lucky4.kills || 0;
    //kills
    elems[6].children[1].children[1].children[1].innerHTML = stuff.stats.bedwars.rush2.deaths || 0;
    elems[6].children[1].children[1].children[2].innerHTML = stuff.stats.bedwars.rush4.deaths || 0;
    elems[6].children[1].children[1].children[3].innerHTML = stuff.stats.bedwars.ultimate2.deaths || 0;
    elems[6].children[1].children[1].children[4].innerHTML = stuff.stats.bedwars.ultimate4.deaths || 0;
    elems[6].children[1].children[1].children[5].innerHTML = stuff.stats.bedwars.castle.deaths || 0;
    elems[6].children[1].children[1].children[6].innerHTML = stuff.stats.bedwars.voidless2.deaths || 0;
    elems[6].children[1].children[1].children[7].innerHTML = stuff.stats.bedwars.voidless4.deaths || 0;
    elems[6].children[1].children[1].children[8].innerHTML = stuff.stats.bedwars.armed2.deaths || 0;
    elems[6].children[1].children[1].children[9].innerHTML = stuff.stats.bedwars.armed4.deaths || 0;
    elems[6].children[1].children[1].children[10].innerHTML = stuff.stats.bedwars.lucky2.deaths || 0;
    elems[6].children[1].children[1].children[11].innerHTML = stuff.stats.bedwars.lucky4.deaths || 0;
    //kills
    elems[6].children[1].children[2].children[1].innerHTML = stuff.stats.bedwars.rush2.kdr || 0;
    elems[6].children[1].children[2].children[2].innerHTML = stuff.stats.bedwars.rush4.kdr || 0;
    elems[6].children[1].children[2].children[3].innerHTML = stuff.stats.bedwars.ultimate2.kdr || 0;
    elems[6].children[1].children[2].children[4].innerHTML = stuff.stats.bedwars.ultimate4.kdr || 0;
    elems[6].children[1].children[2].children[5].innerHTML = stuff.stats.bedwars.castle.kdr || 0;
    elems[6].children[1].children[2].children[6].innerHTML = stuff.stats.bedwars.voidless2.kdr || 0;
    elems[6].children[1].children[2].children[7].innerHTML = stuff.stats.bedwars.voidless4.kdr || 0;
    elems[6].children[1].children[2].children[8].innerHTML = stuff.stats.bedwars.armed2.kdr || 0;
    elems[6].children[1].children[2].children[9].innerHTML = stuff.stats.bedwars.armed4.kdr || 0;
    elems[6].children[1].children[2].children[10].innerHTML = stuff.stats.bedwars.lucky2.kdr || 0;
    elems[6].children[1].children[2].children[11].innerHTML = stuff.stats.bedwars.lucky4.kdr || 0;
    //kills
    elems[6].children[1].children[3].children[1].innerHTML = stuff.stats.bedwars.rush2.finals || 0;
    elems[6].children[1].children[3].children[2].innerHTML = stuff.stats.bedwars.rush4.finals || 0;
    elems[6].children[1].children[3].children[3].innerHTML = stuff.stats.bedwars.ultimate2.finals || 0;
    elems[6].children[1].children[3].children[4].innerHTML = stuff.stats.bedwars.ultimate4.finals || 0;
    elems[6].children[1].children[3].children[5].innerHTML = stuff.stats.bedwars.castle.finals || 0;
    elems[6].children[1].children[3].children[6].innerHTML = stuff.stats.bedwars.voidless2.finals || 0;
    elems[6].children[1].children[3].children[7].innerHTML = stuff.stats.bedwars.voidless4.finals || 0;
    elems[6].children[1].children[3].children[8].innerHTML = stuff.stats.bedwars.armed2.finals || 0;
    elems[6].children[1].children[3].children[9].innerHTML = stuff.stats.bedwars.armed4.finals || 0;
    elems[6].children[1].children[3].children[10].innerHTML = stuff.stats.bedwars.lucky2.finals || 0;
    elems[6].children[1].children[3].children[11].innerHTML = stuff.stats.bedwars.lucky4.finals || 0;
    //kills
    elems[6].children[1].children[4].children[1].innerHTML = stuff.stats.bedwars.rush2.fdeaths || 0;
    elems[6].children[1].children[4].children[2].innerHTML = stuff.stats.bedwars.rush4.fdeaths || 0;
    elems[6].children[1].children[4].children[3].innerHTML = stuff.stats.bedwars.ultimate2.fdeaths || 0;
    elems[6].children[1].children[4].children[4].innerHTML = stuff.stats.bedwars.ultimate4.fdeaths || 0;
    elems[6].children[1].children[4].children[5].innerHTML = stuff.stats.bedwars.castle.fdeaths || 0;
    elems[6].children[1].children[4].children[6].innerHTML = stuff.stats.bedwars.voidless2.fdeaths || 0;
    elems[6].children[1].children[4].children[7].innerHTML = stuff.stats.bedwars.voidless4.fdeaths || 0;
    elems[6].children[1].children[4].children[8].innerHTML = stuff.stats.bedwars.armed2.fdeaths || 0;
    elems[6].children[1].children[4].children[9].innerHTML = stuff.stats.bedwars.armed4.fdeaths || 0;
    elems[6].children[1].children[4].children[10].innerHTML = stuff.stats.bedwars.lucky2.fdeaths || 0;
    elems[6].children[1].children[4].children[11].innerHTML = stuff.stats.bedwars.lucky4.fdeaths || 0;
    //kills
    elems[6].children[1].children[5].children[1].innerHTML = stuff.stats.bedwars.rush2.fkdr || 0;
    elems[6].children[1].children[5].children[2].innerHTML = stuff.stats.bedwars.rush4.fkdr || 0;
    elems[6].children[1].children[5].children[3].innerHTML = stuff.stats.bedwars.ultimate2.fkdr || 0;
    elems[6].children[1].children[5].children[4].innerHTML = stuff.stats.bedwars.ultimate4.fkdr || 0;
    elems[6].children[1].children[5].children[5].innerHTML = stuff.stats.bedwars.castle.fkdr || 0;
    elems[6].children[1].children[5].children[6].innerHTML = stuff.stats.bedwars.voidless2.fkdr || 0;
    elems[6].children[1].children[5].children[7].innerHTML = stuff.stats.bedwars.voidless4.fkdr || 0;
    elems[6].children[1].children[5].children[8].innerHTML = stuff.stats.bedwars.armed2.fkdr || 0;
    elems[6].children[1].children[5].children[9].innerHTML = stuff.stats.bedwars.armed4.fkdr || 0;
    elems[6].children[1].children[5].children[10].innerHTML = stuff.stats.bedwars.lucky2.fkdr || 0;
    elems[6].children[1].children[5].children[11].innerHTML = stuff.stats.bedwars.lucky4.fkdr || 0;
    //kills
    elems[6].children[1].children[6].children[1].innerHTML = stuff.stats.bedwars.rush2.wins || 0;
    elems[6].children[1].children[6].children[2].innerHTML = stuff.stats.bedwars.rush4.wins || 0;
    elems[6].children[1].children[6].children[3].innerHTML = stuff.stats.bedwars.ultimate2.wins || 0;
    elems[6].children[1].children[6].children[4].innerHTML = stuff.stats.bedwars.ultimate4.wins || 0;
    elems[6].children[1].children[6].children[5].innerHTML = stuff.stats.bedwars.castle.wins || 0;
    elems[6].children[1].children[6].children[6].innerHTML = stuff.stats.bedwars.voidless2.wins || 0;
    elems[6].children[1].children[6].children[7].innerHTML = stuff.stats.bedwars.voidless4.wins || 0;
    elems[6].children[1].children[6].children[8].innerHTML = stuff.stats.bedwars.armed2.wins || 0;
    elems[6].children[1].children[6].children[9].innerHTML = stuff.stats.bedwars.armed4.wins || 0;
    elems[6].children[1].children[6].children[10].innerHTML = stuff.stats.bedwars.lucky2.wins || 0;
    elems[6].children[1].children[6].children[11].innerHTML = stuff.stats.bedwars.lucky4.wins || 0;
    //kills
    elems[6].children[1].children[7].children[1].innerHTML = stuff.stats.bedwars.rush2.losses || 0;
    elems[6].children[1].children[7].children[2].innerHTML = stuff.stats.bedwars.rush4.losses || 0;
    elems[6].children[1].children[7].children[3].innerHTML = stuff.stats.bedwars.ultimate2.losses || 0;
    elems[6].children[1].children[7].children[4].innerHTML = stuff.stats.bedwars.ultimate4.losses || 0;
    elems[6].children[1].children[7].children[5].innerHTML = stuff.stats.bedwars.castle.losses || 0;
    elems[6].children[1].children[7].children[6].innerHTML = stuff.stats.bedwars.voidless2.losses || 0;
    elems[6].children[1].children[7].children[7].innerHTML = stuff.stats.bedwars.voidless4.losses || 0;
    elems[6].children[1].children[7].children[8].innerHTML = stuff.stats.bedwars.armed2.losses || 0;
    elems[6].children[1].children[7].children[9].innerHTML = stuff.stats.bedwars.armed4.losses || 0;
    elems[6].children[1].children[7].children[10].innerHTML = stuff.stats.bedwars.lucky2.losses || 0;
    elems[6].children[1].children[7].children[11].innerHTML = stuff.stats.bedwars.lucky4.losses || 0;
    //kills
    elems[6].children[1].children[8].children[1].innerHTML = stuff.stats.bedwars.rush2.wlr || 0;
    elems[6].children[1].children[8].children[2].innerHTML = stuff.stats.bedwars.rush4.wlr || 0;
    elems[6].children[1].children[8].children[3].innerHTML = stuff.stats.bedwars.ultimate2.wlr || 0;
    elems[6].children[1].children[8].children[4].innerHTML = stuff.stats.bedwars.ultimate4.wlr || 0;
    elems[6].children[1].children[8].children[5].innerHTML = stuff.stats.bedwars.castle.wlr || 0;
    elems[6].children[1].children[8].children[6].innerHTML = stuff.stats.bedwars.voidless2.wlr || 0;
    elems[6].children[1].children[8].children[7].innerHTML = stuff.stats.bedwars.voidless4.wlr || 0;
    elems[6].children[1].children[8].children[8].innerHTML = stuff.stats.bedwars.armed2.wlr || 0;
    elems[6].children[1].children[8].children[9].innerHTML = stuff.stats.bedwars.armed4.wlr || 0;
    elems[6].children[1].children[8].children[10].innerHTML = stuff.stats.bedwars.lucky2.wlr || 0;
    elems[6].children[1].children[8].children[11].innerHTML = stuff.stats.bedwars.lucky4.wlr || 0;
    //kills
    elems[6].children[1].children[9].children[1].innerHTML = stuff.stats.bedwars.rush2.bedsbroken || 0;
    elems[6].children[1].children[9].children[2].innerHTML = stuff.stats.bedwars.rush4.bedsbroken || 0;
    elems[6].children[1].children[9].children[3].innerHTML = stuff.stats.bedwars.ultimate2.bedsbroken || 0;
    elems[6].children[1].children[9].children[4].innerHTML = stuff.stats.bedwars.ultimate4.bedsbroken || 0;
    elems[6].children[1].children[9].children[5].innerHTML = stuff.stats.bedwars.castle.bedsbroken || 0;
    elems[6].children[1].children[9].children[6].innerHTML = stuff.stats.bedwars.voidless2.bedsbroken || 0;
    elems[6].children[1].children[9].children[7].innerHTML = stuff.stats.bedwars.voidless4.bedsbroken || 0;
    elems[6].children[1].children[9].children[8].innerHTML = stuff.stats.bedwars.armed2.bedsbroken || 0;
    elems[6].children[1].children[9].children[9].innerHTML = stuff.stats.bedwars.armed4.bedsbroken || 0;
    elems[6].children[1].children[9].children[10].innerHTML = stuff.stats.bedwars.lucky2.bedsbroken || 0;
    elems[6].children[1].children[9].children[11].innerHTML = stuff.stats.bedwars.lucky4.bedsbroken || 0;
    //kills
    elems[6].children[1].children[10].children[1].innerHTML = stuff.stats.bedwars.rush2.bedslost || 0;
    elems[6].children[1].children[10].children[2].innerHTML = stuff.stats.bedwars.rush4.bedslost || 0;
    elems[6].children[1].children[10].children[3].innerHTML = stuff.stats.bedwars.ultimate2.bedslost || 0;
    elems[6].children[1].children[10].children[4].innerHTML = stuff.stats.bedwars.ultimate4.bedslost || 0;
    elems[6].children[1].children[10].children[5].innerHTML = stuff.stats.bedwars.castle.bedslost || 0;
    elems[6].children[1].children[10].children[6].innerHTML = stuff.stats.bedwars.voidless2.bedslost || 0;
    elems[6].children[1].children[10].children[7].innerHTML = stuff.stats.bedwars.voidless4.bedslost || 0;
    elems[6].children[1].children[10].children[8].innerHTML = stuff.stats.bedwars.armed2.bedslost || 0;
    elems[6].children[1].children[10].children[9].innerHTML = stuff.stats.bedwars.armed4.bedslost || 0;
    elems[6].children[1].children[10].children[10].innerHTML = stuff.stats.bedwars.lucky2.bedslost || 0;
    elems[6].children[1].children[10].children[11].innerHTML = stuff.stats.bedwars.lucky4.bedslost || 0;
    //kills
    elems[6].children[1].children[11].children[1].innerHTML = stuff.stats.bedwars.rush2.bblr || 0;
    elems[6].children[1].children[11].children[2].innerHTML = stuff.stats.bedwars.rush4.bblr || 0;
    elems[6].children[1].children[11].children[3].innerHTML = stuff.stats.bedwars.ultimate2.bblr || 0;
    elems[6].children[1].children[11].children[4].innerHTML = stuff.stats.bedwars.ultimate4.bblr || 0;
    elems[6].children[1].children[11].children[5].innerHTML = stuff.stats.bedwars.castle.bblr || 0;
    elems[6].children[1].children[11].children[6].innerHTML = stuff.stats.bedwars.voidless2.bblr || 0;
    elems[6].children[1].children[11].children[7].innerHTML = stuff.stats.bedwars.voidless4.bblr || 0;
    elems[6].children[1].children[11].children[8].innerHTML = stuff.stats.bedwars.armed2.bblr || 0;
    elems[6].children[1].children[11].children[9].innerHTML = stuff.stats.bedwars.armed4.bblr || 0;
    elems[6].children[1].children[11].children[10].innerHTML = stuff.stats.bedwars.lucky2.bblr || 0;
    elems[6].children[1].children[11].children[11].innerHTML = stuff.stats.bedwars.lucky4.bblr || 0;
    

  } else if (selected === "Skywars") {
    const prefix = ranking(stuff.rank, stuff.pluscolor).map(arr => {
      return `<span style="color: ${arr[1]}">${arr[0]}</span>`;

    }).join('') + ` <span style="color: ${ranking(stuff.rank, stuff.pluscolor)[0][1]}">${stuff.name}</span>`;
    let checkguild = stuff.guild.guild !== null ? ` <span style="color: ${colors[stuff.guild.guild.tagColor]}">[${stuff.guild.guild.tag}]</span>` : '';
    const elems = document.getElementById(selected).children;
    elems[0].innerHTML = prefix + checkguild + ' - Skywars';
    elems[2].firstElementChild.innerHTML = stuff.stats.skywars.coins;
    elems[3].firstElementChild.innerHTML = stuff.stats.skywars.level;
    elems[4].firstElementChild.innerHTML = stuff.stats.skywars.prestige;
    //kills
    elems[5].children[1].firstElementChild.children[1].innerHTML = stuff.stats.skywars.solonormal.kills || 0;
    elems[5].children[1].firstElementChild.children[2].innerHTML = stuff.stats.skywars.soloinsane.kills || 0;
    elems[5].children[1].firstElementChild.children[3].innerHTML = stuff.stats.skywars.teamnormal.kills || 0;
    elems[5].children[1].firstElementChild.children[4].innerHTML = stuff.stats.skywars.teaminsane.kills || 0;
    elems[5].children[1].firstElementChild.children[5].innerHTML = stuff.stats.skywars.ranked.kills || 0;
    elems[5].children[1].firstElementChild.children[6].innerHTML = stuff.stats.skywars.overall.kills || 0;
    //kills
    elems[5].children[1].children[1].children[1].innerHTML = stuff.stats.skywars.solonormal.deaths || 0;
    elems[5].children[1].children[1].children[2].innerHTML = stuff.stats.skywars.soloinsane.deaths || 0;
    elems[5].children[1].children[1].children[3].innerHTML = stuff.stats.skywars.teamnormal.deaths || 0;
    elems[5].children[1].children[1].children[4].innerHTML = stuff.stats.skywars.teaminsane.deaths || 0;
    elems[5].children[1].children[1].children[5].innerHTML = stuff.stats.skywars.ranked.deaths || 0;
    elems[5].children[1].children[1].children[6].innerHTML = stuff.stats.skywars.overall.deaths || 0;
    //kills
    elems[5].children[1].children[2].children[1].innerHTML = stuff.stats.skywars.solonormal.kdr || 0;
    elems[5].children[1].children[2].children[2].innerHTML = stuff.stats.skywars.soloinsane.kdr || 0;
    elems[5].children[1].children[2].children[3].innerHTML = stuff.stats.skywars.teamnormal.kdr || 0;
    elems[5].children[1].children[2].children[4].innerHTML = stuff.stats.skywars.teaminsane.kdr || 0;
    elems[5].children[1].children[2].children[5].innerHTML = stuff.stats.skywars.ranked.kdr || 0;
    elems[5].children[1].children[2].children[6].innerHTML = stuff.stats.skywars.overall.kdr || 0;
    //kills
    elems[5].children[1].children[3].children[1].innerHTML = stuff.stats.skywars.solonormal.wins || 0;
    elems[5].children[1].children[3].children[2].innerHTML = stuff.stats.skywars.soloinsane.wins || 0;
    elems[5].children[1].children[3].children[3].innerHTML = stuff.stats.skywars.teamnormal.wins || 0;
    elems[5].children[1].children[3].children[4].innerHTML = stuff.stats.skywars.teaminsane.wins || 0;
    elems[5].children[1].children[3].children[5].innerHTML = stuff.stats.skywars.ranked.wins || 0;
    elems[5].children[1].children[3].children[6].innerHTML = stuff.stats.skywars.overall.wins || 0;
    //kills
    elems[5].children[1].children[4].children[1].innerHTML = stuff.stats.skywars.solonormal.losses || 0;
    elems[5].children[1].children[4].children[2].innerHTML = stuff.stats.skywars.soloinsane.losses || 0;
    elems[5].children[1].children[4].children[3].innerHTML = stuff.stats.skywars.teamnormal.losses || 0;
    elems[5].children[1].children[4].children[4].innerHTML = stuff.stats.skywars.teaminsane.losses || 0;
    elems[5].children[1].children[4].children[5].innerHTML = stuff.stats.skywars.ranked.losses || 0;
    elems[5].children[1].children[4].children[6].innerHTML = stuff.stats.skywars.overall.losses || 0;
    //kills
    elems[5].children[1].children[5].children[1].innerHTML = stuff.stats.skywars.solonormal.wlr || 0;
    elems[5].children[1].children[5].children[2].innerHTML = stuff.stats.skywars.soloinsane.wlr || 0;
    elems[5].children[1].children[5].children[3].innerHTML = stuff.stats.skywars.teamnormal.wlr || 0;
    elems[5].children[1].children[5].children[4].innerHTML = stuff.stats.skywars.teaminsane.wlr || 0;
    elems[5].children[1].children[5].children[5].innerHTML = stuff.stats.skywars.ranked.wlr || 0;
    elems[5].children[1].children[5].children[6].innerHTML = stuff.stats.skywars.overall.wlr || 0;
  } else if (selected === "Duels") {
    const prefix = ranking(stuff.rank, stuff.pluscolor).map(arr => {
      return `<span style="color: ${arr[1]}">${arr[0]}</span>`;

    }).join('') + ` <span style="color: ${ranking(stuff.rank, stuff.pluscolor)[0][1]}">${stuff.name}</span>`;
    const elems = document.getElementById(selected).children;
    let checkguild = stuff.guild.guild !== null ? ` <span style="color: ${colors[stuff.guild.guild.tagColor]}">[${stuff.guild.guild.tag}]</span>` : '';
    elems[0].innerHTML = prefix + checkguild + ' - Duels';
    elems[2].firstElementChild.innerHTML = stuff.stats.duels.coins;
    elems[3].firstElementChild.innerHTML = stuff.stats.duels.winstreak;
    elems[4].firstElementChild.innerHTML = stuff.stats.duels.title;
    //kills
    elems[5].children[1].firstElementChild.children[1].innerHTML = stuff.stats.duels.uhc1.kills || 0;
    elems[5].children[1].firstElementChild.children[2].innerHTML = stuff.stats.duels.uhc1.deaths || 0;
    elems[5].children[1].firstElementChild.children[3].innerHTML = stuff.stats.duels.uhc1.kdr || 0;
    elems[5].children[1].firstElementChild.children[4].innerHTML = stuff.stats.duels.uhc1.wins || 0;
    elems[5].children[1].firstElementChild.children[5].innerHTML = stuff.stats.duels.uhc1.losses || 0;
    elems[5].children[1].firstElementChild.children[6].innerHTML = stuff.stats.duels.uhc1.wlr || 0;
    //kills
    elems[5].children[1].children[1].children[1].innerHTML = stuff.stats.duels.uhc2.kills || 0;
    elems[5].children[1].children[1].children[2].innerHTML = stuff.stats.duels.uhc2.deaths || 0;
    elems[5].children[1].children[1].children[3].innerHTML = stuff.stats.duels.uhc2.kdr || 0;
    elems[5].children[1].children[1].children[4].innerHTML = stuff.stats.duels.uhc2.wins || 0;
    elems[5].children[1].children[1].children[5].innerHTML = stuff.stats.duels.uhc2.losses || 0;
    elems[5].children[1].children[1].children[6].innerHTML = stuff.stats.duels.uhc2.wlr;
    //kills
    elems[5].children[1].children[2].children[1].innerHTML = stuff.stats.duels.uhc4.kills  || 0;
    elems[5].children[1].children[2].children[2].innerHTML = stuff.stats.duels.uhc4.deaths  || 0;
    elems[5].children[1].children[2].children[3].innerHTML = stuff.stats.duels.uhc4.kdr  || 0;
    elems[5].children[1].children[2].children[4].innerHTML = stuff.stats.duels.uhc4.wins  || 0;
    elems[5].children[1].children[2].children[5].innerHTML = stuff.stats.duels.uhc4.losses  || 0;
    elems[5].children[1].children[2].children[6].innerHTML = stuff.stats.duels.uhc4.wlr  || 0;
    //kills
    elems[5].children[1].children[3].children[1].innerHTML = stuff.stats.duels.skywars1.kills  || 0;
    elems[5].children[1].children[3].children[2].innerHTML = stuff.stats.duels.skywars1.deaths || 0;
    elems[5].children[1].children[3].children[3].innerHTML = stuff.stats.duels.skywars1.kdr || 0;
    elems[5].children[1].children[3].children[4].innerHTML = stuff.stats.duels.skywars1.wins || 0;
    elems[5].children[1].children[3].children[5].innerHTML = stuff.stats.duels.skywars1.losses || 0;
    elems[5].children[1].children[3].children[6].innerHTML = stuff.stats.duels.skywars1.wlr || 0;
    //kills
    elems[5].children[1].children[4].children[1].innerHTML = stuff.stats.duels.skywars2.kills || 0;
    elems[5].children[1].children[4].children[2].innerHTML = stuff.stats.duels.skywars2.deaths || 0;
    elems[5].children[1].children[4].children[3].innerHTML = stuff.stats.duels.skywars2.kdr || 0;
    elems[5].children[1].children[4].children[4].innerHTML = stuff.stats.duels.skywars2.wins || 0;
    elems[5].children[1].children[4].children[5].innerHTML = stuff.stats.duels.skywars2.losses || 0;
    elems[5].children[1].children[4].children[6].innerHTML = stuff.stats.duels.skywars2.wlr || 0;
    //kills
    elems[5].children[1].children[5].children[1].innerHTML = stuff.stats.duels.blitz.kills || 0;
    elems[5].children[1].children[5].children[2].innerHTML = stuff.stats.duels.blitz.deaths || 0;
    elems[5].children[1].children[5].children[3].innerHTML = stuff.stats.duels.blitz.kdr || 0;
    elems[5].children[1].children[5].children[4].innerHTML = stuff.stats.duels.blitz.wins || 0;
    elems[5].children[1].children[5].children[5].innerHTML = stuff.stats.duels.blitz.losses || 0;
    elems[5].children[1].children[5].children[6].innerHTML = stuff.stats.duels.blitz.wlr || 0;
    //kills
    elems[5].children[1].children[6].children[1].innerHTML = stuff.stats.duels.sumo.kills || 0;
    elems[5].children[1].children[6].children[2].innerHTML = stuff.stats.duels.sumo.deaths || 0;
    elems[5].children[1].children[6].children[3].innerHTML = stuff.stats.duels.sumo.kdr || 0;
    elems[5].children[1].children[6].children[4].innerHTML = stuff.stats.duels.sumo.wins || 0;
    elems[5].children[1].children[6].children[5].innerHTML = stuff.stats.duels.sumo.losses || 0;
    elems[5].children[1].children[6].children[6].innerHTML = stuff.stats.duels.sumo.wlr || 0;
    //kills
    elems[5].children[1].children[7].children[1].innerHTML = stuff.stats.duels.classic.kills || 0;
    elems[5].children[1].children[7].children[2].innerHTML = stuff.stats.duels.classic.deaths || 0;
    elems[5].children[1].children[7].children[3].innerHTML = stuff.stats.duels.classic.kdr || 0;
    elems[5].children[1].children[7].children[4].innerHTML = stuff.stats.duels.classic.wins || 0;
    elems[5].children[1].children[7].children[5].innerHTML = stuff.stats.duels.classic.losses || 0;
    elems[5].children[1].children[7].children[6].innerHTML = stuff.stats.duels.classic.wlr || 0;
    //kills
    elems[5].children[1].children[8].children[1].innerHTML = stuff.stats.duels.bridge1.kills || 0;
    elems[5].children[1].children[8].children[2].innerHTML = stuff.stats.duels.bridge1.deaths || 0;
    elems[5].children[1].children[8].children[3].innerHTML = stuff.stats.duels.bridge1.kdr || 0;
    elems[5].children[1].children[8].children[4].innerHTML = stuff.stats.duels.bridge1.wins || 0;
    elems[5].children[1].children[8].children[5].innerHTML = stuff.stats.duels.bridge1.losses || 0;
    elems[5].children[1].children[8].children[6].innerHTML = stuff.stats.duels.bridge1.wlr || 0;
    //kills
    elems[5].children[1].children[9].children[1].innerHTML = stuff.stats.duels.bridge2.kills || 0;
    elems[5].children[1].children[9].children[2].innerHTML = stuff.stats.duels.bridge2.deaths || 0;
    elems[5].children[1].children[9].children[3].innerHTML = stuff.stats.duels.bridge2.kdr || 0;
    elems[5].children[1].children[9].children[4].innerHTML = stuff.stats.duels.bridge2.wins || 0;
    elems[5].children[1].children[9].children[5].innerHTML = stuff.stats.duels.bridge2.losses || 0;
    elems[5].children[1].children[9].children[6].innerHTML = stuff.stats.duels.bridge2.wlr || 0;
    //kills
    elems[5].children[1].children[10].children[1].innerHTML = stuff.stats.duels.bridge4.kills || 0;
    elems[5].children[1].children[10].children[2].innerHTML = stuff.stats.duels.bridge4.deaths || 0;
    elems[5].children[1].children[10].children[3].innerHTML = stuff.stats.duels.bridge4.kdr || 0;
    elems[5].children[1].children[10].children[4].innerHTML = stuff.stats.duels.bridge4.wins || 0;
    elems[5].children[1].children[10].children[5].innerHTML = stuff.stats.duels.bridge4.losses || 0;
    elems[5].children[1].children[10].children[6].innerHTML = stuff.stats.duels.bridge4.wlr || 0;
    //kills
    elems[5].children[1].children[11].children[1].innerHTML = stuff.stats.duels.overall.kills || 0;
    elems[5].children[1].children[11].children[2].innerHTML = stuff.stats.duels.overall.deaths || 0;
    elems[5].children[1].children[11].children[3].innerHTML = stuff.stats.duels.overall.kdr || 0;
    elems[5].children[1].children[11].children[4].innerHTML = stuff.stats.duels.overall.wins || 0;
    elems[5].children[1].children[11].children[5].innerHTML = stuff.stats.duels.overall.losses || 0;
    elems[5].children[1].children[11].children[6].innerHTML = stuff.stats.duels.overall.wlr || 0;
  } else if (selected === "Guild/Friends") {
    const prefix = ranking(stuff.rank, stuff.pluscolor).map(arr => {
      return `<span style="color: ${arr[1]}">${arr[0]}</span>`;

    }).join('') + ` <span style="color: ${ranking(stuff.rank, stuff.pluscolor)[0][1]}">${stuff.name}</span>`;
    let checkguild = stuff.guild.guild !== null ? ` <span style="color: ${colors[stuff.guild.guild.tagColor]}">[${stuff.guild.guild.tag}]</span>` : '';
    const elems = document.getElementById(selected).children;
    elems[0].innerHTML = prefix + checkguild + ' - Guild & Friends';
    if (stuff.guild.guild !== null) {
      elems[2].firstElementChild.innerHTML = stuff.guild.guild.name;
      elems[3].firstElementChild.innerHTML = stuff.guild.guild.exp;
      elems[4].firstElementChild.innerHTML = new Date(stuff.guild.guild.created);
    } else {
      
      elems[2].style.display = 'none';
      elems[3].style.display = 'none';
      elems[4].style.display = 'none';
      elems[5].style.display = 'none';
      elems[6].style.display = 'none';
      elems[7].style.display = 'none';
    }
    elems[6].innerHTML += ``;
    elems[8].firstElementChild.innerHTML = stuff.friends.records.length;
    
  }
};

const skywarslvl = (xp) => {
  var xps = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000];
  //let xp = d.stats.SkyWars.skywars_experience;
  let exactLevel = 0;
  let prestige = '';
  if (xp >= 15000) {
    exactLevel = (xp - 15000) / 10000 + 12;
    // Calculate the exactLevel for players whose level is 12 or above.
  } else {
    for (i = 0; i < xps.length; i++) {
      // Loop through the xps array and determine the integer value of the player's level.
      if (xp < xps[i]) {
        exactLevel = i + (xp - xps[i - 1]) / (xps[i] - xps[i - 1]);
        break;
        // If xp < xps[i], the integer value of level is found. Hence, calculate the exactLevel and stop the loop.
      }
    }
  }

  switch (true) {
    case exactLevel < 5:
      prestige = 'NON'
      break;
    case exactLevel < 10:
      prestige = 'Iron'
      break;
    case exactLevel < 15:
      prestige = 'Gold'
      break;
    case exactLevel < 20:
      prestige = 'Diamond'
      break;
    case exactLevel < 25:
      prestige = 'Emerald'
      break;
    case exactLevel < 30:
      prestige = 'Sapphire'
      break;
    case exactLevel < 35:
      prestige = 'Ruby'
      break;
    case exactLevel < 40:
      prestige = 'Crystal'
      break;
    case exactLevel < 45:
      prestige = 'Opal'
      break;
    case exactLevel < 50:
      prestige = 'Amethyst'
      break;
    case exactLevel >= 50:
      prestige = 'Rainbow'
      break;


  }

  return [exactLevel, prestige];
};


function updateSelected(type) {
  selected = type;
  for (const button of navs) {
    if (button.firstElementChild.firstElementChild.innerHTML === selected) {
      button.style.border = '#333 solid';
      button.style.borderWidth = '1px 0px';
      document.getElementById(selected).style.display = 'block';

    } else {
      button.style.border = 'lightgray solid';
      button.style.borderWidth = '1px 0px';
      document.getElementById(button.firstElementChild.firstElementChild.innerHTML).style.display = 'none';
    }
  }
  updateInterface(data);


}

function setData(d, func) {
  let rank1;
  let pluscolor = d.rankPlusColor || 'gold';
  
  if (d.rank && d.rank !== 'NORMAL') {
    rank1 = d.rank
  } else if (d.monthlyPackageRank && d.monthlyPackageRank !== "NONE") {
    rank1 = d.monthlyPackageRank
  } else if (d.newPackageRank && d.newPackageRank !== "NONE") {
    rank1 = d.newPackageRank
  } else if (d.packageRank && d.packageRank !== "NONE") {
    rank1 = d.packageRank
  } else {
    rank1 = 'NON'
  }


  data = {
    name: d.displayname,
    rank: rank1 === "SUPERSTAR" ? "MVP_PLUS_PLUS" : rank1,
    pluscolor: pluscolor,
    karma: d.karma,
    lastLogin: new Date(d.lastLogin),
    uuid: d.uuid,
    nameHistory: d.knownAliases,
    level: Math.floor((Math.sqrt((2 * d.networkExp) + 30625) / 50) - 2.5),
    stats: {
      bedwars: {
        winstreak: d.stats.Bedwars.winstreak,
        coins: d.stats.Bedwars.coins,
        level: d.achievements.bedwars_level,
        solo: {
          kills: d.stats.Bedwars.eight_one_kills_bedwars,
          deaths: d.stats.Bedwars.eight_one_deaths_bedwars,
          finals: d.stats.Bedwars.eight_one_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.eight_one_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.eight_one_kills_bedwars / d.stats.Bedwars.eight_one_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.eight_one_final_kills_bedwars / d.stats.Bedwars.eight_one_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.eight_one_wins_bedwars,
          losses: d.stats.Bedwars.eight_one_losses_bedwars,
          wlr: (d.stats.Bedwars.eight_one_wins_bedwars / d.stats.Bedwars.eight_one_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.eight_one_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.eight_one_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.eight_one_beds_broken_bedwars / d.stats.Bedwars.eight_one_beds_lost_bedwars).toFixed(2)
        },
        doubles: {
          kills: d.stats.Bedwars.eight_two_kills_bedwars,
          deaths: d.stats.Bedwars.eight_two_deaths_bedwars,
          finals: d.stats.Bedwars.eight_two_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.eight_two_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.eight_two_kills_bedwars / d.stats.Bedwars.eight_two_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.eight_two_final_kills_bedwars / d.stats.Bedwars.eight_two_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.eight_two_wins_bedwars,
          losses: d.stats.Bedwars.eight_two_losses_bedwars,
          wlr: (d.stats.Bedwars.eight_two_wins_bedwars / d.stats.Bedwars.eight_two_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.eight_two_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.eight_two_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.eight_two_beds_broken_bedwars / d.stats.Bedwars.eight_two_beds_lost_bedwars).toFixed(2)
        },
        threes: {
          kills: d.stats.Bedwars.four_three_kills_bedwars,
          deaths: d.stats.Bedwars.four_three_deaths_bedwars,
          finals: d.stats.Bedwars.four_three_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.four_three_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.four_three_kills_bedwars / d.stats.Bedwars.four_three_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.four_three_final_kills_bedwars / d.stats.Bedwars.four_three_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.four_three_wins_bedwars,
          losses: d.stats.Bedwars.four_three_losses_bedwars,
          wlr: (d.stats.Bedwars.four_three_wins_bedwars / d.stats.Bedwars.four_three_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.four_three_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.four_three_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.four_three_beds_broken_bedwars / d.stats.Bedwars.four_three_beds_lost_bedwars).toFixed(2)
        },
        fours: {
          kills: d.stats.Bedwars.four_four_kills_bedwars,
          deaths: d.stats.Bedwars.four_four_deaths_bedwars,
          finals: d.stats.Bedwars.four_four_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.four_four_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.four_four_kills_bedwars / d.stats.Bedwars.four_four_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.four_four_final_kills_bedwars / d.stats.Bedwars.four_four_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.four_four_wins_bedwars,
          losses: d.stats.Bedwars.four_four_losses_bedwars,
          wlr: (d.stats.Bedwars.four_four_wins_bedwars / d.stats.Bedwars.four_four_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.four_four_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.four_four_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.four_four_beds_broken_bedwars / d.stats.Bedwars.four_four_beds_lost_bedwars).toFixed(2)
        },
        fourvfour: {
          kills: d.stats.Bedwars.two_four_kills_bedwars,
          deaths: d.stats.Bedwars.two_four_deaths_bedwars,
          finals: d.stats.Bedwars.two_four_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.two_four_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.two_four_kills_bedwars / d.stats.Bedwars.two_four_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.two_four_final_kills_bedwars / d.stats.Bedwars.two_four_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.two_four_wins_bedwars,
          losses: d.stats.Bedwars.two_four_losses_bedwars,
          wlr: (d.stats.Bedwars.two_four_wins_bedwars / d.stats.Bedwars.two_four_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.two_four_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.two_four_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.two_four_beds_broken_bedwars / d.stats.Bedwars.two_four_beds_lost_bedwars).toFixed(2)
        },
        overall: {
          kills: d.stats.Bedwars.kills_bedwars,
          deaths: d.stats.Bedwars.deaths_bedwars,
          finals: d.stats.Bedwars.final_kills_bedwars,
          fdeaths: d.stats.Bedwars.final_deaths_bedwars,
          kdr: (d.stats.Bedwars.kills_bedwars / d.stats.Bedwars.deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.final_kills_bedwars / d.stats.Bedwars.final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.wins_bedwars,
          losses: d.stats.Bedwars.losses_bedwars,
          wlr: (d.stats.Bedwars.wins_bedwars / d.stats.Bedwars.losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.beds_broken_bedwars,
          bedslost: d.stats.Bedwars.beds_lost_bedwars,
          bblr: (d.stats.Bedwars.beds_broken_bedwars / d.stats.Bedwars.beds_lost_bedwars).toFixed(2)
        },
        rush2: {
          kills: d.stats.Bedwars.eight_two_rush_kills_bedwars,
          deaths: d.stats.Bedwars.eight_two_rush_deaths_bedwars,
          finals: d.stats.Bedwars.eight_two_rush_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.eight_two_rush_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.eight_two_rush_kills_bedwars / d.stats.Bedwars.eight_two_rush_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.eight_two_rush_final_kills_bedwars / d.stats.Bedwars.eight_two_rush_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.eight_two_rush_wins_bedwars,
          losses: d.stats.Bedwars.eight_two_rush_losses_bedwars,
          wlr: (d.stats.Bedwars.eight_two_rush_wins_bedwars / d.stats.Bedwars.eight_two_rush_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.eight_two_rush_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.eight_two_rush_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.eight_two_rush_beds_broken_bedwars / d.stats.Bedwars.eight_two_rush_beds_lost_bedwars).toFixed(2)
        },
        rush4: {
          kills: d.stats.Bedwars.four_four_rush_kills_bedwars,
          deaths: d.stats.Bedwars.four_four_rush_deaths_bedwars,
          finals: d.stats.Bedwars.four_four_rush_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.four_four_rush_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.four_four_rush_kills_bedwars / d.stats.Bedwars.four_four_rush_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.four_four_rush_final_kills_bedwars / d.stats.Bedwars.four_four_rush_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.four_four_rush_wins_bedwars,
          losses: d.stats.Bedwars.four_four_rush_losses_bedwars,
          wlr: (d.stats.Bedwars.four_four_rush_wins_bedwars / d.stats.Bedwars.four_four_rush_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.four_four_rush_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.four_four_rush_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.four_four_rush_beds_broken_bedwars / d.stats.Bedwars.four_four_rush_beds_lost_bedwars).toFixed(2)
        },
        ultimate2: {
          kills: d.stats.Bedwars.eight_two_ultimate_kills_bedwars,
          deaths: d.stats.Bedwars.eight_two_ultimate_deaths_bedwars,
          finals: d.stats.Bedwars.eight_two_ultimate_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.eight_two_ultimate_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.eight_two_ultimate_kills_bedwars / d.stats.Bedwars.eight_two_ultimate_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.eight_two_ultimate_final_kills_bedwars / d.stats.Bedwars.eight_two_ultimate_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.eight_two_ultimate_wins_bedwars,
          losses: d.stats.Bedwars.eight_two_ultimate_losses_bedwars,
          wlr: (d.stats.Bedwars.eight_two_ultimate_wins_bedwars / d.stats.Bedwars.eight_two_ultimate_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.eight_two_ultimate_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.eight_two_ultimate_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.eight_two_ultimate_beds_broken_bedwars / d.stats.Bedwars.eight_two_ultimate_beds_lost_bedwars).toFixed(2)
        },
        ultimate4: {
          kills: d.stats.Bedwars.four_four_ultimate_kills_bedwars,
          deaths: d.stats.Bedwars.four_four_ultimate_deaths_bedwars,
          finals: d.stats.Bedwars.four_four_ultimate_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.four_four_ultimate_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.four_four_ultimate_kills_bedwars / d.stats.Bedwars.four_four_ultimate_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.four_four_ultimate_final_kills_bedwars / d.stats.Bedwars.four_four_ultimate_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.four_four_ultimate_wins_bedwars,
          losses: d.stats.Bedwars.four_four_ultimate_losses_bedwars,
          wlr: (d.stats.Bedwars.four_four_ultimate_wins_bedwars / d.stats.Bedwars.four_four_ultimate_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.four_four_ultimate_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.four_four_ultimate_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.four_four_ultimate_beds_broken_bedwars / d.stats.Bedwars.four_four_ultimate_beds_lost_bedwars).toFixed(2)
        },
        castle: {
          kills: d.stats.Bedwars.castle_kills_bedwars,
          deaths: d.stats.Bedwars.castle_deaths_bedwars,
          finals: d.stats.Bedwars.castle_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.castle_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.castle_kills_bedwars / d.stats.Bedwars.castle_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.castle_final_kills_bedwars / d.stats.Bedwars.castle_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.castle_wins_bedwars,
          losses: d.stats.Bedwars.castle_losses_bedwars,
          wlr: (d.stats.Bedwars.castle_wins_bedwars / d.stats.Bedwars.castle_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.castle_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.castle_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.castle_beds_broken_bedwars / d.stats.Bedwars.castle_beds_lost_bedwars).toFixed(2)
        },
        voidless2: {
          kills: d.stats.Bedwars.eight_two_voidless_kills_bedwars,
          deaths: d.stats.Bedwars.eight_two_voidless_deaths_bedwars,
          finals: d.stats.Bedwars.eight_two_voidless_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.eight_two_voidless_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.eight_two_voidless_kills_bedwars / d.stats.Bedwars.eight_two_voidless_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.eight_two_voidless_final_kills_bedwars / d.stats.Bedwars.eight_two_voidless_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.eight_two_voidless_wins_bedwars,
          losses: d.stats.Bedwars.eight_two_voidless_losses_bedwars,
          wlr: (d.stats.Bedwars.eight_two_voidless_wins_bedwars / d.stats.Bedwars.eight_two_voidless_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.eight_two_voidless_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.eight_two_voidless_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.eight_two_voidless_beds_broken_bedwars / d.stats.Bedwars.eight_two_voidless_beds_lost_bedwars).toFixed(2)
        },
        voidless4: {
          kills: d.stats.Bedwars.four_four_voidless_kills_bedwars,
          deaths: d.stats.Bedwars.four_four_voidless_deaths_bedwars,
          finals: d.stats.Bedwars.four_four_voidless_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.four_four_voidless_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.four_four_voidless_kills_bedwars / d.stats.Bedwars.four_four_voidless_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.four_four_voidless_final_kills_bedwars / d.stats.Bedwars.four_four_voidless_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.four_four_voidless_wins_bedwars,
          losses: d.stats.Bedwars.four_four_voidless_losses_bedwars,
          wlr: (d.stats.Bedwars.four_four_voidless_wins_bedwars / d.stats.Bedwars.four_four_voidless_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.four_four_voidless_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.four_four_voidless_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.four_four_voidless_beds_broken_bedwars / d.stats.Bedwars.four_four_voidless_beds_lost_bedwars).toFixed(2)
        },
        armed2: {
          kills: d.stats.Bedwars.eight_two_armed_kills_bedwars,
          deaths: d.stats.Bedwars.eight_two_armed_deaths_bedwars,
          finals: d.stats.Bedwars.eight_two_armed_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.eight_two_armed_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.eight_two_armed_kills_bedwars / d.stats.Bedwars.eight_two_armed_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.eight_two_armed_final_kills_bedwars / d.stats.Bedwars.eight_two_armed_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.eight_two_armed_wins_bedwars,
          losses: d.stats.Bedwars.eight_two_armed_losses_bedwars,
          wlr: (d.stats.Bedwars.eight_two_armed_wins_bedwars / d.stats.Bedwars.eight_two_armed_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.eight_two_armed_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.eight_two_armed_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.eight_two_armed_beds_broken_bedwars / d.stats.Bedwars.eight_two_armed_beds_lost_bedwars).toFixed(2)
        },
        armed4: {
          kills: d.stats.Bedwars.four_four_armed_kills_bedwars,
          deaths: d.stats.Bedwars.four_four_armed_deaths_bedwars,
          finals: d.stats.Bedwars.four_four_armed_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.four_four_armed_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.four_four_armed_kills_bedwars / d.stats.Bedwars.four_four_armed_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.four_four_armed_final_kills_bedwars / d.stats.Bedwars.four_four_armed_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.four_four_armed_wins_bedwars,
          losses: d.stats.Bedwars.four_four_armed_losses_bedwars,
          wlr: (d.stats.Bedwars.four_four_armed_wins_bedwars / d.stats.Bedwars.four_four_armed_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.four_four_armed_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.four_four_armed_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.four_four_armed_beds_broken_bedwars / d.stats.Bedwars.four_four_armed_beds_lost_bedwars).toFixed(2)
        },
        lucky2: {
          kills: d.stats.Bedwars.eight_two_lucky_kills_bedwars,
          deaths: d.stats.Bedwars.eight_two_lucky_deaths_bedwars,
          finals: d.stats.Bedwars.eight_two_lucky_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.eight_two_lucky_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.eight_two_lucky_kills_bedwars / d.stats.Bedwars.eight_two_lucky_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.eight_two_lucky_final_kills_bedwars / d.stats.Bedwars.eight_two_lucky_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.eight_two_lucky_wins_bedwars,
          losses: d.stats.Bedwars.eight_two_lucky_losses_bedwars,
          wlr: (d.stats.Bedwars.eight_two_lucky_wins_bedwars / d.stats.Bedwars.eight_two_lucky_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.eight_two_lucky_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.eight_two_lucky_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.eight_two_lucky_beds_broken_bedwars / d.stats.Bedwars.eight_two_lucky_beds_lost_bedwars).toFixed(2)
        },
        lucky4: {
          kills: d.stats.Bedwars.four_four_lucky_kills_bedwars,
          deaths: d.stats.Bedwars.four_four_lucky_deaths_bedwars,
          finals: d.stats.Bedwars.four_four_lucky_final_kills_bedwars,
          fdeaths: d.stats.Bedwars.four_four_lucky_final_deaths_bedwars,
          kdr: (d.stats.Bedwars.four_four_lucky_kills_bedwars / d.stats.Bedwars.four_four_lucky_deaths_bedwars).toFixed(2),
          fkdr: (d.stats.Bedwars.four_four_lucky_final_kills_bedwars / d.stats.Bedwars.four_four_lucky_final_deaths_bedwars).toFixed(2),
          wins: d.stats.Bedwars.four_four_lucky_wins_bedwars,
          losses: d.stats.Bedwars.four_four_lucky_losses_bedwars,
          wlr: (d.stats.Bedwars.four_four_lucky_wins_bedwars / d.stats.Bedwars.four_four_lucky_losses_bedwars).toFixed(2),
          bedsbroken: d.stats.Bedwars.four_four_lucky_beds_broken_bedwars,
          bedslost: d.stats.Bedwars.four_four_lucky_beds_lost_bedwars,
          bblr: (d.stats.Bedwars.four_four_lucky_beds_broken_bedwars / d.stats.Bedwars.four_four_lucky_beds_lost_bedwars).toFixed(2)
        }
      },
      skywars: {
        level: Math.floor(skywarslvl(d.stats.SkyWars.skywars_experience)[0]),
        prestige: skywarslvl(d.stats.SkyWars.skywars_experience)[1],
        coins: d.stats.SkyWars.coins,
        solonormal: {
          kills: d.stats.SkyWars.kills_solo_normal,
          deaths: d.stats.SkyWars.deaths_solo_normal,
          kdr: (d.stats.SkyWars.kills_solo_normal / d.stats.SkyWars.deaths_solo_normal).toFixed(2),
          wins: d.stats.SkyWars.wins_solo_normal,
          losses: d.stats.SkyWars.losses_solo_normal,
          wlr: (d.stats.SkyWars.wins_solo_normal / d.stats.SkyWars.losses_solo_normal).toFixed(2)
        },
        soloinsane: {
          kills: d.stats.SkyWars.kills_solo_insane,
          deaths: d.stats.SkyWars.deaths_solo_insane,
          kdr: (d.stats.SkyWars.kills_solo_insane / d.stats.SkyWars.deaths_solo_insane).toFixed(2),
          wins: d.stats.SkyWars.wins_solo_insane,
          losses: d.stats.SkyWars.losses_solo_insane,
          wlr: (d.stats.SkyWars.wins_solo_insane / d.stats.SkyWars.losses_solo_insane).toFixed(2)
        },
        teamnormal: {
          kills: d.stats.SkyWars.kills_team_normal,
          deaths: d.stats.SkyWars.deaths_team_normal,
          kdr: (d.stats.SkyWars.kills_team_normal / d.stats.SkyWars.deaths_team_normal).toFixed(2),
          wins: d.stats.SkyWars.wins_team_normal,
          losses: d.stats.SkyWars.losses_team_normal,
          wlr: (d.stats.SkyWars.wins_team_normal / d.stats.SkyWars.losses_team_normal).toFixed(2)
        },
        teaminsane: {
          kills: d.stats.SkyWars.kills_team_insane,
          deaths: d.stats.SkyWars.deaths_team_insane,
          kdr: (d.stats.SkyWars.kills_team_insane / d.stats.SkyWars.deaths_team_insane).toFixed(2),
          wins: d.stats.SkyWars.wins_team_insane,
          losses: d.stats.SkyWars.losses_team_insane,
          wlr: (d.stats.SkyWars.wins_team_insane / d.stats.SkyWars.losses_team_insane).toFixed(2)
        },
        ranked: {
          kills: d.stats.SkyWars.kills_ranked,
          deaths: d.stats.SkyWars.deaths_ranked,
          kdr: (d.stats.SkyWars.kills_ranked / d.stats.SkyWars.deaths_ranked).toFixed(2),
          wins: d.stats.SkyWars.wins_ranked,
          losses: d.stats.SkyWars.losses_ranked,
          wlr: (d.stats.SkyWars.wins_ranked / d.stats.SkyWars.losses_ranked).toFixed(2)
        },
        overall: {
          kills: d.stats.SkyWars.kills,
          deaths: d.stats.SkyWars.deaths,
          kdr: (d.stats.SkyWars.kills / d.stats.SkyWars.deaths).toFixed(2),
          wins: d.stats.SkyWars.wins,
          losses: d.stats.SkyWars.losses,
          wlr: (d.stats.SkyWars.wins / d.stats.SkyWars.losses).toFixed(2)
        }
      },
      duels: {
        coins: d.stats.Duels.coins,
        winstreak: d.stats.Duels.current_winstreak,
        title: d.stats.Duels.active_cosmetictitle || 'None Selected',
        uhc1: {
          kills: d.stats.Duels.uhc_duel_kills,
          deaths: d.stats.Duels.uhc_duel_deaths,
          kdr: (d.stats.Duels.uhc_duel_kills / d.stats.Duels.uhc_duel_deaths).toFixed(2),
          wins: d.stats.Duels.uhc_duel_wins,
          losses: d.stats.Duels.uhc_duel_losses,
          wlr: (d.stats.Duels.uhc_duel_wins / d.stats.Duels.uhc_duel_losses).toFixed(2)
        },
        uhc2: {
          kills: d.stats.Duels.uhc_doubles_kills,
          deaths: d.stats.Duels.uhc_doubles_deaths,
          kdr: (d.stats.Duels.uhc_doubles_kills / d.stats.Duels.uhc_doubles_deaths).toFixed(2),
          wins: d.stats.Duels.uhc_doubles_wins,
          losses: d.stats.Duels.uhc_doubles_losses,
          wlr: (d.stats.Duels.uhc_doubles_wins / d.stats.Duels.uhc_doubles_losses).toFixed(2)
        },
        uhc4: {
          kills: d.stats.Duels.uhc_four_kills,
          deaths: d.stats.Duels.uhc_four_deaths,
          kdr: (d.stats.Duels.uhc_four_kills / d.stats.Duels.uhc_four_deaths).toFixed(2),
          wins: d.stats.Duels.uhc_four_wins,
          losses: d.stats.Duels.uhc_four_losses,
          wlr: (d.stats.Duels.uhc_four_wins / d.stats.Duels.uhc_four_losses).toFixed(2)
        },
        skywars1: {
          kills: d.stats.Duels.sw_duel_kills,
          deaths: d.stats.Duels.sw_duel_deaths,
          kdr: (d.stats.Duels.sw_duel_kills / d.stats.Duels.sw_duel_deaths).toFixed(2),
          wins: d.stats.Duels.sw_duel_wins,
          losses: d.stats.Duels.sw_duel_losses,
          wlr: (d.stats.Duels.sw_duel_wins / d.stats.Duels.sw_duel_losses).toFixed(2)
        },
        skywars2: {
          kills: d.stats.Duels.sw_doubles_kills,
          deaths: d.stats.Duels.sw_doubles_deaths,
          kdr: (d.stats.Duels.sw_doubles_kills / d.stats.Duels.sw_doubles_deaths).toFixed(2),
          wins: d.stats.Duels.sw_doubles_wins,
          losses: d.stats.Duels.sw_doubles_losses,
          wlr: (d.stats.Duels.sw_doubles_wins / d.stats.Duels.sw_doubles_losses).toFixed(2)
        },
        blitz: {
          kills: d.stats.Duels.blitz_duel_kills,
          deaths: d.stats.Duels.blitz_duel_deaths,
          kdr: (d.stats.Duels.blitz_duel_kills / d.stats.Duels.blitz_duel_deaths).toFixed(2),
          wins: d.stats.Duels.blitz_duel_wins,
          losses: d.stats.Duels.blitz_duel_losses,
          wlr: (d.stats.Duels.blitz_duel_wins / d.stats.Duels.blitz_duel_losses).toFixed(2)
        },
        sumo: {
          kills: d.stats.Duels.sumo_duel_kills,
          deaths: d.stats.Duels.sumo_duel_deaths,
          kdr: (d.stats.Duels.sumo_duel_kills / d.stats.Duels.sumo_duel_deaths).toFixed(2),
          wins: d.stats.Duels.sumo_duel_wins,
          losses: d.stats.Duels.sumo_duel_losses,
          wlr: (d.stats.Duels.sumo_duel_wins / d.stats.Duels.sumo_duel_losses).toFixed(2)
        },
        classic: {
          kills: d.stats.Duels.classic_duel_kills,
          deaths: d.stats.Duels.classic_duel_deaths,
          kdr: (d.stats.Duels.classic_duel_kills / d.stats.Duels.classic_duel_deaths).toFixed(2),
          wins: d.stats.Duels.classic_duel_wins,
          losses: d.stats.Duels.classic_duel_losses,
          wlr: (d.stats.Duels.classic_duel_wins / d.stats.Duels.classic_duel_losses).toFixed(2)
        },
        bridge1: {
          kills: d.stats.Duels.bridge_duel_kills,
          deaths: d.stats.Duels.bridge_duel_deaths,
          kdr: (d.stats.Duels.bridge_duel_kills / d.stats.Duels.bridge_duel_deaths).toFixed(2),
          wins: d.stats.Duels.bridge_duel_wins,
          losses: d.stats.Duels.bridge_duel_losses,
          wlr: (d.stats.Duels.bridge_duel_wins / d.stats.Duels.bridge_duel_losses).toFixed(2)
        },
        bridge2: {
          kills: d.stats.Duels.bridge_doubles_kills,
          deaths: d.stats.Duels.bridge_doubles_deaths,
          kdr: (d.stats.Duels.bridge_doubles_kills / d.stats.Duels.bridge_doubles_deaths).toFixed(2),
          wins: d.stats.Duels.bridge_doubles_wins,
          losses: d.stats.Duels.bridge_doubles_losses,
          wlr: (d.stats.Duels.bridge_doubles_wins / d.stats.Duels.bridge_doubles_losses).toFixed(2)
        },
        bridge4: {
          kills: d.stats.Duels.bridge_four_kills,
          deaths: d.stats.Duels.bridge_four_deaths,
          kdr: (d.stats.Duels.bridge_four_kills / d.stats.Duels.bridge_four_deaths).toFixed(2),
          wins: d.stats.Duels.bridge_four_wins,
          losses: d.stats.Duels.bridge_four_losses,
          wlr: (d.stats.Duels.bridge_four_wins / d.stats.Duels.bridge_four_losses).toFixed(2)
        },
        overall: {
          kills: d.stats.Duels.kills,
          deaths: d.stats.Duels.deaths,
          kdr: (d.stats.Duels.kills / d.stats.Duels.deaths).toFixed(2),
          wins: d.stats.Duels.wins,
          losses: d.stats.Duels.losses,
          wlr: (d.stats.Duels.wins / d.stats.Duels.losses).toFixed(2)
        }
        
      }
    }
  };

  
  //console.log(func);
  func();
}

fetch(`https://api.hypixel.net/player?key=${key}&name=${name}`).then((res, err) => res.json()).then(data1 => {
  //console.log(data1);
  if (data1.player !== null) {
    setData(data1.player, () => {
      fetch(`https://api.hypixel.net/status?key=${key}&uuid=${data.uuid}`).then((res, err) => res.json().then(response => {
        data.status = response.session;
        fetch(`https://api.hypixel.net/friends?key=${key}&uuid=${data.uuid}`).then((res, err) => res.json()).then(friends => {
          data.friends = friends;
          fetch(`https://api.hypixel.net/guild?key=${key}&player=${data.uuid}`).then((res, err) => res.json()).then(guild => {
            //console.log(guild);
            data.guild = guild;
          
            updateSelected('Network');
          });
        });
      }))
    });

  } else {
    console.log("Success: False");
    window.location.replace('index.html');
  }

}).catch(err => console.log(err))


