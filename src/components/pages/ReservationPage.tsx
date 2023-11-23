import React, {useReducer} from 'react';

import "../styles/ReservationsContent.scss";
import BookingForm from "../BookingForm.tsx"
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import { updateTimes, initializeTimes } from "../api.ts";
const ReservationPage = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    console.log('asd',availableTimes);
    return (
        <>
            <Header />
            <div className="res-content-wrapper">
                <div className="res-content-container">
                    <div className="text">
                        <h2>Experience the perfect balance of tradition and luxury.</h2>
                        <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                        <p>Book a table with us to share in this experience.</p>
                    </div>
                    <div className="form">
                        <h1>Reserve a Table</h1>
                        <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                        <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
                    </div>
                </div>
                </div>
            <Footer />
        </>
      )
}
export default ReservationPage;
