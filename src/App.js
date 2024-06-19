import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Posts from './components/posts';
import Post from './components/post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}
export default App;