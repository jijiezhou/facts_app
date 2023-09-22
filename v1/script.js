/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-09-20 10:31:53
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-09-21 13:56:55
 */

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM elements: Render facts in list
factsList.innerHTML = "";
loadFact();

//load data from supabase
async function loadFact() {
  const res = await fetch(
    "https://iinkutnyzekitylfaizd.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpbmt1dG55emVraXR5bGZhaXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxODgwNTYsImV4cCI6MjAxMDc2NDA1Nn0._tY7IEO2mL9RUyokGRZDwa6DN8mZBZ-CWssuXmz9Zf8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpbmt1dG55emVraXR5bGZhaXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxODgwNTYsImV4cCI6MjAxMDc2NDA1Nn0._tY7IEO2mL9RUyokGRZDwa6DN8mZBZ-CWssuXmz9Zf8",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `
  <li class="fact">
              <p>
                ${fact.text}
                <a class="source" href="${fact.source}">(Source)</a>
              </p>
              <span class="tag" style="background-color: ${
                CATEGORIES.find((cat) => cat.name === fact.category).color
              }"
                >${fact.category}</span
              >
              <div class="vote-buttons">
                <button>👍 24</button>
                <button>🤯 9</button>
                <button>⛔️ 4</button>
              </div>
            </li>
`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle form visibility
btn.addEventListener("click", () => {
  //console.log(form.classList);
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
