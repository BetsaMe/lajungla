import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

    function handleClick() {
      if(scaleValue === 1){
        alert(`Esta planta necesita poca cantidad de ${careType} `)
      }else if( scaleValue === 2){
        alert(`Esta planta necesita moderada cantidad de ${careType} `)  
      }else{
        alert(`Esta planta necesita mucha cantidad de ${careType} `)  
      }            
    }
    
  return (
    <div onClick={handleClick}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString() }>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
