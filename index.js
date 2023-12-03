let divsrch = document.getElementsByClassName("srch");

async function sData(parameter) {
  let resp = await fetch(`https://api.github.com/users/${parameter}`);
  let sdata = await resp.json();

  const { login, avatar_url, html_url } = sdata;
  if (login != undefined) {
    divsrch[0].innerHTML = `
            <div class='found'>
                <img src="${avatar_url}" alt="no Pic" />
                <div class="srch11">
                    <span>Id : ${login}</span>
                    <a href="${html_url}"><button>Profile</button></a>
                </div>
            </div>`;
  } else {
    divsrch[0].innerHTML = "<h2>No User Found !!!</h1>";
  }
}

let form = document.forms[0];
let input = form[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sData(input.value);
});

let div = document.getElementsByClassName("allUser");
async function fetchData() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  data.map((val) => {
    const { login, avatar_url, html_url } = val;
    div[0].innerHTML += `
    <div class="detail">
        <img src="${avatar_url}" alt="no pic" />
        <div class = "inside">
            <span>Id : ${login}</span>
            <a href="${html_url}"><button>Profile</button></a>            
        </div>
    </div>`;
  });
}

fetchData();
