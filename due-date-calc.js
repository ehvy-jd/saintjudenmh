<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0," />
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="welcome.css" />
    <title>ST. JUDE NURSING AND MATERNITY HOME</title>
  </head>
  <body>
    <!-- Mini header -->
    <div id="scroll-header">
      <div class="logo-container"></div>
      <nav class="scroll-nav">
        <ul>
          <li>
            <a href="#landing">Top </a>
          </li>
          <li>
            <a href="#article-sect-1">Services </a>
          </li>
          <li>
            <a href="#apps-nav-link">Apps</a>
          </li>
          <li>
            <a href="#li-foot"> Contact </a>
          </li>
        </ul>
      </nav>
      <!-- Hamburger toggle button and dropdown menu -->
      <button id="nav-toggle">
        <span id="ham-one"></span><span id="ham-two"></span
        ><span id="ham-three"></span>
      </button>
      <div id="dropdown-nav">
        <nav class="drop-nav">
          <ul>
            <li>
              <a href="#landing">Top </a>
            </li>
            <li id="ham-nav-sv">
              <a href="#article-sect-1">Services</a>
            </li>
            <li id="ham-nav-ap">
              <a href="#apps-nav-link">Apps</a>
            </li>
            <li id="ham-nav-ct">
              <a href="#li-foot">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- Main header -->
    <header id="landing">
      <img
        class="st-jude"
        src="images/IMG-20220816-WA0013.jpg"
        alt="ST. JUDE"
      />
      <div class="rectangle-shape"></div>
      <div class="site-name">
        <h2>ST.</h2>
        <h2>JUDE</h2>
        <h2>NURSING</h2>
        <h2>AND</h2>
        <h2>MATERNITY HOME</h2>
      </div>
      <nav>
        <div>
          <button
            class="nav-button"
            onclick="window.location.href='#article-sect-1'"
          >
            Services
          </button>
        </div>
        <div>
          <button class="nav-button" onclick="window.location.href='#apps-nav-link'">
            Apps
          </button>
        </div>
        <div>
          <button class="nav-button" onclick="window.location.href='#li-foot'">
            Contact
          </button>
        </div>
      </nav>
    </header>
    <main id="main-body">
      <!-- banner -->
      <div id="banner">
        <h2 class="banner-note">
          "We provide care for all who walk through our door especially, the
          pregnant".
        </h2>
      </div>
      <!-- Photo slides -->
      <div class="slideshow-container">
        <div class="mySlides fade">
          <img src="images/main-image-2.jpg" class="img-preg" alt="An infant" />
        </div>

        <div class="mySlides fade">
          <img
            src="images/main-image-1.jpg"
            class="img-preg"
            alt="A pregnant lady"
          />
        </div>

        <div class="mySlides fade">
          <img
            src="images/main-image-3.jpg"
            class="img-preg"
            alt="A pregnant lady"
          />
        </div>

        <div class="mySlides fade">
          <img
            src="images/main-image-5.jpg"
            class="img-preg"
            alt="A pregnant lady"
          />
        </div>
      </div>
      <br />

      <div style="text-align: center">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <!-- Service section -->
      <div id="article-sect-1">
        <article class="intro-note">
          <h3>Services</h3>
          <hr />
          <ul>
            <li>Nursing and Maternity care</li>
            <hr />
            <li>Treatment of minor ailments</li>
            <hr />
            <li>First aid</li>
            <hr />
            <li>Suturing and Dressing of wounds</li>
            <hr />
            <li>Physical routine check-up and examination of vital signs</li>
            <hr />
            <li>Antenatal and Postnatal care</li>
            <hr />
            <li>Counseling</li>
            <hr />
            <li>Routine Urinalysis</li>
            <hr />
          </ul>
        </article>
      </div>
      <!-- To make the head of the app section come in to view when app nav button gets clicked  -->
        <p id="apps-nav-link"></p>
      <!-- Calculator App section -->
      <div id="apps-container">
        <h2 id="apps">Calculator App Section</h2>
        <div id="preg-due-date">
          <!-- Due date calculator -->
          <h3>Due Date Calculator</h3>
          <h4>Find out when your baby is due</h4>
          <label for="birthday" class="last-p"
            >First day of your last menstrual period</label
          >
          <br />
          <input type="date" id="lmp" name="lmp" min="2010-01-01" />
          <br />
          <button id="due-date-submit">Calculate</button>
          <div id="due-date-div">
            <p id="due-date-result"></p>
            <button id="due-date-reset">Reset</button>
          </div>
        </div>
        <!-- BMI calculator -->
        <div id="bmi-container">
          <div id="bmi-toggle">
            <h3>BMI CALCULATOR</h3>
            <label>Standard</label>
            <label class="bmi-switch"
              ><input type="checkbox" id="bmi-switch" />
              <span class="slider round"></span
            ></label>
            <label>Metric</label>
          </div>
          <div id="bmi-form-container-metric">
            <div class="bmi-form">
              <div>
                <h3>Metric</h3>
                <h4 class="bmi-divider">
                  Calculate your Body mass Index(<a
                    href="http://en.wikipedia.org/wiki/Body_mass_index"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="text-decoration: none"
                    >BMI</a
                  >) below.
                </h4>
              </div>
              <div class="bmi-labels">
                <label class="bmi-labels"> Body Weight in kilograms</label>
                <br />
                <input
                  type="number"
                  name="Weight"
                  id="weight"
                  placeholder="0.0"
                />
                <br />
                <label> Body Height in centimeters</label>
                <br />
                <input
                  type="number"
                  name="height"
                  id="height"
                  placeholder="0.0"
                />
                <br />
                <button id="bmi-submit">Calculate</button>
              </div>
              <div id="bmi-div">
                <p id="bmi-result"></p>
                <button id="bmi-reset">Reset</button>
              </div>
            </div>
          </div>
          <div id="bmi-form-container-standard">
            <div class="bmi-form">
              <div>
                <h3>Standard</h3>
                <h4 class="bmi-divider">
                  Calculate your Body mass Index(<a
                    href="http://en.wikipedia.org/wiki/Body_mass_index"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="text-decoration: none"
                    >BMI</a
                  >) below.
                </h4>
              </div>
              <div class="bmi-labels">
                <label class="bmi-labels"> Body Weight in pounds</label>
                <br />
                <input
                  type="number"
                  name="Weight"
                  id="weight-s"
                  placeholder="0.0"
                />
                <br />
                <label> Body Height in feet and inches</label>
                <br />
                <label>ft: </label>
                <input
                  type="number"
                  name="height"
                  id="height-ft-s"
                  placeholder="0"
                />
                <label>in: </label>
                <input
                  type="number"
                  name="height"
                  id="height-in-s"
                  placeholder="0"
                />
                <br />
                <button id="bmi-submit-s">Calculate</button>
              </div>
              <div id="bmi-div-s">
                <p id="bmi-result-s"></p>
                <button id="bmi-reset-s">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer -->
    <footer id="foot">
      <div id="notice">
        <h5>
          The Home is tempoarilly closed and under renovation.
          <button
            id="notice-button"
            onclick="remove(this.parentNode.parentNode); footHeight(document.getElementById('foot'))"
            title="Close notification"
          >
            Close
          </button>
        </h5>
      </div>
      <ul id="li-foot">
        <li class="contact-li">
          <h5>ADDRESS: 14 DBS Road Asaba, Delta State, Nigeria</h5>
        </li>
        <li class="contact-li"><h4>EMAIL: st.judenmh@gmail.com</h4></li>
        <li class="contact-li"><h4>PHONE: +234 803 490 7128</h4></li>
      </ul>
    </footer>
    <script src="main.js"></script>
    <script src="due-date-calc.js"></script>
    <script src="bmi.js"></script>
  </body>
</html>
