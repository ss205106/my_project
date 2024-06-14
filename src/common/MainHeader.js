import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/MainHeader.css"
const MainHeader = ({goodsTabs}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });
    return (
        <div className={scrollPosition < 100 ? "header" :"change_header"}>
        <div className="row">
          <div className='myname'>
            <h3>SnngMin</h3>
          </div>
          <ul className="menu align-center expanded text-center SMN_effect-6">
          {Object.keys(goodsTabs).map((key) => (
              <li>
                  <Link to="#" 
                  data-hover={goodsTabs[key].name}
                  onClick={goodsTabs[key].onMoveToElement}>

                  {goodsTabs[key].name}

                  </Link>
              </li>
          ))}

          </ul>
        </div>
      </div>
    );
};

export default MainHeader;