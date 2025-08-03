import { arrowRight } from '../../assets/icons';
import { offer } from '../../assets/images';
import Button from '../Button';

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full ml-3 mt-3"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-6xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span>{' '}
          Offer
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring the highest standards of quality, our shoes are crafted with
          precision and care. Experience comfort and style like never before.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {' '}
          <Button label={'Shop Now'} iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
