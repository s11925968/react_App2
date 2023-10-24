import Products from './Products.jsx';
import React from 'react'

export default function Product() {
  const products=[
    {id:1,title:'product one',desc:'The University of Hawaii began using radio to send digital information as early as 1971, using ALOHAnet.'},
    {id:2,title:'product two',desc:'Sitting at a typewriter at home, Hillebrand typed out random sentences and counted every letter, number, punctuation mark.'},
    {id:3,title:'product three',desc:'Initial growth of text messaging worldwide was slow, with customers in 1995 sending on average only 0.4 messages per GSM customer per month.'}, 
    {id:4,title:'product four',desc:'I have been working on illustration design for 6 years. We will make you a brand that is catchy and leaves a trace.'}
];
  return (
    <section className="service" id="service">
      <div className="container">
        <div className="content-service d-flex justify-content-center my-5">
          <div>
            <div className="title">
              <span>SERVICE</span>
              <h2 className="text">What i do!</h2>
            </div>
          </div>
        </div>
        <div className="row py-5">
          {
          products.map((product) => {
            return <Products {...product}key={product.id} />
          })
          }
        </div>
      </div>
    </section>
  );
}
