import { useQueryParams, useFetchData } from "./hooks"
import SearchForm from "./SearchForm"
import { SearchResult } from "./SearchResult"


export const JsonPlaceHolder = () => {
  const query = useQueryParams();
  const { results, loading } = useFetchData(query);

  return (
    <div>
      <h1>JsonPlaceHolder</h1>
      <SearchForm />
      <SearchResult results={results} loading={loading} />
    </div>
  );
};

