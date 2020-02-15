<template>

  <div >
       <img src="../../static/img/02.png" alt=""class="pic">
      <div class="c1">
        <div class="t1 ">请选择反馈类型</div>
        <div class="t2">
          <mt-button type="primary" class="bt1 bt">投诉</mt-button>
          <mt-button type="primary" class="bt2 bt">建议</mt-button>
          <mt-button type="primary" class="bt3 bt">表扬</mt-button>
      </div>

     <textarea label="" placeholder="请输入你要反馈的内容"  rows="5"   class="t3" v-model="value"></textarea>
     <div class="len">{{len}}/100</div>
        <div class="t4">添加图片(可选)</div>
       <div class="p">

         <!--   <span class="glyphicon glyphicon-plus"></span> -->
        </div>

    </div>
    <div class="ss">
        <mt-button type="primary" class="sure">确认提交</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data(){
      return{
        value:"",
        len:0
      }
    },
    watch:{
       "value":function(){
        this.len=this.value.length;
      }
    }


  }
</script>

<style scoped>
  .len{
   float: right;

  }
.pic{
  width: 100%;
}
.c1{
 padding-left: 20px;
 padding-right: 20px;
}

  .dd{
    margin-bottom: 20px;
    margin-left: 15px;
  }
  .p{
    font-size: 30px;
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
  .sure{
    width:100%;
  }
  .bt{
    width: 50px;
    height: 20px;
    font-size: 9px;
    line-height: 20px;
    vertical-align: middle;
    margin-top: 10px;
    margin-right: 8px;
    border-radius: 2px;
  }
  .bt2,.bt3{
    background-color: white;
    color: rgb(38,162,255);
    border: 1px solid rgb(38,162,255);
  }
  .t1{
    margin-top: 20px;
    color: gray;
    font-size: 15px;
  }
  .t2{
    padding-bottom: 15px;
    border-bottom: 1px solid gainsboro;
  }
  .t3{
    margin-top: 10px;
    font-size: 15px;
    width: 100%;
    border: none;


  }
  .t4{
    margin-top: 10px;
  }

.sure{

  font-size: 13px;


}
.ss{
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
