import React, {useState, useEffect} from 'react'
import classes from './Landingpage.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/Logo.png';
import { Button } from 'bootstrap';
import HeaderImg from '../../Images/SideImg.png';
import Syn from '../../Images/Syn.png';
import Brand1 from '../../Images/Brand1.png';
import Brand2 from '../../Images/Brand2.png';
import Brand3 from '../../Images/Brand3.png';
import Brand4 from '../../Images/Brand4.png';
import Brand5 from '../../Images/Brand5.png';
import Email from '../../Images/Email.png';
import Power from '../../Images/Power.png';
import Terminal from '../../Images/Terminal.png';
import FeatureImg from '../../Images/FeatureImg.png';
import ProfileImg from '../../Images/ProfileImg.png';
import Feature2 from '../../Images/Feature2icon.png';
import Feature2icon from '../../Images/Feature2icon2.png';
import GroupedBackground from '../../Images/GroupedBackground.png';
import wrappingLing1 from '../../Images/wrapingLine1.png';
import wrappingLing2 from '../../Images/wrappingLine2.png';

// import HeaderDots from '../../Images/HeaderDots.png';

function Landingpage() {
    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);

    const toggle1 = (i) => {
      if (selected1 === i) {
          setSelected1(null);
      } else {
          setSelected1(i);
      }
  };

  // const toggle2 = (i) => {
  //     if (selected2 === i) {
  //         setSelected2(null);
  //     } else {
  //         setSelected2(i);
  //     }
  // };


  return (
    <div className={classes.body}>
        <div className={classes.main}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <NavLink to={'/'} className="navbar-brand" href="#"><img src={Logo}/></NavLink>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#">AboutUs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" href="#">product</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" >Pricing</NavLink>
                  </li>
                  <button type="button" className="btn "><NavLink className="nav-link disabled" aria-disabled="true">Sign Up</NavLink></button>          
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className={classes.header}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <h1><span>Promix</span> reconciliation system</h1>
                <p>Unlock Seamless Financial Control with Our Automatic Reconciliation System</p>
                <div className={classes.groupbtns }>
                  <button className={classes.demo}><i class='bx bx-play-circle'></i> Demo </button>
                  <button className={classes.signUp}>Sign Up</button>
                </div>
              </div>
              <div className="col-sm">
                <div className={classes.headerImg}>
                  <img src={HeaderImg} alt='HeaderImg'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.brand}>
          <p>Join 4,000+ companies already growing</p>
          {/* <div className='containter-fluid '> */}
            <div className={classes.BrandsContainer}>
            
              {/* <div className={classes.BrandsContainer}> */}
              <div className="col">
                <div className={classes.mainBrands}>
                  <img src={Brand1} alt='Brand1'/>
                  {/* <h6>Layer</h6> */}
                </div>
              </div>

              <div className="col">
                <div className={classes.mainBrands}>
                  <img src={Brand2} alt='Brand2'/>
                  {/* <h6>Sysphus</h6> */}
                </div>
              </div>
              <div className="col">
                <div className={classes.mainBrands}>
                  <img src={Brand3} alt='Brand3'/>
                  {/* <h6>Circools</h6> */}
                </div>
              </div>
              <div className="col">
                <div className={classes.mainBrands}>
                  <img src={Brand4} alt='Brand4'/>
                  {/* <h6>Catalog</h6> */}
                </div>
              </div>
              <div className="col">
                <div className={classes.mainBrands}>
                  <img src={Brand5} alt='Brand5'/>
                  {/* <h6>Quotient</h6> */}
                </div>
              </div>
              {/* </div> */}
            {/* </div> */}
          </div>
              
        </div>
        <div className={classes.main}>
          <div className={classes.reconLgAcct}>
            <h3>Rconcile large Accounts in less than 5 minutes</h3>
            <p>Welcome to the future of account reconciliation management! Our Automatic Reconciliation System empowers businesses of all sizes to take control of their reconciliation effortlessly. Say goodbye to tedious manual reconciliation processes and hello to precision, efficiency, and peace of mind.</p>
          </div>
        </div>
        <div className={classes.section4}>
          <div className={classes.main}>
            <h3>THIS APPLICATION IS FOR YOU IF YOUR ANSWER TO THESE QUESTIONS IS YES.</h3>
            <div className={classes.appForYouContent}>
              <div>
                <img src={Email} alt='Email'/>
                <span>
                  <h5>Wasting Time</h5>
                  <p>Are you tired of spending countless hours reconciling accounts?</p>
                </span>
              </div>
              <div>
                <img src={Power} alt='Power'/>
                <span>
                  <h5>Costly Errors</h5>
                  <p>Worried about costly errors that can affect your bottom line?</p>
                </span>
              </div>
              <div>
                <img src={Terminal} alt='Terminal'/>
                <span>
                  <h5>Wanting Accuracy</h5>
                  <p>Seeking a solution that streamlines your reconciliation operations and enhances accuracy?</p>
                </span>
              </div>
            </div>
            <div className={classes.groupbtns}>
              <button className={classes.demo}><i class='bx bx-play-circle'></i> Demo </button>
              <button className={classes.signUp}>Sign Up</button>
            </div>
          </div>
        </div>
        <div className={classes.section5}>
          <div className={classes.main}>
            <h3>Why YOU NEED PROMIX RECONCILIATION SYSTEM.</h3>
            <div className={classes.resonForRecon}>
              <div className={classes.resonForReonContents}>
                <span>
                  <label className={classes.label1}>1</label>
                  <h6>Save Time</h6>
                  <p>Free up your team to focus on strategic tasks instead of manual data entry.</p>
                </span>
                <span >
                  <label className={classes.label2}>2</label>
                  <h6>Increase Accuracy</h6>
                  <p>Avoid costly errors and discrepancies that can harm your financial health.</p>
                </span>
                <span>
                  <label className={classes.label3}>3</label>
                  <h6>Boost Efficiency</h6>
                  <p>Automate the reconciliation process and complete it in a fraction of the time.</p>
                </span>
                <span>
                  <label className={classes.label4}>4</label>
                  <h6>Gain Insights</h6>
                  <p>Access real-time reports and analytics for informed decision-making.</p>
                </span>
                <img src={wrappingLing1} alt='wrapping' className={classes.Image1}/>
                <img src={wrappingLing2} alt='wrapping' className={classes.Image2}/>
                <img src={wrappingLing1} alt='wrapping' className={classes.Image3}/>
              </div>
              <div className={classes.resonForReonContentsImg}>
                <img src={FeatureImg} alt='FeatureImg'/>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section6}>
          <div className="container-fluid main">
           <div className={classes.mainBrands}>
              <img src={Syn} alt='Syn'/>
              <h6>Sysphus</h6>
            </div>
            <h1>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
            <div className={classes.profileImg}>
              <img src={ProfileImg} alt='ProfileImg'/>
            </div>
            <h6>Candice Wu</h6>
            <p>Product Manager, Sisyphus</p>
          </div>
        </div>
        <div className={classes.section7}>
          <div className="container-fluid main">
            <h6>Features</h6>
            <h2>WHAT MAKES PROMIX RECONCILIATION SYSTEM SPECIAL?</h2>
            <p>Our pricing is flexible and tailored to your business size. Get in touch for a personalized quote, or try our system for free with a 30-day trial!</p>
            <div className={classes.features}>
              <div className={classes.firstFeatures}>
                <div className={classes.FeaturesCont1}>
                  <span>
                    <img src={Email} alt='Email'/>
                    <h6>Automated Reconciliation</h6>
                    <p>Say goodbye to manual data entry and human errors</p>
                  </span>
                  <span>
                    <img src={Power} alt='Power'/>
                    <h6>Real-time Reporting</h6>
                    <p>Access up-to-the-minute financial insights.</p>
                  </span>
                  <span>
                    <img src={Terminal} alt='Terminal'/>
                    <h6>Customization</h6>
                    <p>Tailor the system to your unique business needs.</p>
                  </span>
                </div>
                <div className={classes.FeaturesCont2}>
                  <span>
                    <img src={Feature2} alt='Feature2'/>
                    <h6>Security</h6>
                    <p>Rest assured with robust data protection and encryption.</p>
                  </span>
                  <span>
                    <img src={Feature2icon} alt='Feature2icon'/>
                    <h6>24/7 Support</h6>
                    <p> Our team is here to assist you whenever you need it.</p>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={classes.section8}>
          <div className={classes.FAQs}>
            <h3>Frequently asked questions</h3>
            <p>Everything you need to know about the product and billing.</p>
            <div className='faq-cont'>
              <h1>Frequently Asked Questions</h1>
              <div className='questions-cont'>
                  <div className='accordion'>
                      {data1.map((items, i) => (
                          <div className='items' onClick={() => toggle1(i)}>
                              <div className='accordion-title'>
                                  <h4>{items.question}</h4>
                                  <span>{selected1 === i ? <i className='bx bx-minus-circle'></i> : <i className='bx bx-plus-circle'></i>}</span>
                              </div>
                              <div className={selected1 === i ? 'content.show' : 'content'}>
                                  {items.answer}
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
            </div>
            <div className={classes.moreQuestions}>
              <div className={classes.imgGroup}>
                <div className={classes.profileImg}>
                  <img src={ProfileImg} alt='ProfileImg'/>
                </div>
                <div className={classes.profileImg}>
                  <img src={ProfileImg} alt='ProfileImg'/>
                </div>
                <div className={classes.profileImg}>
                  <img src={ProfileImg} alt='ProfileImg'/>
                </div>
              </div>
               <h6>Still have questions?</h6>
               <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
               <button type="button" className="btn" id='SignUp'>Get in touch</button>
            </div>
          </div>
        </div>
        <div className={classes.section9}>
          <div className={classes.main}>
            <h3>START A FREE TRIAL TODAY!</h3>
            <p>Unlock the potential of your financial control with our Automatic Reconciliation System. Say goodbye to manual reconciliation headaches and hello to a more efficient and accurate financial future. Start your journey to financial accuracy today!</p>        
            <button type="button" className="btn" id='SignUp'>Get in touch</button>
            <button type="button" className="btn" id='SignUp'>Get in touch</button>
          </div>
        </div>
        <footer>
          <div className={classes.container}>
            <span>
              <img src={Logo} alt='logo'/>
              <p>Copyright © 2023 Eazipay.</p>
              <p>All rights reserved</p>
              <icons>
                <i>fa</i>
                <i>fa</i>
                <i>fa</i>
                <i>fa</i>
              </icons>
            </span>
            <div className={classes.footerFlex}>
              <span>
                <h5>Product</h5>
                <p>Businesses</p>
                <p>Request Demo</p>
                <p>Pricing</p>
              </span>
              <span>
                <h5>Legal</h5>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </span>
              <span>
                <h5>Resources</h5>
                <p>FAQs</p>
                <p>Blog</p>
                <p>Career</p>
                <p>Customer Stories</p>
              </span>
              <span>
                <h5>Contact us</h5>
                <p>eazipay@gmail.com</p>
                <p>+234 816 878 9518</p>
                <p>
                  Your email address
                  <i>icon</i>
                </p>
              </span>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default Landingpage


const data1 = [
  {
      question: 'HOW THE SYSTEM WORKS',
      answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
      question: 'Can I change my plan later?',
      answer: 'Gateway Trading Company has secured an office at the Tech Hub building located at Kobape, Abeokuta-Sagamu expressway to support its administrative operations.',
  },
  {
      question: 'What is your cancellation policy?',
      answer: 'Gateway Trading Company has secured an office at the Tech Hub building located at Kobape, Abeokuta-Sagamu expressway to support its administrative operations.',
  },
  {
      question: 'Can other info be added to an invoice?',
      answer: 'Gateway Trading Company has secured an office at the Tech Hub building located at Kobape, Abeokuta-Sagamu expressway to support its administrative operations.',
  },
  {
      question: 'How does billing work?',
      answer: 'Gateway Trading Company has secured an office at the Tech Hub building located at Kobape, Abeokuta-Sagamu expressway to support its administrative operations.',
  },
  {
      question: 'How do I change my account email?',
      answer: 'Gateway Trading Company has secured an office at the Tech Hub building located at Kobape, Abeokuta-Sagamu expressway to support its administrative operations.',
  },
];

// const data2 = [
//   {
//       question: 'Question 3',
//       answer: 'Gateway Trading Company has secured an office at the Tech Hub building located at Kobape, Abeokuta-Sagamu expressway to support its administrative operations.',
//   },
//   {
//       question: 'Question 4',
//       answer: 'Gateway Trading Company has secured an office at the Tech Hub building located at Kobape, Abeokuta-Sagamu expressway to support its administrative operations.',
//   },
// ];
