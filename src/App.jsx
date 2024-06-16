import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import { PostListProvider } from './store/ContextApi';

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  console.log(selectedTab);
  return (
    <PostListProvider>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className='content'>
      <Navbar />
      {selectedTab === "Create Post" ? <CreatePost/> : <Post/>}
      </div>
    </div>
    </PostListProvider>  
  );
}

export default App;
