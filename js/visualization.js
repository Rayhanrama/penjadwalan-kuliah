document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("scheduleGraph");
  const ctx = canvas.getContext("2d");
  const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];

  const graph = buildConflictGraph(storedCourses);
  const coloring = welshPowell(graph);

  storedCourses.forEach((course, index) => {
    ctx.fillStyle = `hsl(${(coloring[index] * 137.5) % 360}, 70%, 70%)`;
    ctx.fillRect(50 + (index * 60), 50, 50, 50);
    ctx.fillStyle = "black";
    ctx.fillText(course.name, 50 + (index * 60), 115);
  });
});
