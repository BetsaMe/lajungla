
import CareScale from "./CareScale";
import "../styles/PlantItem.css";




function PlantItem({name, light, water, cover, id}) {

  return (
        <li key={id} className="lmj-plant-item lmj-plant-item-cover" >
          {name}
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </li>
    
  );
}

export default PlantItem;
