import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import withParams from '../../helpers/withParams';
import dummy from '../../utility/dummy';
import { Download, Heart, CalendarWeekFill, GeoAlt, Twitter, Linkedin, Facebook, Messenger } from 'react-bootstrap-icons';

import './detailevent.css';

function DetailEvent(props) {
   const [event, setEvent] = useState('');
   const { params } = props;
   console.log(params.id);

   const eventHandler = () => {
      const result = dummy.find((item) => (item.id = params.id));
      setEvent(result);
   };

   useEffect(() => {
      eventHandler();
   });

   return (
      <>
         <Navbar />
         <div className="container-fluid">
            <div className="container">
               <div className="bg-body my-5 mx-5 shadow rounded">
                  <div className="d-flex border-bottom mainContent">
                     <img src={event.image} alt="background" className="border-end border-bottom imageDetailEvent" />
                     <div className="detailInformation px-3 py-3">
                        <h6>{event.dateTime}</h6>
                        <h5 className="py-3 fw-bold">{event.name}</h5>
                        <p>by {event.infoContact}</p>
                        <div className="d-flex">
                           <p className="pe-4 pt-2">{event.followers} followers</p>
                           <div className="btn btn-outline-primary">Follow</div>
                        </div>
                        <p className="pt-5 mt-5">free</p>
                     </div>
                  </div>
                  <div className="d-flex justify-content-between border-bottom">
                     <div className="p-3">
                        <Download width={25} height={25} />
                        <Heart width={25} height={25} className="ms-4" />
                     </div>
                     <div className="btn btn-success p-3 m-1 registerEventDetail">Register</div>
                  </div>
                  <div className="container-fluid">
                     <div className="container d-flex">
                        <aside className="px-5 py-5 asideEventDetail">
                           <h5 className="fw-bold">{event.name}</h5>
                           <h6 className="py-5">About this event</h6>
                           <div>{event.description}</div>
                           <p className="py-4">Note :</p>
                           <p>Silahkan Share ke relasi, keluarga dan teman-temen Anda agar banyak yang mendapatkan manfaat dari Webinar ini dan supaya tidak terhempas oleh era disruptive.</p>
                           <p>Tags</p>
                           <div className="d-flex">
                              <div className="border me-3 rounded borderTags">
                                 <p className="m-3">indonesia event</p>
                              </div>
                              <div className="border me-3 rounded borderTags">
                                 <p className="m-3">indonesia event</p>
                              </div>
                              <div className="border me-3 rounded borderTags">
                                 <p className="m-3">indonesia event</p>
                              </div>
                           </div>
                           <p>Share with friends</p>
                           <div className="d-flex">
                              <Facebook width={30} height={30} className="me-3" />
                              <Messenger width={30} height={30} className="me-3" />
                              <Twitter width={30} height={30} className="me-3" />
                              <Linkedin width={30} height={30} className="me-3" />
                           </div>
                        </aside>
                        <div className="px-5 py-5 mainEvent">
                           <div className="d-flex">
                              <CalendarWeekFill width={23} height={23} className="me-3" />
                              <div>
                                 <h5>Date and time</h5>
                                 <p>{event.dateTime}</p>
                              </div>
                           </div>
                           <div className="d-flex mt-5">
                              <GeoAlt width={23} height={23} className="me-3" />
                              <div>
                                 <h5>Date and time</h5>
                                 <p>{event.dateTime}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default withParams(DetailEvent);
