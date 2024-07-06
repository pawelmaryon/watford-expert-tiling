import { useState } from 'react';
import './Main.scss';
import MenuButton from '../Shared/MenuButton/MenuButton';
export default function Main() {
  const [selectedService, setSelectedService] = useState('initial content');

  const clickHandler = (selectedButton) =>{
    setSelectedService(selectedButton)
  }

  return(
    <main>
      <menu>
        <MenuButton onSelect={() => clickHandler('Floor Tiling')}>Floor Tiling</MenuButton>
        <MenuButton onSelect={() => clickHandler('Wall Tiling')}>Wall Tiling</MenuButton>
        <MenuButton onSelect={() => clickHandler('Underfloor Heating')}>Underfloor Heating</MenuButton>
        <MenuButton onSelect={() => clickHandler('Wet Rooms')}>Wet Rooms</MenuButton>
      </menu>
      <section id='main-section-content'>
        {selectedService}
      </section>
    </main>
  )
};