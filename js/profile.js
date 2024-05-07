const profile = {
  id: "124213423",
  fullName: "Nhats",
  nextRank: "Level 2",
  rank: "Jade",
  total: 4259090,
  curentRankXP: 40000,
  maxRankXP: 60000,
};

const fullName = document?.getElementById("fullName");
const rank = document.getElementById("rank");
const total = document.getElementById("total");
const progess = document.getElementById("progess");
const curentRankXP = document.getElementById("curentRankXP");
const maxRankXP = document.getElementById("maxRankXP");
const nextLevel = document.getElementById("nextLevel");
async function loadProfile() {
  fullName.innerText = profile?.fullName;
  rank.innerText = profile?.rank;
  if (total) {
    total.innerText = `$ ${Math.floor(profile?.total).toLocaleString("vi-VN")}`;
  }

  if (progess) {
    progess.style.width = `${
      (profile.curentRankXP / profile.maxRankXP) * 100
    }%`;
  }

  if (curentRankXP && maxRankXP) {
    curentRankXP.innerText = Math.floor(profile.curentRankXP).toLocaleString(
      "vi-VN"
    );
    maxRankXP.innerText = Math.floor(profile.maxRankXP).toLocaleString("vi-VN");
  }

  if (nextLevel) {
    nextLevel.innerText = profile.nextRank;
  }
}

loadProfile();
