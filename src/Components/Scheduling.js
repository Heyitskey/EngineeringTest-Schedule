import React from 'react'
import { Helmet } from 'react-helmet'
export const Scheduling = () => {
    return (
        <div>
            <Helmet>

                {/* <!-- Stylesheet --> */}
                <link href="css/style.css" rel="stylesheet" />

                {/* <!-- Customized Bootstrap Stylesheet --> */}
                <link href="css/bootstrap.min.css" rel="stylesheet" />

                {/* <!-- Javascript --> */}
                <script src="js/main.js"></script>
            </Helmet>
            <div class="formbold-main-wrapper">

                <div class="formbold-form-wrapper">
                    <form action="https://631945908e51a64d2be10770.mockapi.io/api/v1/products" method="POST">
                        <div class="formbold-steps">
                            <div>
                                <h1 class="formbold-form-label1">Schedule Your Service</h1>
                            </div>

                            <ul>
                                <li class="formbold-step-menu1 active">
                                    <span>1</span>
                                    Recurring
                                </li>
                                <li class="formbold-step-menu2">
                                    <span>2</span>
                                    One Time
                                </li>
                                <li class="formbold-step-menu3">
                                    <span>3</span>
                                    Flexible
                                </li>
                            </ul>
                        </div>

                        <div class="formbold-form-step-1 active">
                            <div class="formbold-input-flex">
                                <div>
                                    <label for="firstname" class="formbold-form-label"> Hours </label>

                                    <select class="formbold-form-input" placeholder="Select Hours"
                                        id="hours">

                                        <option>2 Hours</option>
                                        <option>4 Hours</option>
                                        <option>6 Hours</option>
                                        <option>8 Hours</option>
                                        <option>10 Hours</option>

                                    </select>
                                </div>
                                <div>
                                    <label for="lastname" class="formbold-form-label"> Occurrence </label>

                                    <select class="formbold-form-input" placeholder="Select Occurrence"
                                        id="Occurrence">

                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>

                                    </select>
                                </div>
                            </div>

                            <div class="formbold-input-flex">
                                <div>
                                    <label for="date" class="formbold-form-label"> Start Date  </label>
                                    <input
                                        type="datetime-local"
                                        name="date"
                                        id="date"
                                        class="formbold-form-input"
                                    />
                                </div>
                                <div>
                                    <label for="timeslot" class="formbold-form-label"> Time Slot </label>


                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" name='Shift' value="morning" id="morning" />
                                        <label class="form-check-label" for="morning" >Morning</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" name='Shift' value="afternoon" id="afternoon" />
                                        <label class="form-check-label" for="afternoon" >Afternoon</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" name='Shift' value="evening" id="evening" />
                                        <label class="form-check-label" for="evening" >Evening</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" name='Shift' value="night" id="night" />
                                        <label class="form-check-label" for="night">Night</label>
                                    </div>


                                </div>
                            </div>

                            
                        </div>

                        <div class="formbold-form-step-2">

                            <div>
                                <label for="firstname" class="formbold-form-label"> Hours </label>

                                <select class="formbold-form-input" placeholder="Select Hours"
                                    id="hours">

                                    <option>2 Hours</option>
                                    <option>4 Hours</option>
                                    <option>6 Hours</option>
                                    <option>8 Hours</option>
                                    <option>10 Hours</option>

                                </select>
                            </div>

                            <div>
                                <label for="Date" class="formbold-form-label"> Start Date  </label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    id="date"
                                    class="formbold-form-input"
                                />
                            </div>
                        </div>

                        <div class="formbold-form-step-3">
                            <div>
                                <label for="firstname" class="formbold-form-label"> Hours </label>

                                <select class="formbold-form-input" placeholder="Select Hours"
                                    id="hours">

                                    <option>2 Hours</option>
                                    <option>4 Hours</option>
                                    <option>6 Hours</option>
                                    <option>8 Hours</option>
                                    <option>10 Hours</option>

                                </select>
                            </div>

                            <div>
                                <label for="date" class="formbold-form-label"> Start Date  </label>
                                <input
                                    type="datetime-local"
                                    name="date"
                                    id="date"
                                    class="formbold-form-input"
                                />
                            </div>

                            <div>
                                <label for="timeslot" class="formbold-form-label"> Time Slot </label>


                                <div class="form-check">
                                    <input type="radio" class="form-check-input" name='Shift' value="morning" id="morning" />
                                    <label class="form-check-label" for="morning" >Morning</label>
                                </div>

                                <div class="form-check">
                                    <input type="radio" class="form-check-input" name='Shift' value="afternoon" id="afternoon" />
                                    <label class="form-check-label" for="afternoon" >Afternoon</label>
                                </div>

                                <div class="form-check">
                                    <input type="radio" class="form-check-input" name='Shift' value="evening" id="evening" />
                                    <label class="form-check-label" for="evening" >Evening</label>
                                </div>

                                <div class="form-check">
                                    <input type="radio" class="form-check-input" name='Shift' value="night" id="night" />
                                    <label class="form-check-label" for="night">Night</label>
                                </div>


                            </div>

                        </div>

                        <div class="formbold-form-btn-wrapper">
                            <button class="formbold-back-btn">
                                Back
                            </button>

                            <button class="formbold-btn">
                                Next Step
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1675_1807)">
                                        <path d="M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1675_1807">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}
