
import React, {useEffect,FC, Dispatch} from 'react';

import "./styles/ReservationsContent.scss";

import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate, NavigateFunction } from "react-router-dom";


interface BookingFormProps{
    dispatch: Dispatch<{type:string, date:Date}>,
    availableTimes: {
        times: string[];
    }
}

const BookingForm: FC<BookingFormProps> = ({ availableTimes, dispatch }): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();
    const formik = useFormik({
        initialValues: {
          date: '',
          email: '',
          name: '',
          guests:0,
          telephone: '',
          occasion: "",
          time: ''
        },
        onSubmit: (values) => {
            localStorage.setItem("Bookings", JSON.stringify(values));
            navigate("/confirmation");
        },
        validationSchema: yup.object({
            name: yup.string().required("Please enter your name"),
            email: yup.string().required("Email is a required field").email("Email is not valid"),
            telephone: yup.string().required("Telephone is a required field!").matches(/^-?\d+(\.\d+)?$/, "Phone number must match the form 12345678"),
            guests: yup.number().min(1, "There must be at least 1 guest").max(10, "Maximum 10 guests per table").required("Please specify number of guests"),
            date: yup.string().required("Please select date"),
            time: yup.string().required("Please select time"),
            occasion: yup.string().oneOf(["Select occasion", "birthday", "engagement", "anniversary"])
        })
      });
    console.log(formik.values.date,'ad');
      useEffect(() => {
        dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
      }, [dispatch, formik.values.date]);


    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name </label>
                    <input id="name" type="text" placeholder="Your name..." {...formik.getFieldProps("name") } />
                    <span className="error-message">
                    {formik.touched.name && formik.errors.name}
                    </span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email </label>
                    <input id="email" type="text" placeholder="Your email..." {...formik.getFieldProps("email") } />
                    <span className="error-message">
                        {formik.touched.email && formik.errors.email}
                    </span>                
                    </div>
                <div className="field">
                    <label htmlFor="telephone">Telephone </label>
                    <input id="telephone" type="text" placeholder="Your telephone number..." {...formik.getFieldProps("telephone") } />
                    <span className="error-message">
                    {formik.touched.telephone && formik.errors.telephone}
                    </span>
                </div>

                <div className="field occasion">                    
                    <label htmlFor="occasion">Occasion (optional) </label>
                    <div className="occasion-container">
                        <select id="occasion" {...formik.getFieldProps("occasion")}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <span className="error-message">
                    {formik.touched.occasion && formik.errors.occasion}
                    </span>                   
                </div>

                <div className="field">
                    <label htmlFor="guests">Number of guests </label>
                    <input id="guests" type="number" placeholder="2" {...formik.getFieldProps("guests")} />
                    <span className="error-message">
                        {formik.touched.guests && formik.errors.guests}
                    </span>     
                </div>
                <div className="field">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" name="date"  {...formik.getFieldProps("date")} />
                    <span className="error-message">
                        {formik.touched.date && formik.errors.date}
                    </span>     
                </div>
                <div className="field">
                    <label htmlFor="time">Time</label>
                    <div className="occasion-container">
                        <select id="time" {...formik.getFieldProps("time")}>
                          {availableTimes.map( (time) => {
                            return <option key={time} value={time}>{time}</option>
                          })}
                        </select>
                    </div>
                    <span className="error-message">
                    {formik.touched.time && formik.errors.time}
                    </span>    
                </div>
                <button className="reserve-btn" type="submit">Reserve</button>

            </fieldset>



        </form>
    )
}


export default BookingForm