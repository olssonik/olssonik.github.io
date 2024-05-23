fetch("https://api.github.com/users/olssonik/repos")
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
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
          ${repo.updated_at.slice(0, 10)}
        </div>
        <div class="card-footer text-body-secondary">
          <a href="${repourl}" class="btn btn-primary">${repo.name}</a>
        </div>
      </div>
      `;

      const containDiv = document.getElementById("repos");
      containDiv.innerHTML += newDiv;
    });
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });
