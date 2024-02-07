<template>
    <div style="background: #ffffff;" class="pb-5">
        <section class="hero" style="margin-top: 5rem !important;">
            <div class="container">
               

                <div class="hero-content pb-5 text-center"><br><br><br><br>
                <h1 class="" style="font-family:Syne;">Contact Us</h1> <br><br>
          <section style="background: #ffffff; padding: 3%; border-radius: 4px; transition: all 400ms ease; box-shadow: 0px 3px 5px rgba(15, 15, 15, .5);">      
                <div class="container-form" >
                    <div class="conta-form">
          
                       <p class="lead text-dark" style="text-align: left; font-family:Inter;">We're here to help you find your dream home. Speak to our team today!</p>
          

                       <a href="#"> <img  src="/assets/media/llamar.png" alt="" style="width:30px"> 020-800-456-747</a>
                       <a href="#"><img  src="/assets/media/correo-electronico.png" alt="" style="width:30px"> omarbustos2013@gmail.com</a>
                       <a href="#"><img  src="/assets/media/ubicacion.png" alt="" style="width:30px"> Gualeguaychú, Del Valle 1372</a>
                       <a href="#"><img  src="/assets/media/calendario.png" alt="" style="width:30px"> 9 am - 5pm Mon - Fri</a>
                     </div>
                    <form action="https://formsubmit.co//omarbustos2013@gmail.com" method="POST">
                      <input type="text" name="nombre" placeholder="Your Name" class="campo">
                      <input type="emal" name="email" placeholder="Your Email" class="campo">
                      <input type="text" name="mensaje" placeholder="Your Message" class="campomayor">
                      <input class="btn-enviar" type="submit"  value="Send">

                      <input type="hidden" name="_next" value="https://realestateomaryari.netlify.app/">
                      <input type="hidden" name="_captcha" value="false">
                    </form> 
      
                </div>
              </section>

                </div>
                
            </div>
        </section>
        <section class="hero" style="margin-top: 8rem !important;">
            <div class="container" >
            <GoogleMap :latitude= 13.7013266 :longitude= -89.226622 :title="'Titulo Marcador'" />
    
                  

               </div>
         </section>
       
    
    </div>
  
    
       
       
</template>

  <script>
  
    


import GoogleMap from "../components/GoogleMap.vue";

export default{
components:{
  
  GoogleMap
 }
};

  </script>





  
<style>
  
.container-form{
  width: 80%;
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 50px;
  margin-top: 90px;
  margin-bottom: 40px;
}
.container-form h2{
  font-family: Cardo;
    font-size: 40px;
    color: rgb(134, 4, 4);
  margin-bottom: 15px;
 
}
.container-form p{
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 30px;
}
.container-form a{
  font-size: 17px;
  display: inline-block;
  text-decoration: none;
  width: 100%;
  margin-bottom: 15px;
  color: black;
  font-weight: 700;
  text-align: justify;
}
.container-form a i{
  color: rgb(170, 7, 7);
  margin-right: 10px;
}
.container-form form .campo{
  width: 100%;
  padding: 15px 10px;
  font-size: 16px;
  border: 1px solid #dbdbdb;
  margin-bottom: 20px;
  border-radius: 3px;
  outline: 0px;
}
.container-form form .campomayor{
  
  
  width: 100%;
  
  padding: 15px 10px 100px;
  font-size: 16px;
  border: 1px solid #dbdbdb;
  margin-bottom: 20px;
  border-radius: 3px;
  outline: 0px;
}

.container-form .btn-enviar{
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  border: none;
  outline: 0px;
  background: #ff9900;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: all 300ms ease;
}
.container-form .btn-enviar:hover{
  background: #ff9900d4;
}


@media (max-width: 500px) {
  .container-form{
    margin: 0 auto;
     flex-direction:column;
     width: 90vw; 
    margin-bottom: 30px;
  }
  .container-form p{
    font-size: 15px;
    width: 90vw;
  }

  .container-form form {
    margin-left: -390px; 
      width: 70vw;
    
    
    align-items:center;
    text-align:left;
    
    
    padding-top: 350px;
      flex-direction:column;
      
  }}
</style>
  