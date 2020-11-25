const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const navs = document.querySelectorAll(".nav-item");

let data = {};
let selected;

updateSelected('Network');
navs.forEach(button => {
  button.addEventListener('click', (e) => {
    updateSelected(button.firstElementChild.firstElementChild.innerHTML);
      
  });
})


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
    lastLogin: d.lastLogin,
    uuid: d.uuid,
    nameHistory: d.knownAliases,
    level: Math.floor((Math.sqrt((2 * d.networkExp) + 30625) / 50) - 2.5),
    stats: {
      bedwars: {
        winstreak: d.stats.Bedwars.winstreak,
        coins: d.stats.Bedwars.coins,
        level: Math.floor(d.stats.Bedwars.Experience / 5000),
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
            updateInterface(data);
          });
        });
      }))
    });

  } else {
    console.log("Success: False");
    window.location.replace('index.html');
  }

}).catch(err => console.log(err))


const updateInterface = (stuff) => {
  const elems = document.getElementById(selected).children;
  console.log(stuff);
  elems[0].innerHTML = stuff.name;
  elems[2].firstElementChild.innerHTML = stuff.rank;
  elems[3].firstElementChild.innerHTML = stuff.level;
  elems[4].firstElementChild.innerHTML = stuff.nameHistory.toString();
  elems[5].firstElementChild.innerHTML = stuff.karma;
  elems[6].firstElementChild.innerHTML = stuff.lastLogin;
  elems[8].firstElementChild.innerHTML = stuff.guild.guild.name;
  elems[9].firstElementChild.innerHTML = stuff.guild.guild.members.length;
  if (stuff.status.online === false) {
    elems[12].firstElementChild.innerHTML = 'offline';
  } else {
    elems[12].firstElementChild.innerHTML = `Online, playing: ${stuff.status.gameType}, mode: ${stuff.status.mode}`;
  }
};