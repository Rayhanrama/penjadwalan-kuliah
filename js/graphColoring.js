function buildConflictGraph(courses) {
  let graph = {};
  for (let i = 0; i < courses.length; i++) {
    graph[i] = [];
    for (let j = 0; j < courses.length; j++) {
      if (
        i !== j &&
        (courses[i].instructor === courses[j].instructor ||
         courses[i].classroom === courses[j].classroom)
      ) {
        graph[i].push(j);
      }
    }
  }
  return graph;
}

function welshPowell(graph) {
  const vertices = Object.keys(graph).map(Number);
  vertices.sort((a, b) => graph[b].length - graph[a].length);
  const color = {};
  let currentColor = 0;

  for (let v of vertices) {
    if (color[v] === undefined) {
      color[v] = currentColor;
      for (let u of vertices) {
        if (
          color[u] === undefined &&
          !graph[v].includes(u) &&
          !Object.entries(color).some(([k, c]) => parseInt(k) === u && c === currentColor && graph[u].includes(v))
        ) {
          color[u] = currentColor;
        }
      }
      currentColor++;
    }
  }

  return color;
}
