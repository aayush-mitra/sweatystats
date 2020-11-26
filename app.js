const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
document.querySelectorAll('title')[0].innerHTML = `${name} | SweatyStats`
const navs = document.querySelectorAll(".nav-item");

let data = {};
let selected;


navs.forEach(button => {
  button.addEventListener('click', (e) => {
    updateSelected(button.firstElementChild.firstElementChild.innerHTML);

  });
})

const updateInterface = (stuff) => {
  if (selected === "Network") {
    const elems = document.getElementById(selected).children;
    console.log(stuff);
    elems[0].innerHTML = stuff.name + ` [${stuff.guild.guild.tag}]`;
    elems[2].firstElementChild.innerHTML = stuff.rank;
    elems[3].firstElementChild.innerHTML = stuff.level;
    elems[4].firstElementChild.innerHTML = stuff.nameHistory.join(', ');
    elems[5].firstElementChild.innerHTML = stuff.karma;
    elems[6].firstElementChild.innerHTML = stuff.lastLogin;
    elems[8].firstElementChild.innerHTML = stuff.guild.guild.name;
    elems[9].firstElementChild.innerHTML = stuff.guild.guild.members.length;
    if (stuff.status.online === false) {
      elems[12].firstElementChild.innerHTML = 'offline';
    } else {
      elems[12].firstElementChild.innerHTML = `Online, playing: ${stuff.status.gameType}, mode: ${stuff.status.mode}`;
    }
  } else if (selected === "Bedwars") {
    const elems = document.getElementById(selected).children;
    elems[0].innerHTML = stuff.name + ` [${stuff.guild.guild.tag}] - Bedwars`;
    elems[2].firstElementChild.innerHTML = stuff.stats.bedwars.coins;
    elems[3].firstElementChild.innerHTML = stuff.stats.bedwars.winstreak;
    elems[4].firstElementChild.innerHTML = stuff.stats.bedwars.level;
    //kills
    elems[5].children[1].firstElementChild.children[1].innerHTML = stuff.stats.bedwars.solo.kills;
    elems[5].children[1].firstElementChild.children[2].innerHTML = stuff.stats.bedwars.doubles.kills;
    elems[5].children[1].firstElementChild.children[3].innerHTML = stuff.stats.bedwars.threes.kills;
    elems[5].children[1].firstElementChild.children[4].innerHTML = stuff.stats.bedwars.fours.kills;
    elems[5].children[1].firstElementChild.children[5].innerHTML = stuff.stats.bedwars.fourvfour.kills;
    elems[5].children[1].firstElementChild.children[6].innerHTML = stuff.stats.bedwars.overall.kills;
    //kills
    elems[5].children[1].children[1].children[1].innerHTML = stuff.stats.bedwars.solo.deaths;
    elems[5].children[1].children[1].children[2].innerHTML = stuff.stats.bedwars.doubles.deaths;
    elems[5].children[1].children[1].children[3].innerHTML = stuff.stats.bedwars.threes.deaths;
    elems[5].children[1].children[1].children[4].innerHTML = stuff.stats.bedwars.fours.deaths;
    elems[5].children[1].children[1].children[5].innerHTML = stuff.stats.bedwars.fourvfour.deaths;
    elems[5].children[1].children[1].children[6].innerHTML = stuff.stats.bedwars.overall.deaths;
    //kills
    elems[5].children[1].children[2].children[1].innerHTML = stuff.stats.bedwars.solo.kdr;
    elems[5].children[1].children[2].children[2].innerHTML = stuff.stats.bedwars.doubles.kdr;
    elems[5].children[1].children[2].children[3].innerHTML = stuff.stats.bedwars.threes.kdr;
    elems[5].children[1].children[2].children[4].innerHTML = stuff.stats.bedwars.fours.kdr;
    elems[5].children[1].children[2].children[5].innerHTML = stuff.stats.bedwars.fourvfour.kdr;
    elems[5].children[1].children[2].children[6].innerHTML = stuff.stats.bedwars.overall.kdr;
    //kills
    elems[5].children[1].children[3].children[1].innerHTML = stuff.stats.bedwars.solo.finals;
    elems[5].children[1].children[3].children[2].innerHTML = stuff.stats.bedwars.doubles.finals;
    elems[5].children[1].children[3].children[3].innerHTML = stuff.stats.bedwars.threes.finals;
    elems[5].children[1].children[3].children[4].innerHTML = stuff.stats.bedwars.fours.finals;
    elems[5].children[1].children[3].children[5].innerHTML = stuff.stats.bedwars.fourvfour.finals;
    elems[5].children[1].children[3].children[6].innerHTML = stuff.stats.bedwars.overall.finals;
    //kills
    elems[5].children[1].children[4].children[1].innerHTML = stuff.stats.bedwars.solo.fdeaths;
    elems[5].children[1].children[4].children[2].innerHTML = stuff.stats.bedwars.doubles.fdeaths;
    elems[5].children[1].children[4].children[3].innerHTML = stuff.stats.bedwars.threes.fdeaths;
    elems[5].children[1].children[4].children[4].innerHTML = stuff.stats.bedwars.fours.fdeaths;
    elems[5].children[1].children[4].children[5].innerHTML = stuff.stats.bedwars.fourvfour.fdeaths;
    elems[5].children[1].children[4].children[6].innerHTML = stuff.stats.bedwars.overall.fdeaths;
    //kills
    elems[5].children[1].children[5].children[1].innerHTML = stuff.stats.bedwars.solo.fkdr;
    elems[5].children[1].children[5].children[2].innerHTML = stuff.stats.bedwars.doubles.fkdr;
    elems[5].children[1].children[5].children[3].innerHTML = stuff.stats.bedwars.threes.fkdr;
    elems[5].children[1].children[5].children[4].innerHTML = stuff.stats.bedwars.fours.fkdr;
    elems[5].children[1].children[5].children[5].innerHTML = stuff.stats.bedwars.fourvfour.fkdr;
    elems[5].children[1].children[5].children[6].innerHTML = stuff.stats.bedwars.overall.fkdr;
    //kills
    elems[5].children[1].children[6].children[1].innerHTML = stuff.stats.bedwars.solo.wins;
    elems[5].children[1].children[6].children[2].innerHTML = stuff.stats.bedwars.doubles.wins;
    elems[5].children[1].children[6].children[3].innerHTML = stuff.stats.bedwars.threes.wins;
    elems[5].children[1].children[6].children[4].innerHTML = stuff.stats.bedwars.fours.wins;
    elems[5].children[1].children[6].children[5].innerHTML = stuff.stats.bedwars.fourvfour.wins;
    elems[5].children[1].children[6].children[6].innerHTML = stuff.stats.bedwars.overall.wins;
    //kills
    elems[5].children[1].children[7].children[1].innerHTML = stuff.stats.bedwars.solo.losses;
    elems[5].children[1].children[7].children[2].innerHTML = stuff.stats.bedwars.doubles.losses;
    elems[5].children[1].children[7].children[3].innerHTML = stuff.stats.bedwars.threes.losses;
    elems[5].children[1].children[7].children[4].innerHTML = stuff.stats.bedwars.fours.losses;
    elems[5].children[1].children[7].children[5].innerHTML = stuff.stats.bedwars.fourvfour.losses;
    elems[5].children[1].children[7].children[6].innerHTML = stuff.stats.bedwars.overall.losses;
    //kills
    elems[5].children[1].children[8].children[1].innerHTML = stuff.stats.bedwars.solo.wlr;
    elems[5].children[1].children[8].children[2].innerHTML = stuff.stats.bedwars.doubles.wlr;
    elems[5].children[1].children[8].children[3].innerHTML = stuff.stats.bedwars.threes.wlr;
    elems[5].children[1].children[8].children[4].innerHTML = stuff.stats.bedwars.fours.wlr;
    elems[5].children[1].children[8].children[5].innerHTML = stuff.stats.bedwars.fourvfour.wlr;
    elems[5].children[1].children[8].children[6].innerHTML = stuff.stats.bedwars.overall.wlr;
    //kills
    elems[5].children[1].children[9].children[1].innerHTML = stuff.stats.bedwars.solo.bedsbroken;
    elems[5].children[1].children[9].children[2].innerHTML = stuff.stats.bedwars.doubles.bedsbroken;
    elems[5].children[1].children[9].children[3].innerHTML = stuff.stats.bedwars.threes.bedsbroken;
    elems[5].children[1].children[9].children[4].innerHTML = stuff.stats.bedwars.fours.bedsbroken;
    elems[5].children[1].children[9].children[5].innerHTML = stuff.stats.bedwars.fourvfour.bedsbroken;
    elems[5].children[1].children[9].children[6].innerHTML = stuff.stats.bedwars.overall.bedsbroken;
    //kills
    elems[5].children[1].children[10].children[1].innerHTML = stuff.stats.bedwars.solo.bedslost;
    elems[5].children[1].children[10].children[2].innerHTML = stuff.stats.bedwars.doubles.bedslost;
    elems[5].children[1].children[10].children[3].innerHTML = stuff.stats.bedwars.threes.bedslost;
    elems[5].children[1].children[10].children[4].innerHTML = stuff.stats.bedwars.fours.bedslost;
    elems[5].children[1].children[10].children[5].innerHTML = stuff.stats.bedwars.fourvfour.bedslost;
    elems[5].children[1].children[10].children[6].innerHTML = stuff.stats.bedwars.overall.bedslost;
    //kills
    elems[5].children[1].children[11].children[1].innerHTML = stuff.stats.bedwars.solo.bblr;
    elems[5].children[1].children[11].children[2].innerHTML = stuff.stats.bedwars.doubles.bblr;
    elems[5].children[1].children[11].children[3].innerHTML = stuff.stats.bedwars.threes.bblr;
    elems[5].children[1].children[11].children[4].innerHTML = stuff.stats.bedwars.fours.bblr;
    elems[5].children[1].children[11].children[5].innerHTML = stuff.stats.bedwars.fourvfour.bblr;
    elems[5].children[1].children[11].children[6].innerHTML = stuff.stats.bedwars.overall.bblr;


  } else if (selected === "Skywars") {
    const elems = document.getElementById(selected).children;
    elems[0].innerHTML = stuff.name + ` [${stuff.guild.guild.tag}] - Skywars`;
    elems[2].firstElementChild.innerHTML = stuff.stats.skywars.coins;
    elems[3].firstElementChild.innerHTML = stuff.stats.skywars.level;
    elems[4].firstElementChild.innerHTML = stuff.stats.skywars.prestige;
    //kills
    elems[5].children[1].firstElementChild.children[1].innerHTML = stuff.stats.skywars.solonormal.kills;
    elems[5].children[1].firstElementChild.children[2].innerHTML = stuff.stats.skywars.soloinsane.kills;
    elems[5].children[1].firstElementChild.children[3].innerHTML = stuff.stats.skywars.teamnormal.kills;
    elems[5].children[1].firstElementChild.children[4].innerHTML = stuff.stats.skywars.teaminsane.kills;
    elems[5].children[1].firstElementChild.children[5].innerHTML = stuff.stats.skywars.ranked.kills;
    elems[5].children[1].firstElementChild.children[6].innerHTML = stuff.stats.skywars.overall.kills;
    //kills
    elems[5].children[1].children[1].children[1].innerHTML = stuff.stats.skywars.solonormal.deaths;
    elems[5].children[1].children[1].children[2].innerHTML = stuff.stats.skywars.soloinsane.deaths;
    elems[5].children[1].children[1].children[3].innerHTML = stuff.stats.skywars.teamnormal.deaths;
    elems[5].children[1].children[1].children[4].innerHTML = stuff.stats.skywars.teaminsane.deaths;
    elems[5].children[1].children[1].children[5].innerHTML = stuff.stats.skywars.ranked.deaths;
    elems[5].children[1].children[1].children[6].innerHTML = stuff.stats.skywars.overall.deaths;
    //kills
    elems[5].children[1].children[2].children[1].innerHTML = stuff.stats.skywars.solonormal.kdr;
    elems[5].children[1].children[2].children[2].innerHTML = stuff.stats.skywars.soloinsane.kdr;
    elems[5].children[1].children[2].children[3].innerHTML = stuff.stats.skywars.teamnormal.kdr;
    elems[5].children[1].children[2].children[4].innerHTML = stuff.stats.skywars.teaminsane.kdr;
    elems[5].children[1].children[2].children[5].innerHTML = stuff.stats.skywars.ranked.kdr;
    elems[5].children[1].children[2].children[6].innerHTML = stuff.stats.skywars.overall.kdr;
    //kills
    elems[5].children[1].children[3].children[1].innerHTML = stuff.stats.skywars.solonormal.wins;
    elems[5].children[1].children[3].children[2].innerHTML = stuff.stats.skywars.soloinsane.wins;
    elems[5].children[1].children[3].children[3].innerHTML = stuff.stats.skywars.teamnormal.wins;
    elems[5].children[1].children[3].children[4].innerHTML = stuff.stats.skywars.teaminsane.wins;
    elems[5].children[1].children[3].children[5].innerHTML = stuff.stats.skywars.ranked.wins;
    elems[5].children[1].children[3].children[6].innerHTML = stuff.stats.skywars.overall.wins;
    //kills
    elems[5].children[1].children[4].children[1].innerHTML = stuff.stats.skywars.solonormal.losses;
    elems[5].children[1].children[4].children[2].innerHTML = stuff.stats.skywars.soloinsane.losses;
    elems[5].children[1].children[4].children[3].innerHTML = stuff.stats.skywars.teamnormal.losses;
    elems[5].children[1].children[4].children[4].innerHTML = stuff.stats.skywars.teaminsane.losses;
    elems[5].children[1].children[4].children[5].innerHTML = stuff.stats.skywars.ranked.losses;
    elems[5].children[1].children[4].children[6].innerHTML = stuff.stats.skywars.overall.losses;
    //kills
    elems[5].children[1].children[5].children[1].innerHTML = stuff.stats.skywars.solonormal.wlr;
    elems[5].children[1].children[5].children[2].innerHTML = stuff.stats.skywars.soloinsane.wlr;
    elems[5].children[1].children[5].children[3].innerHTML = stuff.stats.skywars.teamnormal.wlr;
    elems[5].children[1].children[5].children[4].innerHTML = stuff.stats.skywars.teaminsane.wlr;
    elems[5].children[1].children[5].children[5].innerHTML = stuff.stats.skywars.ranked.wlr;
    elems[5].children[1].children[5].children[6].innerHTML = stuff.stats.skywars.overall.wlr;
  } else if (selected === "Duels") {
    const elems = document.getElementById(selected).children;
    elems[0].innerHTML = stuff.name + ` [${stuff.guild.guild.tag}] - Duels`;
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

fetch(`https://api.hypixel.net/player?key=d5db2401-3d43-4ece-a681-a013df180a3c&name=${name}`).then((res, err) => res.json()).then(data1 => {
  //console.log(data1);
  if (data1.player !== null) {
    setData(data1.player, () => {
      fetch(`https://api.hypixel.net/status?key=d5db2401-3d43-4ece-a681-a013df180a3c&uuid=${data.uuid}`).then((res, err) => res.json().then(response => {
        data.status = response.session;
        fetch(`https://api.hypixel.net/friends?key=d5db2401-3d43-4ece-a681-a013df180a3c&uuid=${data.uuid}`).then((res, err) => res.json()).then(friends => {
          data.friends = friends.records.length;
          fetch(`https://api.hypixel.net/guild?key=d5db2401-3d43-4ece-a681-a013df180a3c&player=${data.uuid}`).then((res, err) => res.json()).then(guild => {
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


//Bonus SHIT
/* 
1. add || 0
2. add rank colors, skins, font
3. add dream stats
4. add extra skyblock shit
*/