const skills = [
  "JavaScript",
  "PowerShell",
  "Python",
  "Bash",
  "Linux (Debian, Arch)",
  "Docker",
  "Nmap",
  "NodeJS",
  "SolidJS",
  "ExpressJS",
  "React",
  "MySQL",
  "Git",
  "VMware",
  "TCP/UDP",
  "AWS",
  "Azure",
  "Google Cloud",
  "Jenkins",
  "Jira",
  "Grafana",
  "ITIL",
  "ServiceNow",
  "DNS",
  "SAAS",
  "IAAS",
  "IAAC",
  "PAAC",
  "PAAS",
  "HTTPS",
  "HTTP",
  "SFTP",
  "FTP",
  "ARP",
  "SSL",
  "LAN",
  "WLAN",
  "WAN",
  "Subnet",
  "RDP",
];

skills.forEach((skill) => {
  i++;
  const newDiv = `
          <div class="col" ><li>${skill}</li></div>
      `;

  const containDiv = document.getElementById("skills");
  containDiv.innerHTML += newDiv;
});

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
          <div class="col">
              <img  src="./assets/folder.gif">
              <div class="reponame" ><a href="${repourl}">${repo.name}</a></div>
              <div class="repodisc" >${repo.description}</div>
              <p>last update: ${repo.updated_at}</p>
          </div>
          `;

      const containDiv = document.getElementById("repos");
      containDiv.innerHTML += newDiv;
    });
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
