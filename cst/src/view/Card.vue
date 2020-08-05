<template>
  <div class="cardPage" id="cardPage" ref="cardPage">
    <transition name="card">
      <div @click="change" id="card_container" class=" card_container" :class="feichu" v-if="show" ref="card_container"
        :style="{
          background: 'url(' + subject_list.img + ') 100% 100%/100% 100%'
        }" style="background-size: 100% 100%;" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <div :class="car_content">
          <div class="subject" v-if="show3">{{ subject_list.subject }}</div>
          <div class="answers">
            <div class="correct">
              {{ subject_list.answers[0].text }}
            </div>
            <div class="error">
              {{ subject_list.answers[1].text }}
            </div>
          </div>
          <div class="bottom">左右拖动卡牌选择答案</div>
        </div>
      </div>
    </transition>
    <div class="list">
      <ul>
        <li v-for="(item, i) in right_key" :class="i === currentIndex ? 'active' : ''" id="li"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {
    bus
  } from "../main.js";
  export default {
    props: ["subject_list", "currentIndex"],
    data() {
      return {
        show: false,
        show2: false,
        show3: true,
        action: 0,
        right_key: [0, 1, 0, 0, 0],
        right_key_num: 0,
        index: 0,
        car_content: "car_content2",
        feichu: "", //飞出动画
        startX: "", //触摸开始位置
        startY: "",
        moveX: "", //移动位置
        moveY: "",
        endX: "", //移动结束位置
        endY: "",
        left: "",
        top: "",
        disX: "", //距离元素距离
        disY: ""
      };
    },
    mounted() {
      this.show = true;
      setTimeout(() => {
        this.car_content = "car_content";
      }, 1500);
    },
    methods: {
      change() {
        this.show = false;
        setTimeout(() => {
          this.car_content = "car_content";
        }, 200);
      },
      // 手指触摸事件
      touchstart(e) {
        //手指按下坐标
        this.startX = e.changedTouches[0].clientX;
        this.startY = e.changedTouches[0].clientY;
        this.left = e.target.offsetLeft;
        this.top = e.target.offsetTop;
      },
      //手指滑动事件
      touchmove(e) {
        this.show3 = false;
        let width =
          document.body.clientWidth - this.$refs.card_container.clientWidth;
        let height =
          document.body.clientHeight - this.$refs.card_container.clientHeight;
        this.moveX = e.changedTouches[0].clientX;
        this.moveY = e.changedTouches[0].clientY;
        this.disX = this.moveX - this.startX;
        this.disY = this.moveY - this.startY;
        if (this.disX < width / 2 - 1) {
          if (this.disY < height / 2) {
            this.left = this.disX;
            card_container.style.left = this.disX + "px";
            card_container.style.top = this.disY + "px";
          }
        }
      },
      // 手指离开事件
      touchend(e) {
        this.show3 = true;
        this.car_content = "car_content2";
        this.endX = e.changedTouches[0].clientX;
        this.endY = e.changedTouches[0].clientY;
        let left = card_container.style.left;
        if (this.left > -45 && this.left < 0) {
          this.car_content = "car_content";
          card_container.style.left = "0px";
          card_container.style.top = "0px";
        } else if (this.left < 40 && this.left > 0) {
          this.car_content = "car_content";
          card_container.style.left = "0px";
          card_container.style.top = "0px";
        } else if (this.left < -45) {
          let key = this.subject_list.answers[0].id;
          if (key === this.right_key[this.index]) {
            sessionStorage.getItem("key");
            sessionStorage.setItem("key", (this.right_key_num += 1));
          }
          this.index++;
          this.feichu = "animate__bounceOutLeft";
          setTimeout(() => {
            this.$parent.change();
            this.feichu = " ";
          }, 1000);
          setTimeout(() => {
            this.car_content = "car_content";
          }, 1500);
          card_container.style.left = "0px";
          card_container.style.top = "0px";
        } else if (this.left > 40) {
          let key = this.subject_list.answers[1].id;
          if (key === this.right_key[this.index]) {
            sessionStorage.getItem("key");
            sessionStorage.setItem("key", (this.right_key_num += 1));
          }
          this.index++;
          this.feichu = "animate__bounceOutRight";
          setTimeout(() => {
            this.$parent.change();
            this.feichu = " ";
          }, 1000);
          setTimeout(() => {
            this.car_content = "car_content";
          }, 1500);
          card_container.style.left = "0px";
          card_container.style.top = "0px";
        }
      }
    }
  };

</script>
<style>
  @import url("../assets/css/index.css");

  .card-enter-active {
    transition: all 2s ease;
  }

  .card-enter,
  .card-leave-to {
    opacity: 0;
  }

</style>
