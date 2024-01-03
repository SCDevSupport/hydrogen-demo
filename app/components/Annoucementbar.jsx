import {Await, NavLink} from '@remix-run/react';
import {Suspense} from 'react';
import {useRootLoaderData} from '~/root';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from 'swiper/modules';

/**
 * @param {HeaderProps}
 */
export function Annoucementbar({announcementbar}) {
  var announcementbarDetail = announcementbar.metaobjects.edges;
  var sliderData = []; 
  announcementbarDetail.forEach((data, index) => {
    var style = {};
    var message = '';      
    data.node.fields.forEach((detail) => {
      
      if(detail.key == "announcement_bar_message"){
        message = detail.value 
      }
      if(detail.key == "announcement_bar_background_color"){
        style.backgroundColor = detail.value;
      }
      if(detail.key == "announcement_bar_font_color"){
        style.color = detail.value;
      }
    })
    sliderData.push(
      <SwiperSlide key={index}>
        <div key={index} style={style}>
          {message}
        </div>
      </SwiperSlide>
    );
  })
  return (
    <>
    <div>
      <Swiper        
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        >    
        {sliderData}
      </Swiper>
    </div>
    </>
  );
}