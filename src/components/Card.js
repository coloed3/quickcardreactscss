import React from "react";

const Card = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h3>
              <i class="fas fa-mail-bulk" />
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, cumque.
            </p>
          </div>
        </div>
        <div className="card cardOne">
          <div className="card-content">
            <h3>
              <i class="fas fa-cogs" />
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, cumque.
            </p>
          </div>
        </div>
        <div className="card ">
          <div className="card-content">
            <h3>
              <i class="fas fa-users" />
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, cumque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
