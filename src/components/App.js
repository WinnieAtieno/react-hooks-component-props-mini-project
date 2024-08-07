import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList"



function App() {
   let url = "https://via.placeholder.com/215"
  return (
    <div className="App">
      
      <Header name ={blogData.name}/>
      <About author ={blogData.author} image ={blogData.image? blogData.image: url} about ={blogData.about}/>
      <ArticleList posts ={blogData.posts}/>
    </div>
  );
}

export default App;
