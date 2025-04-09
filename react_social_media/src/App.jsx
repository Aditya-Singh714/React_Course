import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostCards from "./components/PostCards";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <PostListProvider>
      <div className="app_container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "home" ? <PostCards /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
