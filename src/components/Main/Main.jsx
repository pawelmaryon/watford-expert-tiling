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

  const {material: wall_material} = wall;
  const {types: w_types} = wall_material;


  const {types: h_types, installation_process: heating_installation, considerations: heating_considerations, applications: h_application} = heating;

  const {electric_underfloor_heating: electric_uh, hydronic_underfloor_heating: hydronic_uh} = h_types;

  const {electric_underfloor_heating_installation: electric_installation, hydronic_underfloor_heating_installation: hydronic_installation} = heating_installation;

  const { cost: h_cost, flooring_compatibility: h_flooring_compatibility, installation: h_installation, maintenance: h_maintenance} = heating_considerations;

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
  if (selectedService === 'wall') {
    content = (
      <div>
        <h4>{wall.title}</h4>
        <p>{wall_material.description}</p>
        <ul>
          <li><p>{w_types.ceramic_tiles.title}</p></li>
          <p>{w_types.ceramic_tiles.description}</p>
          <li><p>{w_types.porcelain_tiles.title}</p></li>
          <p>{w_types.porcelain_tiles.description}</p>
        </ul>
      </div>
    )
  }
  if (selectedService === 'heating') {
    content = (
      <div>
        <h4>{heating.title}</h4>
        <p>{heating.description}</p>
        <div id="heating-types">
          <ul>
            <li><p>{electric_uh.name}</p></li>
            <h6>{electric_uh.components.name}</h6>
            <p>{electric_uh.components.describtion}</p>
            <h6>{electric_uh.installation.name}</h6>
            <p>{electric_uh.installation.describtion}</p>
            <h6>{electric_uh.operation.name}</h6>
            <p>{electric_uh.operation.describtion}</p>
            <h6>{electric_uh.usage.name}</h6>
            <p>{electric_uh.usage.describtion}</p>
            <li><p>Hydronic Underfloor Heating</p></li>
            <h6>{hydronic_uh.components.name}</h6>
            <p>{hydronic_uh.components.description}</p>
            <h6>{hydronic_uh.installation.name}</h6>
            <p>{hydronic_uh.installation.description}</p>
            <h6>{hydronic_uh.operation.name}</h6>
            <p>{hydronic_uh.operation.description}</p>
            <h6>{hydronic_uh.usage.name}</h6>
            <p>{hydronic_uh.usage.description}</p>
          </ul>
        </div>
        <div id="heating-installation-process">
          <h6>{heating_installation.title}</h6>
          <ul>
            <p>{heating_installation.description}</p>
            <p>{electric_installation.title}</p>
            <li><p>{electric_installation.preparation.title}</p></li>
            <p>{electric_installation.preparation.description}</p>
            <li><p>{electric_installation.laying_the_heating_elements.title}</p></li>
            <p>{electric_installation.laying_the_heating_elements.description}</p>
            <li><p>{electric_installation.connecting_the_system.title}</p></li>
            <p>{electric_installation.connecting_the_system.description}</p>
            <li><p>{electric_installation.floor_covering.title}</p></li>
            <p>{electric_installation.floor_covering.description}</p>

            <li><p>{hydronic_installation.title}</p></li>
            <p>{hydronic_installation.description}</p>
            <li><p>{hydronic_installation.preparation.title}</p></li>
            <p>{hydronic_installation.preparation.description}</p>
            <li><p>{hydronic_installation.laying_the_pipes.title}</p></li>
            <p>{hydronic_installation.laying_the_pipes.description}</p>
            <li><p>{hydronic_installation.connecting_the_system.title}</p></li>
            <p>{hydronic_installation.connecting_the_system.description}</p>
            <li><p>{hydronic_installation.floor_covering.title}</p></li>
            <p>{hydronic_installation.floor_covering.description}</p>
          </ul>
          <h6>{heating_installation.title}</h6>
          <ul>
            <p>{heating_considerations.title}</p>
            <li><p>{h_cost.title}</p></li>
            <p>{h_cost.description}</p>
            <li><p>{h_flooring_compatibility.title}</p></li>
            <p>{h_flooring_compatibility.description}</p>
            <li><p>{h_installation.title}</p></li>
            <p>{h_installation.description}</p>
            <li><p>{h_maintenance.title}</p></li>
            <p>{h_maintenance.description}</p>
          </ul>
          <h6>{h_application.title}</h6>
          <li><p>{h_application.residential.title}</p></li>
          <p>{h_application.residential.description}</p>
          <li><p>{h_application.commercial.title}</p></li>
          <p>{h_application.commercial.description}</p>
          <li><p>{h_application.retrofits.title}</p></li>
          <p>{h_application.retrofits.description}</p>
          
        </div>
        <div id="heating-applications"></div>
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
