<template>
  <div class="IndexPage">
    <div>
      <!-- 画布 -->
      <canvas class="canvas" width="100px" height="100px"></canvas>
      <!-- 百分比 -->
      <div class="num">
        {{ i }}
      </div>
    </div>
    <div class="title">
      你即将进入尧天禁地
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        i: 0, //记录百分比数
      };
    },
    mounted() {
      // 初始化key
      sessionStorage.setItem('key', 0)
      // 获取画布
      var canvas = document.querySelector("canvas").getContext("2d");
      let a = 0;
      let b = 270; //从270开始加载
      let t = setInterval(() => {
        this.arc(canvas);
        this.innerArc(b, canvas);
        b--;
        // -90结束
        if (b < -90) {
          clearInterval(t);
        }
      }, 10);
      let t2 = setInterval(() => {
        this.i++;
        if (this.i >= 100) {
          clearInterval(t2);
          // 100跳转到答题页面
          this.$router.push("/Home");
        }
      }, 44);
    },
    methods: {
      //内圈
      arc(canvas) {
        canvas.beginPath();
        canvas.strokeStyle = "#ffffff"; //#b9b6b6 #ffffff
        canvas.arc(
          50,
          50,
          45,
          (Math.PI / 180) * 270,
          (Math.PI / 180) * -90,
          true //逆时针
        );
        canvas.lineWidth = 4; //笔宽
        canvas.stroke(); //开画
        canvas.closePath();
      },
      // 外圈
      innerArc(n, canvas) {
        canvas.beginPath();
        canvas.strokeStyle = "#b9b6b6"; //#b9b6b6 #ffffff
        canvas.arc(
          50,
          50,
          45,
          (Math.PI / 180) * 270,
          (Math.PI / 180) * n,
          true
        );
        canvas.lineWidth = 4;
        canvas.stroke();
        canvas.closePath();
      },
    }
  };

</script>
<style>
  @import url("../assets/css/index.css");

</style>
