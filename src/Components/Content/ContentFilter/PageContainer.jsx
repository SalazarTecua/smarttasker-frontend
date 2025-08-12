// Components/PageContainer/PageContainer.jsx
import FilterPanel from "./FilterPanel";
export default function PageContainer({ 
  children,
  showFilters = false,
  title,
  onFilterChange,
  onAddTask
}) {
  return (
    <>
      {showFilters && (
        <FilterPanel 
          title={title}
          onFilterChange={onFilterChange}
          onAddTask={onAddTask}
        />
      )}
      {/* <div className={`${showFilters ? 'p-3' : 'p-3'} overflow-y-auto custom-scrollbar`}>
        {children}
        
      </div> */}
       {children}
    </>
  );
}