const inputEl = document.getElementById("title");
const createBtn = document.getElementById("create");
const listEl = document.getElementById("list");

/*
const addLi = (text) => {
  return `
              <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${text}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>
  `;
};
const notes = ["Нотатка перша", "Нотатка друга"];

const render = () => {
  // listEl.insertAdjacentHTML("beforeend", addLi(notes[0]));
  // listEl.insertAdjacentHTML("beforeend", addLi(notes[1]));
  
  // for (let i = 0; i < notes.length; i++) {
    //   listEl.insertAdjacentHTML("beforeend", addLi(notes[i]));
    // }
    // for (let note of notes) {
      //   listEl.insertAdjacentHTML("beforeend", addLi(note));
      // }
      for (const note of notes) {
        listEl.insertAdjacentHTML("beforeend", addLi(note));
      }
    };
    
    render();
    
    createBtn.onclick = () => {
      // listEl.innerHTML = `
      //         <li
      //         class="list-group-item d-flex justify-content-between align-items-center"
      //       >
      //         <span>${inputEl.value}</span>
      //         <span>
      //           <span class="btn btn-small btn-success">&check;</span>
      //           <span class="btn btn-small btn-danger">&times;</span>
      //         </span>
      //       </li>
      // `;
      if (inputEl.value.length === 0) return;
      listEl.insertAdjacentHTML("beforeend", addLi(inputEl.value));
      inputEl.value = "";
    };
    */

const notes = [
  {
    title: "Notes one",
    completed: false,
  },
  {
    title: "Notes two",
    completed: true,
  },
];

const addLi = (e, i) => {
  return `
              <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${e.completed ? "text-decoration-line-through" : ""}">${
    e.title
  }</span>
          <span>
            <span class="btn btn-small btn-${
              e.completed ? "warning" : "success"
            }" data-index=${i} data-type="toggle">&check; </span>
            <span class="btn btn-small btn-danger" data-index=${i} data-type="remuve" >&times;</span>
          </span>
        </li>
  `;
};

createBtn.onclick = () => {
  if (inputEl.value.length === 0) return;
  const newNote = {
    title: inputEl.value,
    completed: false,
  };
  // listEl.insertAdjacentHTML("beforeend", addLi(newNote));
  notes.push(newNote);
  render();
  inputEl.value = "";
};

listEl.onclick = (e) => {
  if (e.target.dataset.index) {
    const index = Number(e.target.dataset.index);
    const type = e.target.dataset.type;
    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remuve") {
      notes.splice(index, 1)
    }
  }
  render()
};

const render = () => {
  listEl.innerHTML = "";

  if (notes.length === 0) listEl.innerHTML = "<p>Відсутні елементи!</p>";

  for (let i = 0; i < notes.length; i++) {
    listEl.insertAdjacentHTML("beforeend", addLi(notes[i], i));
  }
};
render();
