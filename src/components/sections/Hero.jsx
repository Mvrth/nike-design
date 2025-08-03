import { useState } from 'react';
import Button from '../Button';
import ShoeCard from '../ShoeCard';
import { arrowRight } from '../../assets/icons/index';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../../assets/images/index';

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl/[106px] mx-sm:text-[72px]/[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:mx-w-sm ">
          Discover the latest trends in Nike shoes. Shop now for exclusive
          styles and unbeatable prices.
        </p>
        <Button label={'Shop Now'} iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-[url('assets/images/collection-background.svg')] bg-center bg-cover">
        <img
          src={bigShoeImage}
          alt="big shoe image"
          width={610}
          height={500}
          className="relative object-contain z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] left-[1/3] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
