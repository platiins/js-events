const form = document.querySelector(".form");
const nameContainer = document.querySelector(".name-div");
const artistContainer = document.querySelector(".artist-div");
const runtimeContainer = document.querySelector(".runtime-div");
const nameInput = document.querySelector("#name");
const artistInput = document.querySelector("#artist");
const runtimeMinInput = document.querySelector("#runtime-min");
const runtimeSecInput = document.querySelector("#runtime-sec");
const addBtn = document.querySelector(".btn");
const listTitle = document.querySelector(".list-title");

const ul = document.createElement("ul");
ul.classList.add("ul");
listTitle.append(ul);

//error for missing inputs:
const error = document.createElement("div");
const error2 = document.createElement("div");
const error3 = document.createElement("div");
const error4 = document.createElement("div");

form.addEventListener("submit", (event) => {
  const naming = nameInput.value;
  const artist = artistInput.value;

  // preventing list rerendering
  event.preventDefault();

  if (naming === "" && artist.length > 0) {
    nameInput.classList.add("wrong-input");
    artistInput.classList.remove("wrong-input");

    error.textContent = "Please enter the name of the song";
    nameContainer.append(error);
    error.classList.add("error-msg");
    error3.remove();
    error4.remove();
    error2.remove();
  } else if (artist === "" && naming.length > 0) {
    artistInput.classList.add("wrong-input");
    nameInput.classList.remove("wrong-input");

    error2.textContent = "Please enter the artist of the song";
    artistContainer.append(error2);
    error2.classList.add("error-msg");

    error.remove();
    error3.remove();
    error4.remove();
  } else if (naming === "" && artist === "") {
    error3.textContent = "Please enter the name of the song";
    nameContainer.append(error3);
    error3.classList.add("error-msg");

    error4.textContent = "Please enter the artist of the song";
    artistContainer.append(error4);
    error4.classList.add("error-msg");

    nameInput.classList.add("wrong-input");
    artistInput.classList.add("wrong-input");

    error.remove();
    error2.remove();
  } else {
    error.remove();
    error2.remove();
    error3.remove();
    error4.remove();
    nameInput.classList.remove("wrong-input");
    artistInput.classList.remove("wrong-input");

    // 1 song container
    const songContainer = document.createElement("li");
    songContainer.classList.add("song-container");
    ul.append(songContainer);

    //displaying song name and artist as input results
    const songDecription = document.createElement("p");
    songDecription.textContent = `${naming} by ${artist}`;
    songContainer.append(songDecription);

    // adding delete btn and remove event

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("btn-delete");
    songContainer.append(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      songContainer.remove();
    });

    // adding song runtime
    const songRuntime = document.createElement("p");
    songDecription.append(songRuntime);
    songRuntime.classList.add("display-none");
    songRuntime.classList.add("runtime");

    const timeMin = +runtimeMinInput.value;
    const timeSec = +runtimeSecInput.value;

    if (timeMin === 0 && timeSec === 0) {
      songRuntime.textContent = "no runtime value provided";
    } else if (isNaN(timeMin) || isNaN(timeSec)) {
      songRuntime.textContent = "wrong value";
    } else {
      songRuntime.textContent = `song runtime: 00:${String(timeMin).padStart(
        2,
        "0"
      )}:${String(timeSec).padStart(2, "0")}`;
    }

    songContainer.addEventListener("click", () => {
      songRuntime.classList.toggle("display-none");
    });

    form.reset();
  }
});

//issues:

// const naming - unable to add class to make font bold as is input value

// runtime validation??? how to check if is a number
