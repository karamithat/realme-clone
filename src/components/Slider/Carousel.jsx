import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const images = [
  "https://image01.realme.net/general/20241031/17303592592653937d97f33204ad085427ba93e81a048.jpg.webp",
  "https://image01.realme.net/general/20240910/1725935615003fcc469ec4f474220bcd6fed89dc68f81.png.webp",
  "https://image01.realme.net/general/20240906/1725609801886f92b8a44bd0f4a01a1eeb36a21ec3be0.jpg.webp",
  "https://image01.realme.net/general/20241023/1729676026051fcc9dee31ba045bbb7f0fe0a3fef5c4a.jpg.webp",
];

function Carousel() {
  const settings = {
    dots: true, // Altında sayfa noktaları (dots) ekler
    infinite: true, // Son kaydırmadan sonra yeniden başlatır
    speed: 500, // Kaydırma hızı (milisaniye)
    slidesToShow: 1, // Aynı anda gösterilecek öğe sayısı
    slidesToScroll: 1, // Kaydırma başına kaydırılan öğe sayısı
    autoplay: true, // Otomatik kaydırma
    autoplaySpeed: 3000, // Otomatik kaydırma süresi
    arrows: true, // Okları göster
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
