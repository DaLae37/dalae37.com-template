const gamerIDs = document.querySelectorAll(".gamer p:nth-child(1)");
gamerIDs[0].addEventListener("click", () => {
    gamerIDs[0].textContent = (gamerIDs[0].textContent === "Blizzard") ? "DaLae37#3866" : "Blizzard";
});
gamerIDs[1].addEventListener("click", () => {
    gamerIDs[1].textContent = (gamerIDs[1].textContent === "Riot Games") ? "DaLae37#DaLae" : "Riot Games";
});
gamerIDs[2].addEventListener("click", () => {
    gamerIDs[2].textContent = (gamerIDs[2].textContent === "EA") ? "dalae37@naver.com" : "EA";
});