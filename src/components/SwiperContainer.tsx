'use client';

import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {isMobile} from 'react-device-detect';

type GalleryType = {
  id: number;
  image: {
    src: string;
  };
};

type SwiperContainerProps = {
  galleryList: GalleryType[];
};

const SwiperContainer = ({galleryList}: SwiperContainerProps) => {
  return (
    <Swiper spaceBetween={isMobile ? 16 : 48} slidesPerView={isMobile ? 3.5 : 4.8}>
      {galleryList.map((gallery) => (
        <SwiperSlide key={gallery.id}>
          <div className="relative h-[5.0625rem] md:h-[14.875rem] aspect-square">
            <Image
              fill={true}
              className="object-cover overflow-hidden rounded-xl"
              alt=""
              src={gallery.image.src}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperContainer;
