import React, { useEffect, useState } from 'react';
import './Loading.scss';
import loadingText from '../../assets/images/loading/main-loading-text.png';

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(percentage + 10);
    }, 1000);
    if (percentage >= 100) {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="main--loading">
      <div>
        <img src={loadingText} alt="Loading text" />
      </div>
      <div className="loading--progress--bar">
        <p>{`loading..${percentage}%`}</p>
        <div className="parent--horizontall--slider">
          <div className="child--horizontall--slider" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
