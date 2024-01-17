

import React, { useState, useRef, useEffect , ChangeEvent } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';


export const MainPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [llocation, setLlocation] = useState("");
  const [productDescription, setProductDescription] = useState("");
 
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const MainWidth = {
    width: isMobile ? '100%' : '80%',
  };
  const Imagewidth = {
    width: isMobile ? '100%' : '50%',
  };
  const Paragraphwidth = {
    width: isMobile ? '100%' : '50%',
  };
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
console.log(files)
  // rendering previews
  useEffect(() => {
    if (!files) return;
  
    // Get the names and paths of all files
    const fileDetails = files.map(file => ({
      name: file.name,
      path: URL.createObjectURL(file),
    }));
  
    // console.log("File details:", fileDetails);
  
    // Set previews with the created URLs
    const objectUrls = fileDetails.map(file => file.path);
    
    // console.log(objectUrls)
    setPreviews(objectUrls);
  
    // Free memory
    return () => {
      objectUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [files]);
  const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTEwZDM0NDZkMjhmNzkzYWNjNDAxNCIsImlhdCI6MTcwNTA1MzUyMX0.C7aOrv_wFnjJaTNVBMsPgF9HVEPhtHYm6hc9lMJrFk0'); // Replace with your actual token


  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);





  const handlePostApi = async (e) => {

   
    setLoading(true);

    const formData = new FormData();
    formData.append('name', displayName);
    formData.append('category',selectedCategory);
    formData.append('location', setLlocation);
    formData.append('description', productDescription);
    // formData.append('images', selectedFiles);
     for (let i = 0; i < files.length; i++) {
      formData.append(`images`, files[i]);
    }

  

    try {
      const response = await axios.post('https://vieniprent.azurewebsites.net/api/customer/post/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
     console.log(llocation)
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>

      <Container className='m-auto'
        style={MainWidth}


      >
        <Row className='my-5'>
          <Col className='text-center'>
            <img src="./AddProduct/4302279.png" alt="" style={Imagewidth} />
          </Col>
        </Row>
        <Row>
          <div className='m-auto text-center' style={Paragraphwidth}>
            <p style={{ color: '#000000', fontSize: '22px', fontWeight: '500' }}>Upload Product</p>
            <p style={{ color: '#585D5E', fontSize: '15px' }}>Text to Fill provides a flexible platform to sell your products or
              services so atform to sell your products or services so that you can focus on </p>
          </div>
        </Row>

        <Row className='shadow p-3 my-5'>
          {/* <Col lg={6} className=' d-none shadow p-2 d-flex flex-column  justify-content-center align-items-center' style={{ height: '400px' }}>
          {!previews.length ? (
              <div className='shadow p-2'
                style={{
                  borderRadius: '50%',
                  width: '82',
                  height: '82',
                  backgroundPosition: 'center',
                  objectFit: 'cover'
                }}
              >
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  multiple
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFiles(e.target.files);
                    }
                  }}
                />
              </div>
            ) : (
              previews.map((preview, index) => (
                <img  key={index} src={preview} alt={`preview-${index}`} style={{ width: '198px', height: '198px' }} />
              ))
            )}
           
          </Col> */}
        
        {/* {isMobile ? (
            <Col xs={12}>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className='shadow' style={{ width: '100%', height: '198px', margin: '10px' }}>
                    {!previews[index] ? (
                      <div className='shadow p-2'
                        style={{
                          borderRadius: '50%',
                          width: '82',
                          height: '82',
                          backgroundPosition: 'center',
                          objectFit: 'cover'
                        }}
                      >
                        <input
                          type="file"
                          accept="image/jpg, image/jpeg, image/png"
                          onChange={(e) => {
                            const newFiles = [...files];
                            newFiles[index] = e.target.files[0];
                            setFiles(newFiles);
                          }}
                        />
                      </div>
                    ) : (
                      <img src={previews[index]} alt={`preview-${index}`} style={{ width: '100%', height: '100%' }} />
                    )}
                  </div>
                ))}
              </div>
            </Col>
          ) : (
            <> */}
         {[1, 2, 3, 4, 5, 6].map((_, index) => {
  const isIndexOccupied = !!previews[index];

  return (
    <Col xs={6} lg={4} key={index}>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className='shadow' style={{ width: '198px', height: '198px', margin: '10px' }}>
          {!isIndexOccupied ? (
            <div className='shadow p-2'
              style={{
                borderRadius: '50%',
                width: '82',
                height: '82',
                backgroundPosition: 'center',
                objectFit: 'cover'
              }}
            >
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                onChange={(e) => {
                  const newFiles = [...files];
                  newFiles[index] = e.target.files[0];
                  setFiles(newFiles);
                }}
              />
            </div>
          ) : (
            <img src={previews[index]} alt={`preview-${index}`} style={{ width: '198px', height: '198px' }} />
          )}
        </div>
      </div>
    </Col>
  );
})}

            {/* </>
          )} */}
          
        </Row>


        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Display name</label>
          <input
            type="text"
            placeholder='Example: Luxury Cloud Sofa'
            className='mt-2 w-100'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={{
              borderBottom: '0.5px solid #AEADAD',
              borderLeft: 'transparent',
              borderRight: 'transparent',
              borderTop: 'transparent',
              color: '#C6CCD2',
              fontSize: '14px'
            }}
          />
        </div>
        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Select Category </label>
          <select
            className='w-100 p-2 border-1 rounded-3'
            style={{
              borderLeft: 'transparent',
              borderRight: 'transparent',
              borderTop: 'transparent',
              background: 'transparent',
              borderBottom: '0.5px solid #AEADAD',
              color: '#C6CCD2',
              fontSize: '14px'
            }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            'SofaAndChairs', 'Chair', 'Clocks', 'Table', 'Bed', 'Wardrobe', 'Other'
            <option value=""> Chose the Option</option>
            <option value='SofaAndChairs'>Sofa</option>
            <option value="Chair">Chairs</option>
            <option value="Bed">Bed</option>
            <option value="Table">Tables</option>
            <option value="Wardrobe">Wardrobe</option>
            <option value="Other">All</option>
          </select>
        </div>
        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Location</label>
          <input
            type="text"
            placeholder='Example: Luxury Cloud Sofa'
            className='mt-2 w-100'
            value={llocation}
            onChange={(e) => setLlocation(e.target.value)}
            style={{
              borderBottom: '0.5px solid #AEADAD',
              borderLeft: 'transparent',
              borderRight: 'transparent',
              borderTop: 'transparent',
              color: '#C6CCD2',
              fontSize: '14px'
            }}
          />
        </div>
        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Product Description</label>
          <textarea
            className='mt-2 rounded-4 w-100 shadow border-0'
            style={{
              height: '140px',
              color: '#C6CCD2',
              fontSize: '14px'
            }}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <Row>
          <Col className='text-center my-5' lg={12} xl={12} xs={12}>
            <button style={{ backgroundColor: '#FD9F00', color: '#fff' }} className='shadow w-25 p-2 rounded-5 border-0' onClick={handlePostApi} disabled={loading}>
              
            {loading ? 'Uploading...' : 'Upload'}</button>
          </Col>
        </Row>
      </Container>


    </div>
  );
};
export default MainPage;