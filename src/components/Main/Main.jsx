import { useState } from 'react';
import './Main.scss';
import MenuButton from '../Shared/MenuButton/MenuButton';
import { TILING_SERVICES } from '../../content/data'

export default function Main() {
  const [selectedService, setSelectedService] = useState('floor');

  const clickHandler = (selectedButton) =>{
    setSelectedService(selectedButton)
  }
  let content = <p>please select a topic</p>
  // if (selectedService) {
  //   content = (
  //     <section id='main-section-content'>
  //       <h3>{TILING_SERVICES[selectedService].title}</h3>
  //       <p>{TILING_SERVICES[selectedService].description}</p>
        
  //       <p id='main-material' className='title-section'>
  //         {TILING_SERVICES[selectedService].material && TILING_SERVICES[selectedService].material.description}
         
  //       </p>

  //       <p id="material-types" className='title-section'>
  //         {TILING_SERVICES[selectedService].material.types && TILING_SERVICES[selectedService].material.types.title}
  //       </p>
  //       <ul>
  //         {Object.entries(TILING_SERVICES[selectedService].material.types).map(([key, value]) => (
  //           <li key={key}>
  //             <p id="material-types" className='title-section'>{value.title}</p>
  //             <p>{value.description}</p> 
  //           </li>
  //         ))}
  //       </ul>

  //       <p id='design-patterns' className='title-section'>
  //         {TILING_SERVICES[selectedService].design_patterns && TILING_SERVICES[selectedService].design_patterns.description}
  //       </p>

  //       <p id='installation_process' className="title-section">
  //         {TILING_SERVICES[selectedService].installation_process && TILING_SERVICES[selectedService].installation_process.description}
  //       </p>

  //       <p id="benefits_and_considerations" className="title-section">
  //         {TILING_SERVICES[selectedService].benefits_and_considerations && 
  //           TILING_SERVICES[selectedService].benefits_and_considerations.title}
  //       </p>
  //       <ul>
  //         <li>
  //           <p className="title-section">{
  //           TILING_SERVICES[selectedService].benefits_and_considerations && 
  //           TILING_SERVICES[selectedService].benefits_and_considerations.durability.title}
  //           </p>
  //           <p className="description-section">
  //           {
  //             TILING_SERVICES[selectedService].benefits_and_considerations && 
  //             TILING_SERVICES[selectedService].benefits_and_considerations.durability.description}
  //           </p>
  //         </li>
  //       </ul>
  //     </section>);
  // }
  const {floor , wall, heating, wetrooms} = TILING_SERVICES
  console.log(floor);
  console.log(floor.title);
  console.log(wall);
  console.log(heating);
  console.log(wetrooms);
  if (selectedService) {
    
    content = <h3>{selectedService}</h3>
  }
  return(
    <main>
      <menu>
        <MenuButton onSelect={() => clickHandler('floor')}>Floor Tiling</MenuButton>
        <MenuButton onSelect={() => clickHandler('wall')}>Wall Tiling</MenuButton>
        <MenuButton onSelect={() => clickHandler('heating')}>Underfloor Heating</MenuButton>
        <MenuButton onSelect={() => clickHandler('wetrooms')}>Wet Rooms</MenuButton>
      </menu>
      {content}
    </main>
  )
};
