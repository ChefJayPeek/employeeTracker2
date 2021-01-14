import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">This is an employee directory created with React.</p>
      <hr className="my-4" />
      <p>
        Displays non sensitive data about employees, so that other employees can look up information about their coworkers.
      </p>
    </div>
  );
};

export default Jumbotron;