import React from "react";
import BlogCard from "./BlogCard.jsx";
import Img1 from "../../assets/places/place4.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The 10 best places to visit in Nepal",
    description: " Loredolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vem ipsum dolodolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis ver, sit amet consectetur adipisicing elit. At eligendi blanditiis dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veveniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur ",
    author: "John Doe",
    date: "Jan 1, 2024",
  },

  {
    id: 2,
    image: Img2,
    title: "The 10 best places to visit in Philippines",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipianditiis veniaanditiis veniaanditiis veniaanditiis veniaadolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis venditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniat, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur ",
    author: "Dhiraj Bantawa Rai",
    date: "Jan 2, 2024",
  },

  {
    id: 3,
    image: Img3,
    title: "The 10 best places to visit in Thailand",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At edolodolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis ver, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis vedolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendianditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis veniaanditiis venias eaque inventore sed repellat tenetur ",
    author: "Dhiraj Dada",
    date: "Jan 3, 2024",
  },


];

const BlogsComp = () => {
  return (
    <div>
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
