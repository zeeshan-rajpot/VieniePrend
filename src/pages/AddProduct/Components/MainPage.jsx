// import React, { useState, useRef, useEffect } from "react";
// import { Col, Container, Row } from 'react-bootstrap';
// import { useMediaQuery } from 'react-responsive';


// export const MainPage = () => {
//   const isMobile = useMediaQuery({ maxWidth: 768 });

//   const MainWidth = {
//     width: isMobile ? '100%' : '80%',
//   };
//   const Imagewidth = {
//     width: isMobile ? '100%' : '50%',
//   };
//   const Paragraphwidth = {
//     width: isMobile ? '100%' : '50%',
//   };
//   const [files, setFiles] = useState();
//   const [previews, setPreviews] = useState();

//   // rendering previews
//   useEffect(() => {
//     if (!files) return;
//     let tmp = [];
//     for (let i = 0; i < files.length; i++) {
//       tmp.push(URL.createObjectURL(files[i]));
//     }
//     const objectUrls = tmp;
//     setPreviews(objectUrls);

//     // free memory
//     for (let i = 0; i < objectUrls.length; i++) {
//       return () => {
//         URL.revokeObjectURL(objectUrls[i]);
//       };
//     }
//   }, [files]);




//   return (
//     <div>

//       <Container className='m-auto'
//         style={MainWidth}


//       >
//         <Row className='my-5'>
//           <Col className='text-center'>
//             <img src="./AddProduct/4302279.png" alt="" style={Imagewidth} />
//           </Col>
//         </Row>
//         <Row>
//           <div className='m-auto text-center' style={Paragraphwidth}>
//             <p style={{ color: '#000000', fontSize: '22px', fontWeight: '500' }}>Upload Product</p>
//             <p style={{ color: '#585D5E', fontSize: '15px' }}>Text to Fill provides a flexible platform to sell your products or
//               services so atform to sell your products or services so that you can focus on </p>
//           </div>
//         </Row>

//         <Row className='shadow p-3 my-5'>
//           <Col lg={6} className='shadow p-2 d-flex flex-column  justify-content-center align-items-center' style={{ height: '400px' }}>
//             {!previews ? (
//               <div className='shadow p-2'
//                 style={{
//                   borderRadius: '50%',
//                   width: '82',
//                   height: '82',
//                   backgroundPosition: 'center',
//                   objectFit: 'cover'
//                 }}
//               >

//                 <input
//                   type="file"
//                   accept="image/jpg, image/jpeg, image/png"
//                   multiple
//                   onChange={(e) => {
//                     if (e.target.files && e.target.files.length > 0) {
//                       setFiles(e.target.files);
//                     }
//                   }}
//                 />
//               </div>
//             ) : (
//               <img src={previews[0]} alt="preview-0" style={{ width: '198px', height: '198px' }} />
//             )}
//             {/* <p className='mt-3' style={{ color: '#515151', fontSize: '14px' }}>Upload Image</p> */}
//           </Col>
//           <Col lg={6}>
//             <div className='d-flex justify-content-center align-items-center flex-column '>
//               <div className='d-flex justify-content-between align-items-center'>
//                 <div className='shadow ' style={{ width: '198px', height: '198px' }}>
//                   {!previews ? (
//                     <div className='shadow p-2'
//                       style={{
//                         borderRadius: '50%',
//                         width: '82',
//                         height: '82',
//                         backgroundPosition: 'center',
//                         objectFit: 'cover'
//                       }}
//                     >

//                       <input
//                         type="file"
//                         accept="image/jpg, image/jpeg, image/png"
//                         multiple
//                         onChange={(e) => {
//                           if (e.target.files && e.target.files.length > 0) {
//                             setFiles(e.target.files);
//                           }
//                         }}
//                       />
//                     </div>
//                   ) : (
//                     <img src={previews[1]} alt="preview-0" style={{ width: '198px', height: '198px' }} />
//                   )}
//                 </div>
//                 <div className='shadow ms-3' style={{ width: '198px', height: '198px' }}>
//                   {!previews ? (
//                     <div className='shadow p-2'
//                       style={{
//                         borderRadius: '50%',
//                         width: '82',
//                         height: '82',
//                         backgroundPosition: 'center',
//                         objectFit: 'cover'
//                       }}
//                     >

//                       <input
//                         type="file"
//                         accept="image/jpg, image/jpeg, image/png"
//                         multiple
//                         onChange={(e) => {
//                           if (e.target.files && e.target.files.length > 0) {
//                             setFiles(e.target.files);
//                           }
//                         }}
//                       />
//                     </div>
//                   ) : (
//                     <img src={previews[2]} alt="preview-0" style={{ width: '198px', height: '198px' }} />
//                   )}
//                 </div>
//               </div>
//               <div className='d-flex justify-content-between align-items-center'>
//                 {!previews ? (
//                   <div className='shadow p-2'
//                     style={{
//                       borderRadius: '50%',
//                       width: '82',
//                       height: '82',
//                       backgroundPosition: 'center',
//                       objectFit: 'cover'
//                     }}
//                   >

//                     <input
//                       type="file"
//                       accept="image/jpg, image/jpeg, image/png"
//                       multiple
//                       onChange={(e) => {
//                         if (e.target.files && e.target.files.length > 0) {
//                           setFiles(e.target.files);
//                         }
//                       }}
//                     />
//                   </div>
//                 ) : (
//                   <img src={previews[3]} alt="preview-0" style={{ width: '198px', height: '198px' }} />
//                 )}
//                 <div className='shadow ms-3'
//                   style={{ width: '198px', height: '198px' }}
//                 >

