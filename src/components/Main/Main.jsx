import { useState } from 'react';
import './Main.scss';
import MenuButton from '../Shared/MenuButton/MenuButton';
import { TILING_SERVICES } from '../../content/data'

export default function Main() {
  const [selectedService, setSelectedService] = useState('floor');

  const clickHandler = (selectedButton) =>{
    setSelectedService(selectedButton)
  }
  let content = ""
  const { floor, wall, heating, wetrooms  } = TILING_SERVICES
  const {material: floor_material, design_patterns: floor_design_patterns, installation_process: floor_installation_process, benefits_and_considerations: floor_benefits_and_considerations } = floor;

  // console.log(floor_material, floor_design_patterns, floor_installation_process, floor_benefits_and_considerations);

  const {types: f_types} = floor_material
  // console.log(f_types);
  console.log(f_types.porcelain_tiles.description);

  if (selectedService === 'floor') {
    content = (
      <div>
        <h4>{floor.title}</h4>
        <p>{floor_material.description}</p>
        <ul>
          <li><p>{f_types.ceramic_tiles.title}</p></li>
          <p>{f_types.ceramic_tiles.description}</p>
          <li><p>{f_types.porcelain_tiles.title}</p></li>
          <p>{f_types.porcelain_tiles.description}</p>
        </ul>
      </div>
    )
  }
  return(
    <main>
      <menu>
        <MenuButton onSelect={() => clickHandler('floor')}>Floor Tiling</MenuButton>
        <MenuButton onSelect={() => clickHandler('wall')}>Wall Tiling</MenuButton>
        <MenuButton onSelect={() => clickHandler('heating')}>Underfloor Heating</MenuButton>
        <MenuButton onSelect={() => clickHandler('wetrooms')}>Wet Rooms</MenuButton>
      </menu>
      <section id='main-section-content'>
        <h3>{TILING_SERVICES[selectedService].title}</h3>
        <p>{TILING_SERVICES[selectedService].description}</p>
        {content}
      </section>
    </main>
  )
};