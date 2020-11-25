const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const navs = document.querySelectorAll(".nav-item");

let data = {};
let selected;

updateSelected('Overall');
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

function setData(d) {

  data = {
    name: d.displayname,
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
  console.log(data);
}

fetch(`https://api.hypixel.net/player?key=d5db2401-3d43-4ece-a681-a013df180a3c&name=${name}`).then((res, err) => res.json()).then(data => {
  console.log(data);
  if (data.success === true) {
    setData(data.player);
  } else {
    console.log("Success: False");
  }

}).catch(err => console.log(err))