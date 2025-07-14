export const dsaQuestions = [
  {
    id: 1,
    question: "What is the time complexity of searching in a binary search tree in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 2,
    category: "Binary Search Tree",
    explanation: "In the worst case, a BST can become skewed (like a linked list), requiring O(n) time to search.",
    difficulty: "Medium",
    topics: ["Trees", "Time Complexity"]
  },
  {
    id: 2,
    question: "Which data structure is used to implement recursion?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    category: "Stack",
    explanation: "Recursion uses a call stack to keep track of function calls and their local variables.",
    difficulty: "Easy",
    topics: ["Stack", "Recursion"]
  },
  {
    id: 3,
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    category: "Sorting Algorithms",
    explanation: "Merge sort requires O(n) extra space for the temporary arrays used during merging.",
    difficulty: "Medium",
    topics: ["Sorting", "Space Complexity"]
  },
  {
    id: 4,
    question: "In a hash table with separate chaining, what is the average time complexity for search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 0,
    category: "Hash Table",
    explanation: "With a good hash function and load factor, hash tables provide O(1) average search time.",
    difficulty: "Easy",
    topics: ["Hashing", "Time Complexity"]
  },
  {
    id: 5,
    question: "Which traversal of a binary tree visits nodes in ascending order for a BST?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    correctAnswer: 1,
    category: "Binary Search Tree",
    explanation: "Inorder traversal (left-root-right) visits nodes in ascending order for a BST.",
    difficulty: "Easy",
    topics: ["Trees", "Traversal"]
  },
  {
    id: 6,
    question: "What is the worst-case time complexity of QuickSort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
    correctAnswer: 2,
    category: "Sorting Algorithms",
    explanation: "QuickSort has O(n²) worst-case when the pivot is always the smallest or largest element.",
    difficulty: "Medium",
    topics: ["Sorting", "Time Complexity"]
  },
  {
    id: 7,
    question: "Which data structure follows LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Tree"],
    correctAnswer: 1,
    category: "Stack",
    explanation: "Stack follows LIFO principle where the last element added is the first one to be removed.",
    difficulty: "Easy",
    topics: ["Stack", "Basic Concepts"]
  },
  {
    id: 8,
    question: "What is the minimum number of nodes in an AVL tree of height h?",
    options: ["2^h", "h+1", "Fibonacci(h+2)", "h"],
    correctAnswer: 2,
    category: "AVL Tree",
    explanation: "The minimum nodes in AVL tree follows Fibonacci sequence: F(h+2) where F(1)=1, F(2)=2.",
    difficulty: "Hard",
    topics: ["Trees", "AVL Tree", "Mathematical Analysis"]
  },
  {
    id: 9,
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["BFS", "DFS", "Dijkstra's", "Binary Search"],
    correctAnswer: 2,
    category: "Graph Algorithms",
    explanation: "Dijkstra's algorithm finds shortest paths from a source to all vertices in weighted graphs.",
    difficulty: "Medium",
    topics: ["Graphs", "Shortest Path", "Algorithms"]
  },
  {
    id: 10,
    question: "What is the time complexity of inserting an element at the beginning of a linked list?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 0,
    category: "Linked List",
    explanation: "Inserting at the beginning of a linked list takes constant time as we only update pointers.",
    difficulty: "Easy",
    topics: ["Linked List", "Time Complexity"]
  },
  {
    id: 11,
    question: "Which sorting algorithm is stable and has O(n log n) worst-case complexity?",
    options: ["QuickSort", "HeapSort", "MergeSort", "Selection Sort"],
    correctAnswer: 2,
    category: "Sorting Algorithms",
    explanation: "MergeSort is stable and guarantees O(n log n) time complexity in all cases.",
    difficulty: "Medium",
    topics: ["Sorting", "Stability", "Time Complexity"]
  },
  {
    id: 12,
    question: "In a max heap, what is the relationship between parent and child nodes?",
    options: ["Parent < Child", "Parent > Child", "Parent = Child", "No specific relationship"],
    correctAnswer: 1,
    category: "Heap",
    explanation: "In a max heap, every parent node is greater than or equal to its children.",
    difficulty: "Easy",
    topics: ["Heap", "Basic Concepts"]
  },
  {
    id: 13,
    question: "What is the space complexity of BFS (Breadth-First Search)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    category: "Graph Algorithms",
    explanation: "BFS uses a queue that can store up to O(n) vertices in the worst case.",
    difficulty: "Medium",
    topics: ["Graphs", "BFS", "Space Complexity"]
  },
  {
    id: 14,
    question: "Which data structure is best for implementing LRU (Least Recently Used) cache?",
    options: ["Array", "Stack", "Hash Map + Doubly Linked List", "Binary Tree"],
    correctAnswer: 2,
    category: "Cache Design",
    explanation: "LRU cache combines hash map for O(1) access and doubly linked list for O(1) insertion/deletion.",
    difficulty: "Hard",
    topics: ["Design", "Hash Map", "Linked List"]
  },
  {
    id: 15,
    question: "What is the maximum number of edges in a simple undirected graph with n vertices?",
    options: ["n", "n-1", "n(n-1)/2", "n²"],
    correctAnswer: 2,
    category: "Graph Theory",
    explanation: "In a complete graph, each vertex connects to n-1 others, giving n(n-1)/2 edges total.",
    difficulty: "Medium",
    topics: ["Graphs", "Graph Theory", "Mathematical Analysis"]
  },
  {
    id: 16,
    question: "Which algorithm can detect cycles in a directed graph?",
    options: ["BFS only", "DFS only", "Both BFS and DFS", "Dijkstra's algorithm"],
    correctAnswer: 1,
    category: "Graph Algorithms",
    explanation: "DFS with color coding (white/gray/black) can detect cycles in directed graphs efficiently.",
    difficulty: "Medium",
    topics: ["Graphs", "DFS", "Cycle Detection"]
  },
  {
    id: 17,
    question: "What is the worst-case time complexity of searching in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 2,
    category: "Hash Table",
    explanation: "In worst case (all keys hash to same bucket), search becomes O(n) like a linked list.",
    difficulty: "Medium",
    topics: ["Hashing", "Time Complexity", "Worst Case"]
  },
  {
    id: 18,
    question: "In dynamic programming, what does 'optimal substructure' mean?",
    options: ["Subproblems don't overlap", "Optimal solution contains optimal solutions to subproblems", "Problems can be solved greedily", "Memory usage is optimized"],
    correctAnswer: 1,
    category: "Dynamic Programming",
    explanation: "Optimal substructure means the optimal solution can be constructed from optimal solutions of subproblems.",
    difficulty: "Hard",
    topics: ["Dynamic Programming", "Algorithm Design"]
  },
  {
    id: 19,
    question: "What is the time complexity of building a heap from an unsorted array?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 0,
    category: "Heap",
    explanation: "Building a heap using bottom-up approach (heapify) takes O(n) time, not O(n log n).",
    difficulty: "Hard",
    topics: ["Heap", "Heapify", "Time Complexity"]
  },
  {
    id: 20,
    question: "Which property must a red-black tree satisfy?",
    options: ["All paths have same number of red nodes", "All paths have same number of black nodes", "Root is always red", "Leaves are always red"],
    correctAnswer: 1,
    category: "Red-Black Tree",
    explanation: "Red-black trees ensure all paths from root to leaves have the same number of black nodes.",
    difficulty: "Hard",
    topics: ["Trees", "Red-Black Tree", "Tree Properties"]
  }
];

export const getRandomQuestions = (count = 10) => {
  // Fisher-Yates shuffle algorithm for proper randomization
  const shuffled = [...dsaQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

export const getQuestionsByCategory = (category) => {
  return dsaQuestions.filter(q => q.category === category);
};

export const getQuestionsByDifficulty = (difficulty) => {
  return dsaQuestions.filter(q => q.difficulty === difficulty);
};

export const getAllCategories = () => {
  return [...new Set(dsaQuestions.map(q => q.category))];
};

export const getAllTopics = () => {
  return [...new Set(dsaQuestions.flatMap(q => q.topics))];
}; 