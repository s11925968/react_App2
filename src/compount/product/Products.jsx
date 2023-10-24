import React from 'react'

export default function products(props) {
  return (
    <div className="service-item col-lg-3 col-md-6">
      <div className="text-center mx-3">
        <h4 className="my-4">{props.title}</h4>
        <p className="lead">
          {props.desc}
        </p>
      </div>
    </div>
  );
}
