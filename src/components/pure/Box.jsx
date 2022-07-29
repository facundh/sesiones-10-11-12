
const Box = ({color, aleatorio, stopAleatorio, resetColor}) => {

  const mouseOver = () => {
    aleatorio()
    
}

const mouseLeave = () => {
   stopAleatorio();
}
const doubleClick = () => {
  resetColor()
  
}
  
  return (
    <div style={{width:'255px', height:'255px', backgroundColor:`${color}`,display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold', fontSize:'2rem', color:'white'}} onMouseEnter={mouseOver} onMouseLeave={mouseLeave} onDoubleClick={doubleClick}>
          Box
    </div>
  )
}

export default Box