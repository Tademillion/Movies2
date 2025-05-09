import ErrorPage from "../../common/ErrorPage";
import LoadingSpinner from "../../common/LoadingSpinner";
import PeopleCard from "../card/PeopleCard";
import UsePeoples from "../hooks/UsePeoples";
export interface pages {
  currentPage?: number;
}

const PeopleGrid = ({ currentPage }: pages) => {
  const { data: people, Error: error, isLoading } = UsePeoples(currentPage);
  if (error) {
    return <ErrorPage errorType="404" message={error} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <ErrorPage errorType="network" message={error} />;
  }
  if (!people.length) {
    return <ErrorPage errorType="generic" message="No people found" />;
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {people.map((person) => (
          <PeopleCard key={person.id} poeple={person} />
        ))}
      </div>
    </>
  );
};
export default PeopleGrid;
