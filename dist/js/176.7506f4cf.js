"use strict";(self["webpackChunktienda"]=self["webpackChunktienda"]||[]).push([[176],{9176:function(t,a,s){s.r(a),s.d(a,{default:function(){return v}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"pb-5",staticStyle:{background:"#f3f3f3"}},[a("section",{staticClass:"hero",staticStyle:{"margin-top":"8rem !important"}},[a("div",{staticClass:"container"},[a("ol",{staticClass:"breadcrumb justify-content-center"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"breadcrumb-item active"},[t._v("Carrito")])]),t._m(0)])]),a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"cart"},[a("div",{staticClass:"cart-wrapper"},[t._m(1),t.load_data?t._e():a("div",{staticClass:"cart-body",staticStyle:{background:"white !important"}},t._l(t.carrito,(function(s){return a("div",{staticClass:"cart-item"},[a("div",{staticClass:"row d-flex align-items-center text-center"},[a("div",{staticClass:"col-5"},[a("div",{staticClass:"d-flex align-items-center"},[a("router-link",{attrs:{to:{name:"show-producto",params:{slug:s.producto.slug}}}},[a("img",{staticClass:"cart-item-img",attrs:{src:t.$url+"/obtener_portada_producto/"+s.producto.portada,alt:"..."}})]),a("div",{staticClass:"cart-title text-start"},[a("router-link",{staticClass:"text-uppercase text-dark",attrs:{to:{name:"show-producto",params:{slug:s.producto.slug}}}},[a("strong",[t._v(t._s(s.producto.titulo.substr(0,20))+"...")])]),a("br"),a("span",{staticClass:"text-muted text-sm"},[t._v(t._s(s.producto.str_variedad)+": "+t._s(s.variedad.variedad))])],1)],1)]),a("div",{staticClass:"col-2"},[t._v(t._s(t.convertCurrency(s.producto.precio)))]),a("div",{staticClass:"col-2"},[t._v(" "+t._s(s.cantidad)+" ")]),a("div",{staticClass:"col-2 text-center"},[t._v(t._s(t.convertCurrency(s.producto.precio*s.cantidad)))]),a("div",{staticClass:"col-1 text-center"},[a("a",{staticClass:"cart-remove",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.eliminar(s._id)}}},[a("img",{staticStyle:{width:"18px"},attrs:{src:"/assets/media/close.png"}})])])])])})),0),t.load_data?a("div",{staticClass:"card-body",staticStyle:{background:"white !important"}},[t._m(2)]):t._e()])]),a("div",{staticClass:"my-5 d-flex justify-content-between flex-column flex-lg-row"},[a("router-link",{staticClass:"btn btn-link text-muted",attrs:{to:"/shop"}},[t._v(" Continuar comprando")]),a("router-link",{staticClass:"btn btn-dark",attrs:{to:"/checkout"}},[t._v("Checkout "),a("i",{staticClass:"fa fa-chevron-right"})])],1)]),a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"block mb-5"},[t._m(3),a("div",{staticClass:"block-body bg-light pt-1"},[a("p",{staticClass:"text-sm"},[t._v("Shipping and additional costs are calculated based on values you have entered.")]),a("ul",{staticClass:"order-summary mb-0 list-unstyled"},[a("li",{staticClass:"order-summary-item"},[a("span",[t._v("Subtotal ")]),a("span",[t._v(t._s(t.convertCurrency(t.total)))])]),a("li",{staticClass:"order-summary-item"},[a("span",[t._v("Envio")]),a("span",[t._v(t._s(t.convertCurrency(t.$envio)))])]),a("li",{staticClass:"order-summary-item border-0"},[a("span",[t._v("Total")]),a("strong",{staticClass:"order-summary-total"},[t._v(t._s(t.convertCurrency(t.total+t.$envio)))])])])])])])])])])])},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"hero-content pb-5 text-center"},[a("h1",{staticClass:"hero-heading"},[t._v("Carrito")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-8 offset-xl-2"},[a("p",{staticClass:"lead text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, exercitationem? Facere atque quidem consequuntur?")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"cart-header text-center",staticStyle:{background:"#005f96 !important"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-5 text-white"},[t._v("Producto")]),a("div",{staticClass:"col-2 text-white"},[t._v("Precio")]),a("div",{staticClass:"col-2 text-white"},[t._v("Cantidad")]),a("div",{staticClass:"col-2 text-white"},[t._v("Subtotal")]),a("div",{staticClass:"col-1"})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("img",{staticStyle:{width:"60px"},attrs:{src:"/assets/media/idea.gif"}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"block-header"},[a("h6",{staticClass:"text-uppercase mb-0"},[t._v("Detalle de orden")])])}],r=s(5121),c=s(3748),o=s.n(c),l={data(){return{total:0,carrito:[],load_data:!0}},methods:{convertCurrency(t){return o().format(t,{code:"USD"})},init_carrito(){null!=this.$store.state.token&&(this.load_data=!0,r.Z.get(this.$url+"/obtener_carrito_cliente",{headers:{"Content-Type":"application/json",Authorization:this.$store.state.token}}).then((t=>{for(var a of(this.total=0,t.data.carrito_general)){let t=a.producto.precio*a.cantidad;this.total=this.total+t}this.carrito=t.data.carrito_general,this.load_data=!1})))},eliminar(t){r.Z.delete(this.$url+"/eliminar_producto_carrito/"+t,{headers:{"Content-Type":"application/json",Authorization:this.$store.state.token}}).then((t=>{this.init_carrito(),this.$socket.emit("send_cart",!0)}))}},beforeMount(){this.init_carrito()}},n=l,d=s(1001),u=(0,d.Z)(n,i,e,!1,null,null,null),v=u.exports}}]);
//# sourceMappingURL=176.7506f4cf.js.map