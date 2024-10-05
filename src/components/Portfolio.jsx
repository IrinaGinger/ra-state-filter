import { useState } from 'react';

import data from '../assets/data';
import { Toolbar } from './Toolbar';
import { ProjectList } from './ProjectList';

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  let actualProjects = data;

  if (filter !== 'All') {
    actualProjects = data.filter(
      (project) => project.category === filter
    );
  }

  return (
    <>
      <header className="header">
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={filter}
          onSelectFilter={(filter) => setFilter(filter)} />
      </header>

      <main className="container">
        <ProjectList projects={actualProjects} />
      </main>
    </>
  );
}
