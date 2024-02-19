import React from 'react'

const HomePage = () => {
  const problems = [
    { id: 1, title: 'Two Sum', tags: ['Array', 'Hash Table'] },
    { id: 2, title: 'Add Two Numbers', tags: ['Linked List', 'Math'] },
    { id: 3, title: 'Longest Substring Without Repeating Characters', tags: ['Hash Table', 'Two Pointers', 'String'] },
    // Add more problem data as needed
  ];
  return (
    <div className="prob-grid">
     <h1>Welcome to the Online Judge!</h1>
      <p>This is the homepage of our application.</p>
      {problems.map(problem => (
          <div key={problem.id} className="problem-card">
            <h2>{problem.title}</h2>
            <ul className="tag-list">
              {problem.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default HomePage
