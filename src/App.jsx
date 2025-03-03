import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { TableComponent } from "./components/TableComponent";
import { PaginationComponent } from "./components/PaginationComponent";
import { SearchComponent } from "./components/SearchComponent";

function App() {
  const [useData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    new URLSearchParams(window.location.search).get("q") || ""
  );
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const fetchUsers = async () => {
    const queryParams = new URLSearchParams({
      _page: page,
      _limit: limit,
    });
    if (searchTerm) {
      queryParams.append("q", searchTerm); // You can use `q` or any search query parameter as per API
    }

    const url = `https://jsonplaceholder.typicode.com/users?${queryParams.toString()}`;
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  };
  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("q") || "";
    const page = parseInt(params.get("_page")) || 1;
    return { search, page };
  };

  useEffect(() => {
    const { search, page } = getQueryParams();
    setSearchTerm(search);
    setPage(page);

    fetchUsers();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (searchTerm) queryParams.set("q", searchTerm);
    queryParams.set("_page", page);
    queryParams.set("_limit", limit);

    window.history.replaceState(null, "", "?" + queryParams.toString());
    fetchUsers();
  }, [page, limit, searchTerm]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setPage(1);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-1/2">
        <h1 className="text-center text-2xl pt-5 mt-10">User List</h1>
        <SearchComponent
          onSearch={(value) => handleSearchChange(value)}
          searchTerm={searchTerm}
        />
        <TableComponent useData={useData} />
        <PaginationComponent handlePageChange={handlePageChange} page={page} />
      </div>
    </>
  );
}

export default App;
