import Button from '../Button';
import { shoe8 } from '../../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Super&nbsp;</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{' '}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring the highest standards of quality, our shoes are crafted with
          precision and care. Experience comfort and style like never before.
        </p>
        <div className="mt-11">
          {' '}
          <Button label={'View details'} />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
