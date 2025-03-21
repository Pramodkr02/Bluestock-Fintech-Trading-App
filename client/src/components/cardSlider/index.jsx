import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    content:
      "Bluestock has transformed how I approach trading. The educational resources and real-time analytics have given me the confidence to make informed investment decisions. 📈",
  },
  {
    id: 2,
    name: "Michael Chen",
    content:
      "The technical analysis tools are exceptional. I particularly love the live sector trends and IPO tracking features. It's made a significant impact on my trading success! 💹",
  },
  {
    id: 3,
    name: "Emma Williams",
    content:
      "As a beginner, the learning resources were invaluable. The community is supportive, and the platform makes complex trading concepts easy to understand. 🌟",
  },
  {
    id: 4,
    name: "David Thompson",
    content:
      "The real-time chat and forum features have connected me with experienced traders. The insights shared here are gold! Highly recommend for both beginners and pros. 🚀",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    content:
      "Outstanding platform! The combination of educational content and advanced trading tools is perfect. The risk assessment features have saved me multiple times. ⭐",
  },
];

const CardSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-[var(--royal-primary)]">
          What Our Traders Say
        </h2>
        <p className="text-[var(--royal-text)] opacity-80">
          Join thousands of satisfied traders who have transformed their trading
          journey with Bluestock
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <FaQuoteRight className="quote-icon" />
              <div className="testimonial-content">
                <p className="text-[var(--royal-text)] mb-6 relative z-10">
                  {testimonial.content}
                </p>
                <h4 className="testimonial-name">{testimonial.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
