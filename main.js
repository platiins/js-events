const form = document.querySelector(".form");

const nameInput = document.querySelector("#name");
const artistInput = document.querySelector("#artist");
const runtimeInput = document.querySelector("#runtime");

const addBtn = document.querySelector(".btn");

const listTitle = document.querySelector(".list-title");
const ul = document.createElement("ul");

listTitle.append(ul);

form.addEventListener("submit", (event) => {
  // 1 song container
  const songContainer = document.createElement("li");
  ul.append(songContainer);

  //dispalying song name and artist as input results
  const songDecription = document.createElement("p");
  songDecription.textContent = `${nameInput.value} by ${artistInput.value}`;
  songContainer.append(songDecription);

  // adding delete btn and remove event

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  songContainer.append(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    songContainer.remove();
  });

  // adding song runtime 
  const songRuntime = document.createElement("p");
  songDecription.append(songRuntime);
  songRuntime.textContent = runtimeInput.value;

  songRuntime.classList.add("display-none");

  songContainer.addEventListener("click", () => {
    songRuntime.classList.toggle("display-none");
  });

  // preventing list rerendering
  event.preventDefault();
  console.log("success");
});
