const url = `https://api.github.com/users/olssonik/repos`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Data contains an array of repositories
    data.forEach((repo) => {
      const repourl = `https://github.com/olssonik/${repo.name}`;

      const newDiv = `
          <div class="item">
              <img  src="./assets/folder.gif">
              <div class="reponame" ><a href="${repourl}">${repo.name}</a></div>
              <div class="repodisc" >${repo.description}</div>
              <p>last update: ${repo.updated_at}</p>

          </div><br />
          `;

      const containDiv = document.getElementById("repos");
      containDiv.innerHTML += newDiv;
    });
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });
