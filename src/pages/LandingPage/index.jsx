// Import css
import './landingpage.css';

// import module react
import React from 'react';
import { ChevronDown, MusicNoteBeamed, PaletteFill, HandbagFill, Heart, BoomboxFill, BriefcaseFill, CupStraw, Bicycle, Person } from 'react-bootstrap-icons';
// import { useNavigate } from 'react-router-dom';

//import others
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import dummy from '../../utility/dummy';

export default function LandingPage() {
   // const [isActive, setIsActive] = useState('All');
   const data = dummy;

   // const navigate = useNavigate();

   // const magic = () => {
   //    navigate(`/detail-event/${id}`);
   // };

   return (
      <>
         <Navbar />
         <div className="backgorundLandingPage">
            <div className="container pt-5">
               <h1 className="textColorLanding pt-5 fontSizeLandingPage">
                  NOW IS <br /> YOUR TIME
               </h1>
               <div className="btn btn-body btnColor mt-5 textColorLanding">Find your next event</div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="container">
               <div className="container mt-3 shadow-sm p-3 mb-3 bg-body rounded border-start border-warning border-3">
                  <h4 className="fw-bold">Do events help you find connection?</h4>
                  <p>Help us understand how attending events contributes to building social connection by taking a short survey before and after your next event. Start here.</p>
               </div>
               <div className="container mt-5 d-flex">
                  <h1>Popular in</h1>
                  <ChevronDown width={25} height={25} className="ms-3" />
                  <form>
                     <div class="mx-3 mt-3">
                        <input type="email" class="border-bottom formSubmitLandingPage" placeholder="Input your address" id="exampleInputEmail1" />
                     </div>
                  </form>
               </div>
               <div className="container mt-3">
                  <div className="row">
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">All</div>
                     </div>
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">For you</div>
                     </div>
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">Online</div>
                     </div>
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">Today</div>
                     </div>
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">Free</div>
                     </div>
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">Music</div>
                     </div>
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">Food & Drink</div>
                     </div>
                     <div className="col-lg-1 col-md-2">
                        <div className="listCtegoryItem">Charity & Causes</div>
                     </div>
                  </div>
               </div>
               <div className="container mt-4 py-4">
                  <h3 className="fw-bold">Check out trending categories</h3>
                  <div className="row mt-4">
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <MusicNoteBeamed width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Music</h6>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <PaletteFill width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Performing & Visual Arts</h6>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <HandbagFill width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Travel & Outdor</h6>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <Heart width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Health</h6>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <BoomboxFill width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Hobbies</h6>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <BriefcaseFill width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Business</h6>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <CupStraw width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Food & Drink</h6>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div className="border d-flex bgColorTrending">
                           <Bicycle width={25} height={25} className="m-3" />
                           <h6 className="textTrandingCategories bgColorName">Sport & Fitness</h6>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <h3 className="fw-bold my-4 pb-3">Events in Kotamadya Jakarta Barat</h3>
                  <div className="row mb-5">
                     {data.map((result) => (
                        <div className="col-lg-3 col-md-6 mt-2">
                           <div class="card border shadow rounded d-flex mt-2 CardEvent" idx={result.id}>
                              <img src={result.image} class="card-img-top border" alt="event" />
                              <div class="card-body">
                                 <h5 className="fw-bold">{result.name.substring(0, 30) + '...'}</h5>
                                 <p className="fw-bold colorTextEvent">{result.dateTime}</p>
                                 <p class="card-text">
                                    {`${result.location.Jl}`.substring(0, 30) + '...'} <br />
                                    Free
                                 </p>
                                 <div className="fw-bold">{result.infoContact}</div>
                                 <div className="d-flex mt-2 fw-bold">
                                    <Person width={20} height={20} className="me-2" />
                                    <p>{result.followers} followers</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="d-flex justify-content-center">
                  <div className="underline"></div>
                  <p className="px-5 textColorMoreEvent">More events</p>
                  <div className="underline"></div>
               </div>
               <div className="container">
                  <h3 className="fw-bold my-4 pb-3">More events</h3>
                  <div className="row mb-5">
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event2.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event3.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event5.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event7.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event6.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event4.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event3.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 mt-2">
                        <div class="card border shadow rounded CardEvent">
                           <img src={require('../../assets/event/event7.jpg')} class="card-img-top border" alt="event" />
                           <div class="card-body">
                              <h5 className="fw-bold">WEBINAR RAHASIA PIPA DUIT 24/7</h5>
                              <p className="fw-bold colorTextEvent">Mon, Aug 8, 7:30 PM</p>
                              <p class="card-text">
                                 {`Hotel Grand Tjokro ( Di HP ATAU LAPTOP ANDA ) • Kec. Grogol petamburan, Daerah Khusus Ibukota Jakarta`.substring(0, 30) + '...'} <br />
                                 Free
                              </p>
                              <div className="fw-bold">Kwet Liung / 082260779360</div>
                              <div className="d-flex mt-2 fw-bold">
                                 <Person width={20} height={20} className="me-2" />
                                 <p>1k followers</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
}
