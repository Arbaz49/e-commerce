import React from 'react'
const Loader = () => {
  return (
    <div 
    style={{ 
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        zIndex: "-99" 
        }}>
      <img src={"/Loader.gif"} alt={"LoaderImg"} />
    </div>
  )
}

export default Loader
