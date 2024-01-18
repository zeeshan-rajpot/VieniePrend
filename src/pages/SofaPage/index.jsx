import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../../components/Footer.jsx";
import NavBar from "../../components/Navbar.jsx";
import SofaDestails from './components/sofaDestails.jsx';
import { useParams } from 'react-router-dom';
export const index = () =>{
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const apiUrl = `https://vieniprent.azurewebsites.net/api/customer/post/get/${id}`;
  // const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTEwZDM0NDZkMjhmNzkzYWNjNDAxNCIsImlhdCI6MTcwNTA1MzUyMX0.C7aOrv_wFnjJaTNVBMsPgF9HVEPhtHYm6hc9lMJrFk0';

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        setData(response.data.post);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching API data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  return (
    <div>


      <NavBar />
      <SofaDestails data={data} />

      <Footer />



    </div>
  );
};
export default index;