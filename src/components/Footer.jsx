import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer-top container">
          <div className="row">
            <div className="col-lg-3 footer-contact">
              <h3>Aligator IT Solutions</h3>
              <p>
                192.168.1.1 <br />
                New Delhi - 110001
                <br />
                India <br />
                <br />
                <strong>Phone:</strong> +91 1234567890
                <br />
                <strong>Email:</strong> aligatoritsolutions@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <a href="#about">About us</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <a href="#services">Services</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>
                  <a href="##">Terms of service</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>
                  <a href="##">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="##">Web Design</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>
                  <a href="##">Web Development</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>
                  <a href="##">Product Management</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="##">Marketing</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>
                  <a href="##">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap d-md-flex py-4">
            <div class="mr-md-auto text-center text-md-left">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Aligator IT Solutions</span>
                </strong>
                . All Rights Reserved
              </div>
              <div class="credits">
                Designed by <a href="##">Swaraj</a>
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="##" class="twitter">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="##" class="facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="##" class="instagram">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="##" class="google-plus">
                <i class="fa fa-google-plus"></i>
              </a>
              <a href="##" class="linkedin">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
