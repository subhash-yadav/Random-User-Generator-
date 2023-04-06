import React, { useState, useEffect } from "react";
import { useGetUsersQuery } from "../services/Users";
import Header from "./Header";
import {
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiMail, FiLock } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import "./UserCom.scss";
const UsersCom = () => {
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState();
  const [title, setTitle] = useState("I am");
  const defaultImage = "https://randomuser.me/api/portraits/men/50.jpg";
  const { data, isLoading, refetch } = useGetUsersQuery();
  useEffect(() => {
    if (data) {
      const randomPerson = data.results[0];
      const { phone, email } = randomPerson;
      const { large: image } = randomPerson.picture;
      const { password } = randomPerson.login;
      const { first, last } = randomPerson.name;
      const {
        dob: { age },
      } = randomPerson;
      const {
        street: { number, name },
      } = randomPerson.location;
      const newPerson = {
        phone,
        email,
        image,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
      };
      setPerson(newPerson);
      setTitle("Name");
      setValue(newPerson.name);
    }
  }, [data]);
  const handleHover = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };
  return (
    <>
      <Header />

      <section className="section">
        <div className="section-body">
          <h1 className="section-body__title">RANDOM USER GENERATOR</h1>
          <p className="section-body__desc">
            A free,{" "}
            <a
              className="link"
              href="https://github.com/RandomAPI/Randomuser.me-Node"
            >
              open-source
            </a>{" "}
            API for generating random user data. Like Lorem Ipsum, but for
            people.
          </p>
          <span className="section-body__link">
            <AiOutlineTwitter size={25} color="#08a" /> Follow us @randomapi
          </span>
        </div>
        <div className="section-content container">
          <div className="section-content__circle">
            <img
              className="image"
              src={(person && person.image) || defaultImage}
              alt=""
            />
            <button onClick={() => refetch()} className="new">
              NEW
            </button>
          </div>
          <hr className="section-content__hrLine" />
          <p className="section-content__my">My {title}</p>
          <p className="section-content__name">{value}</p>
          <ul className="section-content__ul">
            <li data-label="name" className="li icon" onMouseOver={handleHover}>
              <AiOutlineUser />
            </li>
            <li
              data-label="email"
              className="li icon"
              onMouseOver={handleHover}
            >
              <FiMail />
            </li>
            <li data-label="age" className="li icon" onMouseOver={handleHover}>
              <AiOutlineCalendar />
            </li>
            <li
              data-label="street"
              className="li icon"
              onMouseOver={handleHover}
            >
              <GrMapLocation />
            </li>
            <li
              data-label="phone"
              className="li icon"
              onMouseOver={handleHover}
            >
              <IoCallOutline />
            </li>
            <li
              data-label="password"
              className="li icon"
              onMouseOver={handleHover}
            >
              <FiLock />
            </li>
          </ul>
        </div>
      </section>
      
    </>
  );
};

export default UsersCom;