// {!previews ? (
//              <div className='shadow p-2'
//   style={{
//     borderRadius: '50%',
//     width: '82',
//     height: '82',
//     backgroundPosition: 'center',
//     objectFit: 'cover'
//   }}
// >

//     <input
//       type="file"
//       accept="image/jpg, image/jpeg, image/png"
//       multiple
//       onChange={(e) => {
//         if (e.target.files && e.target.files.length > 0) {
//           setFiles(e.target.files);
//         }
//       }}
//     />
//     </div> 
//   ) : (
//     <img src={previews[4]} alt="preview-0" style={{ width: '198px', height: '198px' }} />
//   )}
//                 </div>
//               </div>
//             </div>


//           </Col>
//         </Row>


//         <div className='d-flex flex-column justify-content-start align-items-start my-3'>
//           <label style={{ color: '#464644', fontSize: '16px' }}>Display name</label>
//           <input type="text" placeholder='Example: Luxury Cloud Sofa' className='mt-2 w-100' style={{
//             borderBottom: '0.5px solid #AEADAD',
//             borderLeft: 'transparent',
//             borderRight: 'transparent',
//             borderTop: 'transparent',
//             color: '#C6CCD2',
//             fontSize: '14px'
//           }} />
//         </div>
//         <div className='d-flex flex-column justify-content-start align-items-start my-3'>
//           <label style={{ color: '#464644', fontSize: '16px' }}>Select Category </label>
//           <select className='w-100 p-2 border-1  rounded-3 '
//             style={{
//               borderLeft: 'transparent',
//               borderRight: 'transparent',
//               borderTop: 'transparent',
//               background: 'transparent',
//               borderBottom: '0.5px solid #AEADAD',
//               color: '#C6CCD2',
//               fontSize: '14px'
//             }}>
//             <option value="Example: Furniture">Example: Furniture</option>
//             <option >Sofa</option>
//             <option >Chairs</option>
//             <option >Bed</option>
//             <option >Tables</option>
//           </select>
//         </div>
//         <div className='d-flex flex-column justify-content-start align-items-start my-3'>
//           <label style={{ color: '#464644', fontSize: '16px' }}>Location</label>
//           <input type="text" placeholder='Select Location' className='mt-2 w-100' style={{
//             borderBottom: '0.5px solid #AEADAD',
//             borderLeft: 'transparent',
//             borderRight: 'transparent',
//             borderTop: 'transparent',
//             color: '#C6CCD2',
//             fontSize: '14px'
//           }} />
//         </div>
//         <div className='d-flex flex-column justify-content-start align-items-start my-3'>
//           <label style={{ color: '#464644', fontSize: '16px' }}>Product Discerption</label>
//           <input type="textarea" className='mt-2 rounded-4   w-100 shadow border-0' style={{
//             height: '140px',
//             color: '#C6CCD2',
//             fontSize: '14px'
//           }} />
//         </div>

//         <Row>
//           <Col className='text-center my-5' lg={12} xl={12} xs={12}>
//             <button style={{ backgroundColor: '#FD9F00', color: '#fff' }} className='shadow w-25 p-2 rounded-5 border-0'>Upload</button>
//           </Col>
//         </Row>
//       </Container>


//     </div>
//   );
// };
// export default MainPage;





import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';


export const MainPage = () => {
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

    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory
    return () => {
      for (let i = 0; i < objectUrls.length; i++) {
        URL.revokeObjectURL(objectUrls[i]);
      }
    };
  }, [files]);




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
              {[1, 2, 3 ,4,5,6].map((_, index) => (
                <Col xs={6} lg={4}  key={index}>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='shadow' style={{ width: '198px', height: '198px', margin: '10px' }}>
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
                        <img src={previews[index]} alt={`preview-${index}`} style={{ width: '198px', height: '198px' }} />
                      )}
                    </div>
                  </div>
                </Col>
              ))}
            {/* </>
          )} */}
          
        </Row>


        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Display name</label>
          <input type="text" placeholder='Example: Luxury Cloud Sofa' className='mt-2 w-100' style={{
            borderBottom: '0.5px solid #AEADAD',
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderTop: 'transparent',
            color: '#C6CCD2',
            fontSize: '14px'
          }} />
        </div>
        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Select Category </label>
          <select className='w-100 p-2 border-1  rounded-3 '
            style={{
              borderLeft: 'transparent',
              borderRight: 'transparent',
              borderTop: 'transparent',
              background: 'transparent',
              borderBottom: '0.5px solid #AEADAD',
              color: '#C6CCD2',
              fontSize: '14px'
            }}>
            <option value="Example: Furniture">Example: Furniture</option>
            <option >Sofa</option>
            <option >Chairs</option>
            <option >Bed</option>
            <option >Tables</option>
          </select>
        </div>
        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Location</label>
          <input type="text" placeholder='Select Location' className='mt-2 w-100' style={{
            borderBottom: '0.5px solid #AEADAD',
            borderLeft: 'transparent',
            borderRight: 'transparent',
            borderTop: 'transparent',
            color: '#C6CCD2',
            fontSize: '14px'
          }} />
        </div>
        <div className='d-flex flex-column justify-content-start align-items-start my-3'>
          <label style={{ color: '#464644', fontSize: '16px' }}>Product Discerption</label>
          <input type="textarea" className='mt-2 rounded-4   w-100 shadow border-0' style={{
            height: '140px',
            color: '#C6CCD2',
            fontSize: '14px'
          }} />
        </div>

        <Row>
          <Col className='text-center my-5' lg={12} xl={12} xs={12}>
            <button style={{ backgroundColor: '#FD9F00', color: '#fff' }} className='shadow w-25 p-2 rounded-5 border-0'>Upload</button>
          </Col>
        </Row>
      </Container>


    </div>
  );
};
export default MainPage;