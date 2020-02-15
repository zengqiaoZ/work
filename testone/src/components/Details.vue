<template>
  <div class="yy">
     <div class="list1 list">{{info.title}}</div>
     <div class="list2 list" >
       <img :src="info.img" alt=""  class="icon1">
        <div class="author1">环球网</div>
       <div class="time">{{info.time}}</div>
       <div class="author">{{info.author}}</div>
     </div>
     <div class="list con">{{info.content}}</div>
     <img src="/static/img/01.jpg" alt=""  class="pic list">
    <mt-button type="primary" class="bt1" @click="comment()">评论</mt-button>
  </div>

</template>

<script>
  export default {
    name: 'Details',
    		mounted(){
    			this.info=this.$route.query.s0;
    			console.log(this.$route.query.s0)
    		},
     data(){
         return {info:[]};
     },
    methods: {
       comment:function(){
         console.log("ee");
         this.$router.push({
            path: '/List',
           })
       }
     }

  }
</script>
 export default{

 }
<style scoped>
.yy{
  padding: 10px;

}
  .list{
    margin-bottom: 10px;
  }
  .list1{
    width: 100%;
    font-weight: bolder;
    font-size: 20px;
  }
  .list2{
    width:100% ;
    height: 40px;
    margin-top:20px;
    position: relative;
  }
  .icon1,.author,.time,.author1{
    position: absolute;
  }
  .icon1{
    position: relative;

    top: -10px;
    width: 45px;
    height: 45px;
  }
  .author{
    left:120px;
    font-size: 8px;
    color: gray;
    top:15px;
  }
  .time{
    font-size: 10px;
    color: gray;
    top:15px;
    left:50px;
  }
  .author1{
    left: 50px;
    top:-3px;
    font-size: 12px;
  }
  .con{
    font-size: 19px;
    margin-bottom: 20px;
  }
  .pic{
    width: 100%;
    margin-bottom: 20px;
  }
.bt1{
  width: 100%;
}
</style>
