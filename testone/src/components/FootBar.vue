<template>
 <div id="app">

<mt-navbar v-model="selected">
  <mt-tab-item id="1" ><span class="title">未读</span></mt-tab-item>
  <mt-tab-item id="2" ><span class="title">已读</span></mt-tab-item>
</mt-navbar>


<mt-search v-model="value" class="search">
</mt-search>

<mt-tab-container v-model="selected">
 <mt-tab-container-item id="1">
   <div v-for="n in result"  @click="details(n)" v-if="n.status==0" :key="n.title" >
     <mt-cell class="item" >
      <div class="rr">
        <div class="d1">
            <div class="t2 e" >交办协办</div>
            <div class="e yd">{{n.status_DISPLAY}}</div>
        </div>
        <div class="d2">
           <img  src="/static/img/red.png"  class="e icon">
            <div class="t1 e">{{n.title}}</div>
        </div>
        <div class="d3">
            <div class="e tim">{{n.time}}</div>
            <div class="e au">{{n.author}}</div>
        </div>
      </div>
     </mt-cell>
   </div>
  </mt-tab-container-item>

<mt-tab-container-item id="2">
   <div v-for="n in result"  @click="details(n)" v-if="n.status==1" :key="n.title" >
     <mt-cell class="item" >
      <div class="rr">
        <div class="d1">
            <div class="t2 e" >交办协办</div>
            <div class="e yd">{{n.status_DISPLAY}}</div>
        </div>
        <div class="d2">
           <img  src="/static/img/red.png"  class="e icon">
            <div class="t1 e">{{n.title}}</div>
        </div>
        <div class="d3">
            <div class="e tim">{{n.time}}</div>
            <div class="e au">{{n.author}}</div>
        </div>
      </div>
     </mt-cell>
   </div>
  </mt-tab-container-item>

</mt-tab-container>
</div>
</template>

<script>

    export default{
        name:"FootBar",
        data(){
          return {
            result:[],
            value:"",
            selected:"1",
            list:[],
            };
      },
        mounted(){
          this.$http.get('static/js/data.json').then(res => {
          	this.list=res.body.result;
            var array=this.list.sort(function(a,b){return b['time'] < a['time'] ? 1 : -1 });
            array=array.reverse();
            this.list=array;
            this.result=this.list;

          })
      },
       methods: {
        handleClick: function() {
         this.$toast('Hello world!');
         $("#w").css({
           color:"red",
            width:"200px",
             height:"100px",
             background:"red"

            })
              },
        details:function(n){

           this.$router.push({
             path: '/Details',
             query: {
               s0:n
             }
            })

        }
      },
       watch:{
                           "value":function(){
                               this.result="";
                               var s=this.list;
                               var v=this.value;
                               var re=[];
                               if(this.v==" "){
                                 this.result=this.list;
                                 return;
                               }
                               $.each(s,function(i,value){
                                          if(s[i].title.indexOf(v)!=-1){
                                             re.push(s[i]);
                                          }
                                          })
                               this.result=re;
                           }
                },
}
</script>

<style scoped>
.d1{


}
.yd{
  float: right;
  font-size: 13px;

  color: rgb(31,214,196);
  background-color: rgb(214,250,250);
}
.t2{
 border: 1px solid rgb(106,157,229);
 font-size: 13px;
 color:rgb(106,157,229) ;
 padding-left: 3px;
 padding-right: 3px;
 border-radius: 4px;
 float: left;

}
.d2{

 margin-top: -8px;

}
.icon{

  position: relative;
  width: 10px;
  height: 10px;
  top:15px;


}
.t1{
  /* width: 95%; */
  padding-right: 10px;
  position: relative;
  left: 15px;
  color: #000000;
  font-size: 19px;


}
.d1{
      overflow: auto;
      margin-top: 15px;
}
.d3{
 margin-top: 10px;
 margin-bottom: 20px;

}
.au{
  font-size: 13px;
}


.title{
  font-size: 19px;
}
.tim{
  float: right;
  font-size: 13px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid rgb(34,184,171);
    color: rgb(34,184,171);
    margin-bottom: 3px;
}
.search{
  height: auto;
}



</style>
