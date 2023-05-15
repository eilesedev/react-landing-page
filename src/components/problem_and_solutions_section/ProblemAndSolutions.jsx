import React from 'react';
import './ProblemAndSolutions.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const problems = [
  {
    id: 1,
    title: 'Goal Setting',
    description: ' Many struggle to find direction and motivation in their lives, feeling stuck and unable to reach their full potential.',
    solution: 'Learn the art of effective goal setting and develop a roadmap for success.'
  },
  {
    id: 2,
    title: 'Motivation Boost',
    description: 'Many struggle to maintain motivation and overcome obstacles in their pursuit of personal and professional goals.',
    solution: 'Discover powerful techniques to stay motivated and overcome obstacles.'
  },
  {
    id: 3,
    title: 'Personal Growth',
    description: 'Many feel constrained by their current circumstances and struggle to tap into their true potential.',
    solution: 'Unlock your true potential and experience personal growth and transformation.'
  }
];

const ProblemCard = ({ problem }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{problem.title}</h5>
        <p class="card-text">{problem.description}</p>
        <p>{problem.solution}</p>
      </div>
      <div className='btn-div'>
        <a href="./" class="btn btn-primary btn-somewhere">Go somewhere</a>
      </div>
    </div>
  );
};

const ProblemsAndSolutions = () => {
  return (
    <section className="problems-solutions">
      <h2>Feeling Stuck?</h2>
      <div className="card-container">
        {problems.map(problem => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
