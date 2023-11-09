import React from "react";
import classes from './SignUp.module.css'



function Signup() {
    return (
        <div>
            <div className={classes.signupHero}>
                <div className={classes.content}>
                    <p className={classes.herotext}>Sign up</p>
                    <p className={classes.pherotext}>We believe Promix should be accessible<br></br>to all companies, no matter the size..</p>
                    <div className={classes.theinputs}>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>

                    </div>
                    <div className={classes.theinputs}  >
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>

                    </div>
                    <div className={classes.theinputs}>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>

                    </div>
                    <div className={classes.theinputs}>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>

                    </div>
                    <div className={classes.theinputs}>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>
                        <div className={classes.inputfield}>
                            <label htmlFor="myInput" className={classes.label}>Full Name</label> <br></br>
                            <input type="text" className={classes.myinput} placeholder="Enter your full name" />
                        </div>

                    </div>
                <button className={classes.prcdbtn}>Proceed to payment</button>
                </div>
        </div>
            </div>

    )
}

export default Signup 