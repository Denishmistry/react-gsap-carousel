import React,{ useState,useEffect,useRef  } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);






export const Slider = (props ,children) =>{
  const staeobj = {
    timeoffset: 80,
    transformWidth: 0,
    contentWidth: 0,
    itemWidth: 0,
    showLeftButton: true,
    showRightButton: true
  };
  
  const [state,setState]=useState(staeobj);
  


  
  const imgWidth = 510;
  const imgHeight = 292;
  const sliderWrapperRef = useRef();
  const sliderInnerRef = useRef();
  const headerContainerRef = useRef();
  const containerRef = useRef();

 
  let childrenvalue = props.children;
  let sliderinnerlength = childrenvalue.length;
  let sliderinnerwidth = state.itemWidth * sliderinnerlength;
  console.log(sliderinnerwidth);
  



  useEffect(() => {
    console.log("width=>>>>>>>>>>>>>>>>>", sliderWrapperRef.current.offsetWidth);
  }, []);

  
  const left= (duration)=> {

    gsap.to(sliderWrapperRef.current, {
      duration,
      scrollTo: {
        x: "-=" + state.contentWidth * 3,
      },
    });
    setUpNavButtons();
  }
 



 const right = (duration)=>{
  
    gsap.to(sliderWrapperRef.current, {
      duration,
      scrollTo: {
        x: "+=" + state.contentWidth * 3,
      },
    });
  }

 const stop= ()=> {
    gsap.to(sliderWrapperRef.current, {
      duration: state.timeoffset,
      scrollTo: {
        x: "+=0",
      },
    });
  }

  const setUpNavButtons = ()=> {
    const showLeftButton = sliderWrapperRef.current.scrollLeft > 0;
    const showRightButton =
      sliderWrapperRef.current.scrollLeft <
      sliderInnerRef.current.offsetWidth -
      sliderWrapperRef.current.offsetWidth +
      state.transformWidth -
      10;

    setState({
      ...state,
      showLeftButton,
      showRightButton,
    });
  }

 
  let transformWidth = state.transformWidth;
    let itemWidth = state.itemWidth;
    let imgheight =state.imgHeight;
  

  useEffect(() => { 
   
    updateCalculation();
    window.addEventListener('resize', updateCalculation);
  
    return function cleanup () {
     
       window.removeEventListener('resize', updateCalculation);
    }
  }, [])
 
  const updateCalculation = () => {


  let noOfItemsToDivide; // LG
  const windowWidth = window.outerWidth;
  let sm  = props.sm;
  let md= props.md;
  let lg = props.lg;
  let xl= props.xl;
  if (windowWidth <= 761) {
   if(sm === null || sm === undefined ) {
    noOfItemsToDivide = 1
   }else{
    noOfItemsToDivide = sm; 
   }   
  } else if (windowWidth > 1024 && windowWidth < 1640) {
    if(lg === null || lg === undefined ) {
      noOfItemsToDivide = 2
     }else{
      noOfItemsToDivide = lg; 
     }
  } else if (windowWidth > 761 && windowWidth < 1024) {
    if(md === null || md === undefined ) {
      noOfItemsToDivide = 2
     }else{
      noOfItemsToDivide = md; 
     } // MD
  } else {
    if(md === null || md === undefined ) {
      noOfItemsToDivide = 4
     }else{
      noOfItemsToDivide = xl; 
     }
    // LG
  }
  const widthToManage = headerContainerRef.current.getBoundingClientRect().left + 15;
  const itemWidth = sliderWrapperRef.current.offsetWidth / noOfItemsToDivide;

  setState(
    {
     
      ...state,
      transformWidth:(window.innerWidth - containerRef.current.offsetWidth) / 2 + widthToManage,
      contentWidth: sliderWrapperRef.current.offsetWidth,
      itemWidth,
      imgHeight: itemWidth * (imgHeight / imgWidth)
    },
    // () => {
    //   this.setUpNavButtons();
    // }
  );

 
};


  /******************* 
  @purpose : Rander HTML/ React Components
  @Author : INIC
  ******************/
 return(

      <section className='drive-now'>
     
            <div className="custom-container" id="containerLeft" ref={headerContainerRef}>
              <div className='section-heading mb-30'>
                <h2 className="mb-2">Drive Now</h2>
                <p className='font-22 mb-0'>Available for Pick-up &amp; Delivery Now</p>
              </div>
            </div>          
            <div className="slider-container custom-container" id="custom-container" ref={containerRef} >
              <div className="slider-wrapper slider-overflow-auto" ref={sliderWrapperRef} onScroll={() => setUpNavButtons()} >
                <div className="slider-inner" ref={sliderInnerRef} style={{ width: state.itemWidth * sliderinnerlength   + "px", }} >
             
                 

         

                    {React.Children.map(childrenvalue, (child, index) => {
                      return React.cloneElement(child,{transformWidth,itemWidth,imgHeight});
                    })}
                 
                </div>
              </div>
              
              <div
            
                className={
                  
                  state.showLeftButton===true
                    ? "slider-action-btn action-prev"
                    : "d-none"
                }
        
                onMouseOver={() => left(state.timeoffset)}
                onMouseUp={() => left(state.timeoffset)}
                onMouseOut={() => stop()}
                onMouseDown={() => left(20)}
              >
                <span className="icon icon-chevron-left"></span>
              </div>
 
              <div
                className={
                  state.showRightButton
                    ? "slider-action-btn action-next"
                    : "d-none"
                }
                onMouseOver={() =>
                    right(
                      state.timeoffset
                    )
                  }
                onMouseUp={() => right(state.timeoffset)}
                onMouseOut={() => stop()}
                onMouseDown={() => right(20)}
              >
                <span className="icon icon-chevron-right"></span>
              </div>
            </div>
      </section>
 );
}
export default Slider;


export const SliderlItem = ({ children,transformWidth,itemWidth,imgHeight }) => {
    
  return (
<>
    <div
  
        className="slider-boxes"
        style={{
          transform: `translate(${transformWidth}px,0px)`,
          width: `${itemWidth}px`,
        }}
      >
      <div className="slider-boxes-inner">
        {/* <div className="slider-box-img drive-car-dp" id={"drive_car_dp_"} style={{ height: `${imgHeight}px` }}>
              {children}
        </div> */}
        {/*  */}
      {children}
       
      </div>
   </div>
    </>
  );
};