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
    elems[8].firstElementChild.innerHTML = stuff.guild.guild.name ;
    elems[9].firstElementChild.innerHTML = stuff.guild.guild.members.length;
    if (stuff.status.online === false) {
      elems[12].firstElementChild.innerHTML = 'offline';
    } else {
      elems[12].firstElementChild.innerHTML = `Online, playing: ${stuff.status.gameType}, mode: ${stuff.status.mode}`;
    }
  } else if (selected === "Bedwars") {
    const elems = document.getElementById(selected).children;
    elems[0].innerHTML = stuff.name + `[${stuff.guild.guild.tag}] - Bedwars`;
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
    
    
  }
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
      }
    }
  };
  //console.log(data);
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


