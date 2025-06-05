const localData = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inputForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const course = {
      name: document.getElementById("courseName").value,
      instructor: document.getElementById("instructor").value,
      classroom: document.getElementById("classroom").value,
      capacity: parseInt(document.getElementById("capacity").value),
    };

    localData.push(course);
    localStorage.setItem("courses", JSON.stringify(localData));
    alert("Mata kuliah ditambahkan.");
  });
});
