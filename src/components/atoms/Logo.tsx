import Image from 'next/image';

const Logo = () => (
  <Image
    src="https://imagedelivery.net/AeoYzlkbZrI9BgyLTuPWOw/ee73c571-1ae3-4f9a-ae0f-168657597a00/public"
    alt="East Texas Electronics, LLC. Logo"
    width={450}
    height={0}
    className="inline-block ml-2"
    priority // This tells Next.js to preload this image on the initial load
  />
);

export default Logo;
