import React from 'react';

const Back = ({ show, label, clickHandler }) => {
    if (!show) {
        return null;
    }

    return <div className="backWrapper">
            <button className="backBtn" onClick={clickHandler}>
            <span className="button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 29.57144 29.57144" 
                    height="29.571" width="29.571">
                    <g transform="translate(153.57 -600.29)" id="layer1" strokeLinecap="round">
                        <circle r="14.286" cy="615.076" cx="-138.786" id="circle" fill="gray" strokeWidth="0" />
                        <path id="arrow" d="M-140.283 606.237c-.61.017-1.19.272-1.617.71l-6.785 6.788c-1.855 1.676 0 3.322 0 3.322l7.142 7.143c2.215 2.293 5.617-1.107 3.325-3.323l-2.92-2.922h9.05c2.936 0 2.936-4.406 0-4.406h-9.765l3.277-3.278c1.538-1.494.437-4.1-1.707-4.035z" />
                    </g>
                </svg>
            </span>
            <span className="button-label">{label}</span>
        </button>
    </div>
}

export default Back;