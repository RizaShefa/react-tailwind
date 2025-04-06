import React, {  useState } from 'react'
const CategoryListening = () => {

  const [isActiveGrid, setIsActiveGrid] = useState(false); 
  const [isActiveBurger, setIsActiveBurger] = useState(false); 
  const [styling, setStyling] = useState("hidden lg:flex md:flex md:flex-wrap md:content-center sm:flex sm:flex-wrap sm:content-center gap-5"); 

  const handleClickGrid = () => {
    setIsActiveGrid(!isActiveGrid);
    setStyling(isActiveGrid ? 
      
      "hidden lg:flex md:flex md:flex-wrap md:content-center sm:flex sm:flex-wrap sm:content-center gap-5"
      :
      "grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-5 sm:grid-cols-2 sm:gap-5" );
    
  };
  
  const handleClickBurger = () => {
    setIsActiveBurger(!isActiveBurger);
    setStyling(isActiveBurger ? 
      
      "hidden lg:flex md:flex md:flex-wrap md:content-center sm:flex sm:flex-wrap sm:content-center gap-5"
      :
      " lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-5 sm:grid-cols-2 sm:gap-5" );
    
    
  };
  return (
        <div
          className="flex  justify-center size-full xl:gap-7 xl:text-xl lg:gap-6 lg:text-lg md:gap-2 md:text-sm sm:text-sm sm:justify-center sm:gap-1"
        >
          <div className="p-1">
            <div className="flex justify-between gap-2 pt-1">
    
              <button onClick={handleClickGrid} id="multipleButton"  className={!isActiveGrid ? "block" : "hidden"} > 
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_31_323)">
                    <path
                      d="M6 6H0V0H6V6ZM15 0H9V6H15V0ZM24 0H18V6H24V0ZM6 9H0V15H6V9ZM15 9H9V15H15V9ZM24 9H18V15H24V9ZM6 18H0V24H6V18ZM15 18H9V24H15V18ZM24 18H18V24H24V18Z"
                      fill="#909090"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_31_323">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
    
              <button className={isActiveGrid ? "block" : "hidden"} id="Xm" onClick={handleClickGrid}  >
                <img src="/src/assets/icons8-x-50.png" alt="X" />
              </button>
             
              
              <button onClick={handleClickBurger}   className={!isActiveBurger ? "block" : "hidden"}>
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g clip-path="url(#clip0_31_325)">
                  <path
                  d="M0 4.36364H24V0H0V4.36364ZM0 14.1818H24V9.81818H0V14.1818ZM0 24H24V19.6364H0V25.0909V24Z"
                  fill="#909090"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_31_325">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
    
            <button  id="Xm2" onClick={handleClickBurger}  className={isActiveBurger ? "block" : "hidden"} >
              <img src="/src/assets/icons8-x-50.png" alt="X2" />
            </button>
          </div>
        </div>
        
        <div
        id="listing-categories"
        className={styling}
        >
        <p>Javascript</p>
            <p>DevOps</p>
            <p>Cloud</p>
            <p>Terraform</p>
            <p>Architecture</p>
            <p>Scalability</p>
            <p>Explainers</p>
          </div>
        </div>

    

  )
}

export default CategoryListening