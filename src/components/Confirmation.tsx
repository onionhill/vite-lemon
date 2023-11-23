import React, { useEffect, useState} from "react";
import "./styles/Confirmation.scss";

import { useNavigate, NavigateFunction } from "react-router-dom";


const Confirmation = () => {
    const navigate: NavigateFunction = useNavigate();
    const [booking, setBooking] = useState<{
        date: string, 
        email: string, 
        name: string, 
        guests: number, 
        telephone: string, 
        occasion: string,
        time: string
    }>();

    useEffect(() => {
        const booking = localStorage.getItem("Bookings");
        if (booking) {
          setBooking(JSON.parse(booking));
        };
      }, []);

    return(
        <div className="confirmation-container">
            <h1>Thank you for your reservation!</h1>
            <h3 className="confirmation-txt">We look forward to seeing you at Little Lemon.</h3>
            <div className="confirmation-details">
                <h2>Confirmation details</h2>
                <span><strong>Name:</strong> {booking?.name}</span>
                <span><strong>Occasion:</strong> {booking?.occasion}</span>
                <span><strong>Guests:</strong> {booking?.guests}</span>
                <span><strong>Date:</strong> {booking?.date}</span>
                <span><strong>Time:</strong> {booking?.time}</span>

            </div>

            <button className="home-btn" type="submit" onClick={() => navigate("/")}>Home</button>
        </div>
    )
}

export default Confirmation;