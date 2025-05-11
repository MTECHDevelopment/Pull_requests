const fetch = require("node-fetch");

const repoOwner = "CatPy123";
const repoName = "Python";
const apiUrl = `https://api.github.com/repos/${CatPy123}/${Python}/pulls`;

async function listPullRequests() {
  try {
    const response = await fetch(apiUrl);
    const pullRequests = await response.json();
    pullRequests.forEach(pr => {
      console.log(`- [${pr.title}](${pr.html_url})`);
    });
  } catch (error) {
    console.error("Erro ao buscar os Pull Requests:", error);
  }
}

listPullRequests();
