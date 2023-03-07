import React, { useEffect } from "react";
import Photo from "../assets/images/img_photo.png";
import Stars from "../assets/images/Star.png";
import Glide from "react-glider";


const sliderConfiguration = {
  type: "carousel",
  perView: 2,
  focusAt: "center",
  gap: 25,
  breakpoints: {
    500: {
      perView: 1,
    },
  },
};

const Testimonial = () => {
  const slider = new Glide (".glide", sliderConfiguration);

  useEffect(() => {
    return () => slider.mount();
  }, [slider]);
  
  return (
    <div>
      <section className="py-5" id="testimoni">
        <div className="text-center py-3">
          <span className="p-text-24">Testimonial</span>
          <p className="p-text">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>

        <div id="intro" className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className="card border border-0 mb-3 bg-testimonial py-4">
                  <div className="row g-0 justify-content-center">
                    <div className="col-lg text-center">
                      <img
                        src={Photo}
                        className="img-fluid rounded-start my-lg-5 my-2"
                        alt="pict-alt"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body w-100">
                        <div className="rate">
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                        </div>
                        <p className="card-title p-text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="card-text p-text-testi-footer">
                          John Dee 32, Bromo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="card border border-0 mb-3 bg-testimonial py-4">
                  <div className="row g-0 justify-content-center">
                    <div className="col-lg text-center">
                      <img
                        src={Photo}
                        className="img-fluid rounded-start my-lg-5 my-2"
                        alt="pict-alt"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body w-100">
                        <div className="rate">
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                        </div>
                        <p className="card-title p-text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="card-text p-text-testi-footer">
                          John Dee 32, Bromo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="card border border-0 mb-3 bg-testimonial py-4">
                  <div className="row g-0 justify-content-center">
                    <div className="col-lg text-center">
                      <img
                        src={Photo}
                        className="img-fluid rounded-start my-lg-5 my-2"
                        alt="pict-alt"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body w-100">
                        <div className="rate">
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                          <img
                            src={Stars}
                            className="img-fluid"
                            alt="pict-alt"
                          />
                        </div>
                        <p className="card-title p-text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="card-text p-text-testi-footer">
                          John Dee 32, Bromo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            className="glide__arrows d-flex gap-3 justify-content-center"
            data-glide-el="controls"
          >
            <button className="testi-arrow testi-arrow-left" data-glide-dir="<">
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              className="testi-arrow testi-arrow-right"
              data-glide-dir=">"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
