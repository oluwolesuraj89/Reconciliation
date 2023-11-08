import React from 'react';
import classes from './Pricing.module.css'
import image from '../../Images/mockuppromix.png'
import arrowRight from '../../Images/arrow-right.png'
import Demo from '../../Images/Icon.png'
import Body from '../../Images/body-bg.png'
import Check from '../../Images/Check-icon.png'


function Pricing() {
        return (
                <div>
                        <div className={classes.pricingHero}>
                                <div className={classes.content}>
                                        <div>
                                                <button className={classes.pricebtn}>Pricing <img src={arrowRight} className={classes.arrowRight} alt="arrow-right" /></button>
                                        </div>
                                        <p className={classes.herotext}>Simple transparent pricing</p>
                                        <p className={classes.pherotext}>We believe Promix should be accessible to all<br></br>companies, no matter the size.</p>
                                        <div className={classes.lowrherobtn}>
                                                <button className={classes.demobtn}><img src={Demo} className={classes.Demo} alt="demo" />Demo</button>
                                                <button className={classes.signupbtn}>Signup</button>
                                        </div>
                                        <div><img src={image} className={classes.mockdp} alt="promixmockp" />
                                        </div>

                                </div>
                        </div>

                        <div>
                                <div>
                                        <img src={Body} className={classes.bodybg} alt="bodybg" />
                                </div>

                                <div className={classes.pricingcards}>
                                        <div className={classes.basic}>
                                                <h1 className={classes.myh1}>₦0/mth</h1>
                                                <p className={classes.myp} >Starter plan</p>
                                                <p className={classes.my2p} >Use Only For Personal.</p>
                                                <div className={classes.myhp}>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />1 Account</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />All Auto Match Features</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Manal Matching Features</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Reconciliation Report PDF</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Outstanding Items Report</p>
                                                </div>
                                                <button className={classes.mibtn}>Sign Up Free</button>
                                        </div>

                                        <div className={classes.basic}>
                                                <h1 className={classes.myh1}>₦5,000/mth</h1>
                                                <p className={classes.myp} >Standard plan</p>
                                                <p className={classes.my2p} >Use For Personal.</p>
                                                <div className={classes.myhp}>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />10 accounts</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />All Auto Match Features</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Manual Match</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Reconciliation</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Outstanding Items Report</p>
                                                </div>
                                                <button className={classes.mibtn}>Go For Standard</button>
                                        </div>

                                        <div className={classes.basic}>
                                                <h1 className={classes.myh1}>₦10,000/mth</h1>
                                                <p className={classes.myp} >Business plan</p>
                                                <p className={classes.my2p} >Use For Commercial.</p>
                                                <div className={classes.myhp}>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Unlimited accounts</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />All Auto Match Features</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Manual Matching Features</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Reconciliation Report in Excel and PDF</p>
                                                        <p className={classes.mysubp}><img src={Check} className={classes.Check} alt="Check-icon" />Outstanding Items Report</p>
                                                </div>
                                                <button className={classes.mibtn}>Go For Business</button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Pricing 