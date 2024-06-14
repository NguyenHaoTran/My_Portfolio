import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "react Commerce",
    img: "https://images.pexels.com/photos/20679329/pexels-photo-20679329/free-photo-of-thanh-ph-d-ng-cac-toa-nha-t-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ducimus nisi? Ducimus rem consequatur nesciunt deleniti eaque, expedita magnam molestias eveniet totam eligendi explicabo voluptates itaque alias fugit dolor nisi.",
  },
  {
    id: 2,
    title: "Wordpress Commerce",
    img: "https://images.pexels.com/photos/2009882/pexels-photo-2009882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ducimus nisi? Ducimus rem consequatur nesciunt deleniti eaque, expedita magnam molestias eveniet totam eligendi explicabo voluptates itaque alias fugit dolor nisi.",
  },
  {
    id: 3,
    title: "MusicApp",
    img: "https://images.pexels.com/photos/2111757/pexels-photo-2111757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ducimus nisi? Ducimus rem consequatur nesciunt deleniti eaque, expedita magnam molestias eveniet totam eligendi explicabo voluptates itaque alias fugit dolor nisi.",
  },
  {
    id: 4,
    title: "PhotographyApp",
    img: "https://images.pexels.com/photos/2128119/pexels-photo-2128119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ducimus nisi? Ducimus rem consequatur nesciunt deleniti eaque, expedita magnam molestias eveniet totam eligendi explicabo voluptates itaque alias fugit dolor nisi.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
