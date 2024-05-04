import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg"; 

function Banner() {
  return (
    <div className="carousel w-full max-h-[550px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl " />
        <div className="absolute flex-col flex justify-center pl-10 gap-6 bg-gradient-to-r from-gray-900 h-full">
          <div className="max-w-[500px]">
            <h1 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-200 text-xl mt-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="space-x-3 ">
            <button className="btn btn-error text-white font-bold">
              Discover More
            </button>
            <button className="btn btn-outline btn-error hover:!text-white font-bold">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end left-5 right-5 bottom-2 gap-3">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex-col flex justify-center pl-10 gap-6 bg-gradient-to-r from-gray-900 h-full">
          <div className="max-w-[500px]">
            <h1 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-200 text-xl mt-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="space-x-3 ">
            <button className="btn btn-error text-white font-bold">
              Discover More
            </button>
            <button className="btn btn-outline btn-error hover:!text-white font-bold">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex-col flex justify-center pl-10 gap-6 bg-gradient-to-r from-gray-900 h-full">
          <div className="max-w-[500px]">
            <h1 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-200 text-xl mt-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="space-x-3 ">
            <button className="btn btn-error text-white font-bold">
              Discover More
            </button>
            <button className="btn btn-outline btn-error hover:!text-white font-bold">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex-col flex justify-center pl-10 gap-6 bg-gradient-to-r from-gray-900 h-full">
          <div className="max-w-[500px]">
            <h1 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-200 text-xl mt-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="space-x-3 ">
            <button className="btn btn-error text-white font-bold">
              Discover More
            </button>
            <button className="btn btn-outline btn-error hover:!text-white font-bold">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute flex-col flex justify-center pl-10 gap-6 bg-gradient-to-r from-gray-900 h-full">
          <div className="max-w-[500px]">
            <h1 className="text-6xl font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-gray-200 text-xl mt-6">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
          <div className="space-x-3 ">
            <button className="btn btn-error text-white font-bold">
              Discover More
            </button>
            <button className="btn btn-outline btn-error hover:!text-white font-bold">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2 gap-3">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
