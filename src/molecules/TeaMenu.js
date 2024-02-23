import React, { useEffect, useState } from 'react';
import TeaItem from './TeaItem';
import Grid from '@mui/material/Grid';

//useState
//In this scenario, useState is tracking the menuData and uses it to pass data to the TeaItem compnent to display the menu

//useEffect
//Will only run on initial render since the dependency array is empty
//This grabs all the menu data on initial render from a json file in the project

const TeaMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const jsonFileName = './data/menu.json';

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(jsonFileName);
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <div>
      <h2 style={{ color: '#123524' }}>Tea Menu</h2>
      <Grid container spacing={2}>
        {menuData.map((tea) => (
          <Grid item key={tea.id} xs={12} sm={6} md={4} lg={3}>
            <TeaItem tea={tea} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TeaMenu;
