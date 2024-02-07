<template >
  <div class="home">
    <section><br><br><br><br><br>
      <div class="container-fluid">
        <div class="row"> 

         
          <div class="mt-lg-0">
          <img class="" src="/assets/principal.jpg" alt="" style="width: 90%; margin-left: 4%;" >
          
          </div>
          
        </div>
      </div>
    </section>
    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="" style="font-family:Syne;">Latest Listings</h2>
            <p class="lead text-dark" style="font-family:Inter;">Find the most appropriate residence for you to live in</p>
          </div>
        </div>
        <div class="row" v-if="load_nuevos_productos">
            <div class="col-12 text-center">
              <img src="/assets/media/idea.gif" alt="" style="width: 80px">
            </div>
        </div>
       <!-- <div class="row"  v-if="!load_nuevos_productos">   margin-left: 5%; border-radius: 6px; transition: all 400ms ease; box-shadow: 0px 3px 5px rgba(15, 15, 15, .5);"
          <b-col cols="6" md="4">
            <b-card 
            v-for="item in nuevos_productos">
              <router-link :to="{name: 'show-producto', params:{slug:item.slug}}">
              <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>
                <img class="img-fluid" :src="$url+'/obtener_portada_producto/'+item.portada" alt="product"/>
                <div class="product-hover-overlay">
                  <a class="product-hover-overlay-link" href="detail.html"></a>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">{{item.categoria}}</p>
                <h3 class="h6 text-uppercase mb-1">
                  <a class="text-dark" href="detail.html">{{item.titulo}}</a>
                </h3>
                <span class="text-muted">{{convertCurrency(item.precio)}}</span>
              </div>
            </div>
            </router-link>
            </b-card>
          </b-col>
        </div><!col-lg-3 col-md-1 col-1 color:black
       <div class="">
                  <a class="" href="detail.html"></a>
                </div>-->



                
        <div class="row" v-if="!load_nuevos_productos">
        
          <div class="col-lg-3 col-md-4 col-9"  v-for="item in nuevos_productos">
             <router-link :to="{name: 'show-producto', params:{slug:item.slug}}" style="text-decoration: none; color:#ff9900; font-family:Inter;">
              <div class="product" style="border-radius: 0px 0px 3px 3px !important;
                 text-align: center !important;
                 background-color: #ffffff !important;
                 cursor: default !important;
                 transition: all 400ms ease !important;
                 box-shadow: 0px 3px 5px rgba(251, 168, 2, 0.5)!important;
                 padding-bottom: 30px !important; ">
              <div class="product-image" style="height: 250px !important;">
                
                <img class="img-fluid" style="height: 250px !important; display: block !important; border-radius: 0px 0px 0px 0px !important;" :src="$url+'/obtener_portada_producto/'+item.portada" alt="productos"/>
                
              </div>
              <div class="py-2"> <br>
                <p class="">{{item.categoria}}</p><br>
                <h3 class="h6 text-uppercase mb-1">
                 {{item.titulo}}
                </h3><br>
                <span class="">{{convertCurrency(item.precio)}}</span>
              </div>
            </div>
            </router-link>
            
          </div>
          
        
        </div>
      </div>
    </section>
    <!--<section class="py-6 bg-gray-100"> h6 text-uppercase mb-1 text-muted text-sm mb-1class="dark" href="detail.html">  <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>product-hover-overlay product-hover-overlay-link
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2>Colecciòn primavera</h2>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-md-stretch mb-4 mb-md-0">
            <div class="d-flex align-items-center text-white dark-overlay w-100 text-center py-6 py-md-0" style="background: center center url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/nordwood-themes-481980-unsplash-square.jpg) no-repeat; background-size: cover;"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay w-100 overlay-content">
                <h2 class="display-2 fw-bold text-uppercase mb-0">Hombres </h2>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 text-white text-center mb-4 dark-overlay"> <img class="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/malvestida-magazine-458585-unsplash.jpg" alt="Ladies"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">Mujeres                                               </h2>
                </div>
              </div>
            </div>
            <div class="card border-0 text-white text-center  dark-overlay"> <img class="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/heather-schwartz-528936-unsplash.jpg" alt="Accessories"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">Accesorios                                           </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dark-overlay py-7 d-flex align-items-center justify-content-center"><img class="bg-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/photo-1534126511673-b6899657816a.jpg" alt="">
      <div class="overlay-content w-100">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 text-white">
              <h6 class="text-uppercase text-white letter-spacing-5 mb-3"> About us</h6>
              <h1 class="display-3 fw-bold text-shadow mb-5">We are Sell</h1>
              <p class="text-lg">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
            </div>
          </div>
        </div>
      </div>
    </section>display: block !important;
  overflow: hidden !important;height: 320px !important;
 vertical-align: middle !important;-->
  </div>
</template>

<style>


.col-9{
display: flex;
align-items: center;
text-align: center;
margin: auto;
}
.py-2  {
  text-decoration: none;
  color: black;
}
.py-2 h3{
  color:black;
  font-size: 15px;
  font-family:Inter;
}
.py-2 p{
  text-decoration: none;
  color:#ff9900;
  font-size: 20px;
  font-family:Inter;
}
.py-2 span{
  color:rgb(51, 50, 50);
  font-size: 17px;
  
}

.product:hover{
    box-shadow: 5px 5px 20px rgba(150, 100, 0, .4)!important;
    transform: translateY(-3%);
  }


</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import currency_formatter from 'currency-formatter';
import { init_carousel } from '../../public/assets/js/theme.d7b4a888';
 
export default {
  name: 'HomeView',
  data() {
    return {
        nuevos_productos : [],
        load_nuevos_productos: true,

        productos_recomendados : [],
        load_productos_recomendados: true,
    }
  },
  methods: {
    init_nuevos_productos(){
      this.load_nuevos_productos = true;
      axios.get(this.$url+'/obtener_nuevos_productos',{
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((result)=>{
        this.nuevos_productos = result.data;
        this.load_nuevos_productos = false;
        console.log(this.nuevos_productos);
      });
    },
    init_productos_recomendados(){
      this.load_nuevos_productos = true;
      axios.get(this.$url+'/obtener_productos_recomendados',{
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((result)=>{
        this.productos_recomendados = result.data;
        this.load_productos_recomendados = false;
        console.log(this.productos_recomendados);
      });
    },
    convertCurrency(number){
        return currency_formatter.format(number, { code: 'USD' });
    }
  },
  components: {
    HelloWorld
  },
  beforeMount() {
    this.init_nuevos_productos();
    this.init_productos_recomendados();
    init_carousel.init();
  },
}
</script>
