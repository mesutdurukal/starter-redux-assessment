import CreatePhoto from './features/photos/create';
import PhotosList from './features/photos/list';
import Suggestion from './features/suggestion';
import SearchBar from './features/search/search-bar';
import './App.css';

function App() {
  return (
    <>
      <h1>DOGGIEGRAM</h1>
      <div className="create-photo-container">
        <CreatePhoto />
        <Suggestion />
      </div>
      <SearchBar />
      <PhotosList />
    </>
  );
}

export default App;
