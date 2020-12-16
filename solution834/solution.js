/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
const sumOfDistancesInTree = function (N, edges) {
  const graph = new Array(N);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }
  for (const edge of edges) {
    const [from, to] = edge;
    graph[from].push(to);
    graph[to].push(from);
  }

  const distSum = new Array(N).fill(0);
  const nodeNum = new Array(N).fill(1);

  const postOrder = (root, parent) => {
    const neighbors = graph[root];
    for (const neighbor of neighbors) {
      if (neighbor == parent) {
        continue;
      }
      postOrder(neighbor, root);
      nodeNum[root] += nodeNum[neighbor];
      distSum[root] += nodeNum[neighbor] + distSum[neighbor];
    }
  };

  const preOrder = (root, parent) => {
    const neighbors = graph[root];
    for (const neighbor of neighbors) {
      if (neighbor == parent) {
        continue;
      }
      distSum[neighbor] =
        distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
      preOrder(neighbor, root);
    }
  };

  postOrder(0, -1);
  preOrder(0, -1);

  return distSum;
};
