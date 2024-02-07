<template>
     <footer class="main-footer">
      <!-- Services block-->
      <div class="text-dark-700 py-6" style="background: #ffffff;">
        <div class="container">
          <div class="row">
           <!-- <div class="col-lg-4 service-column">
               <svg class="svg-icon service-icon">
                <use xlink:href="#delivery-time-1"> </use>
              </svg> 
              <img class="svg-icon service-icon" src="/assets/camion.gif" alt="">
              <div class="service-text">
                <h6 class="text-uppercase">Free shipping &amp; return</h6>
                <p class="text-muted fw-light text-sm mb-0">Free Shipping over $300</p>
              </div>
            </div>-->
            <div class="col-lg-6 service-column">
              <img class="svg-icon service-icon" src="/assets/media/euro.png" alt="">
              <div class="service-text">
                <h6 class="text-uppercase">Affordable Rates</h6>
                <p class="text-muted fw-light text-sm mb-0">Best Quotes</p>
              </div>
            </div>
            <div class="col-lg-6 service-column">
              <img class="svg-icon service-icon" src="/assets/media/usuario.png" alt="">
              <div class="service-text">
                <h6 class="text-uppercase">020-800-456-747</h6>
                <p class="text-muted fw-light text-sm mb-0">Av. Del Valle 1372</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Main block - menus, subscribe form-->
      <div class="py-6 text-muted" style="    background-color: #000000 !important;"> 
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0"> <img class="" src="/assets/real estate logo blanco.png" alt="" style="width: 40%" >
             <!-- <div class="fw-bold text-uppercase text-lg text-white mb-3">Sell<span style="color:white">.</span></div><!-->
              <p class="text-white"></p>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="text-muted text-primary-hover" href="https://www.flaticon.es/uicons?word=facebook" target="_blank" title="Facebook">
                    <img src="/assets/media/facebook.png" style="width:20px">
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted text-primary-hover" href="https://www.flaticon.es/uicons?word=facebook" target="_blank" title="Twitter">
                    <img src="/assets/media/whatsapp.png" style="width:20px">
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted text-primary-hover" href="https://www.flaticon.es/uicons?word=facebook" target="_blank" title="Instagram">
                    <img src="/assets/media/instagram.png" style="width:20px">
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <h6 class="text-uppercase text-white mb-3">Search</h6>
              <ul class="list-unstyled">
                <li> <a class="text-white" href="http://localhost:8081">Home</a></li>
                <li> <a class="text-white" href="http://localhost:8081/shop">Properties</a></li>
                <li> <a class="text-white" href="http://localhost:8081/about">About Us</a></li>
                <li> <a class="text-white" href="http://localhost:8081/contact">Contact</a></li>
                
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-0">
              <h6 class="text-uppercase text-white mb-3">Support</h6>
              <ul class="list-unstyled">
                <li class="text-white">3446 326289                 </li>
                <li class="text-white"> omarbustos2013@gmail.com                    </li>
                <li class="text-white"> AV. Del Valle 1372         </li>
                <li class="text-white"> 9 am - 5pm Mon - Fri</li>
                
              </ul>
            </div>
            
             <!-- <form action="#" id="newsletter-form">
                <div class="input-group mb-3">
                  <input class="form-control bg-transparent border-secondary border-end-0" type="email" placeholder="Your Email Address" aria-label="Your Email Address" style="    border-color: #ffffff !important;color:white !important">
                  <div class="input-group-append" >
                    <button class="btn border-start-0" type="submit" style="    border-color: #ffffff !important;">
                      <img src="/assets/media/search.png" style="width: 18px" alt="">
                    </button>
                  </div>
                </div>
              </form>-->

            
          </div>
          
        </div> 
          
      </div>
       
      <div class="py-2 fw-light text-gray-300" style="background-color: #000000 !important; margin-top: -80px;">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center text-md-start">
              <p class="mb-md-0">&copy; {{year}} Homely.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
