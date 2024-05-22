import React from "react";
import BlogCard from "./BlogCard.jsx";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The 10 best places to visit in Nepal",
    description: "loremipsumloremipsum",
    author: "John Doe",
    date: "Jan 1, 2024",
  },

  {
    id: 2,
    image: Img2,
    title: "The 10 best places to visit in Nepal",
    description: "loremipsumloremipsum",
    author: "John Doe",
    date: "Jan 1, 2024",
  },

  {
    id: 3,
    image: Img3,
    title: "The 10 best places to visit in Nepal",
    description: "loremipsumloremipsum",
    author: "John Doe",
    date: "Jan 1, 2024",
  },


];

const BlogsComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {BlogsData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
