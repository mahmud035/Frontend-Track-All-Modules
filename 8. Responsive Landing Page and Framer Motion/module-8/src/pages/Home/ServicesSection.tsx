import Container from '@/components/Container';
import BatteryReplacement from '@/components/ServiceTiles/BatteryReplacement';

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="flex flex-col items-center justify-center text-center">
        <h1>Services that we provide </h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          All out technicians are fully qualified and licensed. Moreover, they
          are incredibly skillful and proficient in various aspects of computer
          repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5 ">
        <BatteryReplacement />
        <div className="h-[415px] col-span-12 md:col-span-6 lg:col-span-5 bg-red-500 rounded-lg"></div>
        <div className="h-[415px] col-span-12 md:col-span-6 lg:col-span-7 bg-red-500 rounded-lg"></div>
        <div className="h-[415px] col-span-12 bg-red-500 rounded-lg "></div>
        <div className="h-[415px] col-span-12 md:col-span-6 lg:col-span-4 bg-red-500 rounded-lg"></div>
        <div className="h-[415px] col-span-12 md:col-span-6 lg:col-span-4 bg-red-500 rounded-lg"></div>
        <div className="h-[415px] col-span-12 lg:col-span-4 bg-red-500 rounded-lg"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
