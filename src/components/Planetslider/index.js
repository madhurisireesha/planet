import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import Slider from 'react-slick'
import Planetitem from "../Planetitem";
const Planetslider=(props)=>{
  const{item}=props
  // const{description,imageUrl,name}=item
  const settings={
    dots:true,
    slidesToShow:1,
    slideToScroll:1,
  }
  return(
    <div className="slider-container">
        <Slider {...settings}>
        
       {item.map((item)=>(
        <Planetitem item={item}/>
       ))}
        
        </Slider>
    </div>
  )
}
export default Planetslider