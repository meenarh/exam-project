import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../components/User";
import Navbar from "../components/Navbar";
import { UsersFooter } from "../components/UserFooter";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

function UsersProfile({ users }) {
  return users.map((user) => {
    return <User key={user.email} user={user} />;
  });
}

const Users = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async (page) => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=10&page=${page}`
    );

    const details = data.results;

    if (page > 1 || details.length > 0) {
      setUsers((prev) => [...prev, ...details]);
    } else {
      setUsers(details);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (users.length / 9 < pageNumber) {
      getData(pageNumber);
    }
  }, [pageNumber, users.length]);

  const onClickNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const onClickPreviousPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const getCurrentPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 9;
    const endIndex = startIndex + 9;
    return users.slice(startIndex, endIndex);
  };

  const currentPageUsers = getCurrentPageData(pageNumber);
  const pageDataExists = currentPageUsers.length > 0;

  if (!pageDataExists && !isLoading) {
    return <div className="error">No data found</div>;
  }

  if (isLoading) {
    return (
      <div className="loading text-center">
        Please wait, your request is being processed....
      </div>
    );
  }

  return (
    <div className="user-page text-center p-3">
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Team details page of D_C, Aminat's exam project"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Navbar />
      <h3 className="user text-center text-black">Your Team's Data</h3>

      <div className="left">
        <div className="user-container grid grid-cols-3 gap-2">
          <UsersProfile users={getCurrentPageData(pageNumber)} />
        </div>
        <UsersFooter
          pageNumber={pageNumber}
          onClickNextPage={onClickNextPage}
          onClickPreviousPage={onClickPreviousPage}
          hasNextPage={pageNumber < 8}
          hasPreviousPage={pageNumber > 1}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Users;
