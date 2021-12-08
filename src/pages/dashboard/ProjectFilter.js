const filterList = [
  'all',
  'mine',
  'development',
  'designs',
  'marketing',
  'sales',
];

const ProjectFilter = ({ currentFilter, changeFilter }) => {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className='project-filter'>
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            className={currentFilter === f ? 'active' : ''}
            onClick={() => handleClick(f)}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
