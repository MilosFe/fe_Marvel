import React from "react";
import marvel from '../images/marvel.jpg';

const AppHomePage = () => (
  <section className="cards">
     <div className="container">
        <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
                <p className="card__title">Results: </p>
         </div>
    </div>
    <div className='row'>
    <div className  ="col-3 col-md-6 col-sm-12">
          <div className="card">
            <div className="cover">
              <img src={marvel} alt="" className="cover__img"></img>
            </div>
            <h3 className="card__name">Capetain America</h3>
            <div className="card__bookmark">Bookmark</div>
          </div>
        </div>
    </div>
   </div>
  </section>
);

export default AppHomePage;
