import GitHubIcon from "/src/imgs/GitHub-Mark-32px.png";
import "/src/styles/reset.scss";
import "/src/styles/title-screen.scss";

const container = document.createElement("div");
container.classList.add("title-screen");
document.body.appendChild(container);

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "BATTLESHIP";
container.appendChild(title);

const playButton = document.createElement("button");
playButton.classList.add("play-button");
playButton.textContent = "Start Game";
container.appendChild(playButton);

const footer = document.createElement("footer");
footer.classList.add("footer");
container.appendChild(footer);

const gitHubImg = document.createElement("img");
gitHubImg.src = GitHubIcon;
gitHubImg.classList.add("footer__github-icon");
footer.appendChild(gitHubImg);

const repoLink = document.createElement("a");
repoLink.textContent = "GitHub Repo";
repoLink.classList.add("footer__repo-link");
repoLink.href = "https://github.com/palmerusaf/battle-ship";
repoLink.target = "blank";
footer.appendChild(repoLink);
