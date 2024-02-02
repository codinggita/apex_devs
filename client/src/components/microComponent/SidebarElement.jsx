import React from 'react'

const brick = {
    display: 'flex',
    alignItem: 'center',
    // border: '2px solid white'
}

const imgStyle = {
    height: '25px',
    width: '25px'
};

const brickLogo = {
    padding: '5px',
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
}

const textStyle = {
    color: '#B0B0B0',
    fontSize:'20px',
    fontWeight: '600',
    marginLeft: '5px'
    // padding: '5px 0px',
    // border: '2px solid aqua'
}



function SidebarElement({image, text}) {
  return (
    <div>
        <div className='side-bar-brick' style={brick}>
            <div style={brickLogo} className='side-bar-brick-logo'>
                <img style={imgStyle} src={image} alt="X"></img>
            </div>
            <div style={textStyle} className='side-bar-brick-text'>{text}</div>
        </div>
    </div>
  )
}

export default SidebarElement