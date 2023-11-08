<footer>
<div className={classes.container}>
  <span className={classes.copyright}>
    <img src={Logo} alt='logo' className={classes.logo}/>
    <p>Copyright © 2023 Eazipay.</p>
    <p>All rights reserved</p>
    <icons className={classes.icons}>
      <span><i class='bx bxl-instagram'></i></span>
      <span><i class='bx bxl-twitter'></i></span>
      <span><i class='bx bxl-linkedin'></i></span>
      <span><i class='bx bxl-facebook'></i></span>
    </icons>
  </span>
  <div className={classes.footerFlex}>
    <span className={classes.span}>
      <h5>Product</h5>
      <NavLink to ={'#'}>Businesses</NavLink>
      <NavLink to ={'#'}>Request Demo</NavLink>
      <NavLink to ={'#'}>Pricing</NavLink>
      
    </span>
    <span className={classes.span}>
      <h5>Legal</h5>
      <NavLink to ={'#'}>Privacy Policy</NavLink>
      <NavLink to ={'#'}>Terms of Service</NavLink>
      
    </span>
    <span className={classes.span}>
      <h5>Resources</h5>
      <NavLink to ={'#'}>FAQs</NavLink>
      <NavLink to ={'#'}>Blog</NavLink>
      <NavLink to ={'#'}>Career</NavLink>
      <NavLink to ={'#'}>Customer Stories</NavLink>
      
    </span>
    <span className={classes.span}>
      <h5>Contact us</h5>
      <p>eazipay@gmail.com</p>
      <p>+234 816 878 9518</p>
      <p className={classes.emaildetails}>
        Your email address
        <i>icon</i>
      </p>
    </span>
  </div>
</div>
</footer>