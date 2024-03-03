const url = `https://oliborozynski.ddns.net/api/blogposts`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    let posts = data.blogposts;

    posts.forEach((post) => {
      const postDiv = `
      <div class="blog-post">
        <h2 class="blog-title">${post.title}</h2>
        <p class="blog-date">${post.date}</p>
        <p class="blog-content">${post.content}</p>
      </div>
      `;

      const blogpostDiv = document.getElementById("blogposts");
      blogpostDiv.innerHTML += postDiv;
    });
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });
