import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { deleteOne, getAll } from "../../API";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextDemo } from "../../context/DemoContext";

const Offer = () => {
  const { demos, setDemos } = useContext(ContextDemo);
  const [filter, setFilter] = useState(demos);

  // Handle search input
  const handleSubmit = (inpValue) => {
    const search = demos.filter((x) =>
      x.name.toLowerCase().includes(inpValue.toLowerCase().trim())
    );
    setFilter(search);
  };

  // Handle sorting by price
  const sortByPrice = (value) => {
    const sorted = [...filter];
    if (value === "a") {
      sorted.sort((a, z) => a.price - z.price);
    } else if (value === "z") {
      sorted.sort((a, z) => z.price - a.price);
    }
    setFilter(sorted);
  };

  // Handle delete item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteOne(id);
        const del = demos.filter((x) => x._id !== id);
        setDemos(del);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    setFilter(demos);
  }, [demos]);

  return (
    <section>
      <div className="container">
        <div className={styles.offer_head}>
          <h5>.</h5>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <h6>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda minus error nisi culpa nihil fugit, ipsa quis molestias id voluptate.
          </h6>

          <input
            type="text"
            placeholder="Search ..."
            onChange={(e) => handleSubmit(e.target.value)}
          />

          <select
            name=""
            id=""
            onChange={(e) => sortByPrice(e.target.value)}
            style={{ margin: "0 20px" }}
          >
            <option value="a">Min Price</option>
            <option value="z">Max Price</option>
          </select>

          <button
            style={{
              backgroundColor: "pink",
              borderColor: "transparent",
              padding: "3px 7px",
            }}
          >
            <Link
              to={"/adddemo"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Demo
            </Link>
          </button>

          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className={styles.mySwiper}
            >
              {filter &&
                filter.map((item) => (
                  <SwiperSlide className={styles.cards} key={item._id}>
                    <img src={item.imgSrc} alt="" />
                    <p>${item.price}</p>
                    <h3>{item.name}</h3>
                    <h4>{item.title}</h4>
                    <button>Order Now</button>
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                    <button>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={"/demodetail/" + item._id}
                      >
                        Detail
                      </Link>
                    </button>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
