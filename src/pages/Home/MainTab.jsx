import React, { useState } from "react";
import Tabbar from "../../components/Tabbar.jsx";
import SofaCouch from './Tabbar Pages/SofaCouch.jsx';
import Chair from './Tabbar Pages/Chair.jsx';
import Clocks from './Tabbar Pages/Clocks.jsx';
import Table from './Tabbar Pages/Table.jsx';
import Bed from './Tabbar Pages/Bed.jsx';
import Wardrobe from './Tabbar Pages/Wardrobe.jsx';
export const MainTab = () =>
{
  const [ activeTab, setActiveTab ] = useState( "Chair" );

  const handleTabClick = ( tab ) =>
  {
    setActiveTab( tab );
  };
  return (
    <div>
      <Tabbar activeTab={ activeTab } onTabClick={ handleTabClick } />
      { activeTab === "SofaCouch" && <SofaCouch /> }
      { activeTab === "Chair" && <Chair /> }
      { activeTab === "Clocks" && <Clocks /> }
      { activeTab === "Table" && <Table /> }
      { activeTab === "Bed" && <Bed /> }
      { activeTab === "wardrobe" && <Wardrobe /> }
    </div>
  );
};
export default MainTab;