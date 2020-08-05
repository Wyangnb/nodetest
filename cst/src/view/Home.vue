<template>
  <!-- 答题界面 -->
  <div class="HomePage">
    <!-- 页面加载淡入 -->
    <transition name="toCard">
      <div v-if="show" :class="start_container">
        <div @click="Hides" class="start">
          开始答题
        </div>
      </div>
    </transition>
    <transition name="HomePage">
      <!-- 子路由页面显示 -->
      <router-view v-if="show2" :subject_list="subject_list[index]" :currentIndex="index"></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 题目列表
        subject_list: [{
            subject: "女帝邀我如朝辅政，但作为杜丹华爱好者来说，个人愿意找一个别院,养花、护花。",
            answers: [{
                id: 0,
                text: "明世隐在长安要的并不是名利"
              },
              {
                id: 1,
                text: "没从政经验,他没自信"
              }
            ],
            img: require("../assets/img/msy2.jpg")
          },
          {
            subject: "百里守约在什么情况下可以达到隐身效果？",
            answers: [{
                id: 0,
                text: "开启大招后"
              },
              {
                id: 1,
                text: "贴着墙壁走"
              }
            ],
            img: require("../assets/img/blsy.jpg")
          },
          {
            subject: "马可波罗开启大招后可以随意操控方向吗？",
            answers: [{
                id: 0,
                text: "不可以"
              },
              {
                id: 1,
                text: "可以"
              }
            ],
            img: require("../assets/img/mkbl.jpg")
          },
          {
            subject: "杨戬到底有几只眼睛？",
            answers: [{
                id: 0,
                text: "3只"
              },
              {
                id: 1,
                text: "2只"
              }
            ],
            img: require("../assets/img/yj.jpg")
          },
          {
            subject: "孙悟空有多少变？",
            answers: [{
                id: 0,
                text: "七十二变"
              },
              {
                id: 1,
                text: "八十一变"
              }
            ],
            img: require("../assets/img/swk.jpeg")
          }
        ],
        // 题目下标
        index: 0,
        // 页面淡入
        show: false,
        show2: false,
        // 开始页面类名
        start_container: "start_container"
      };
    },
    mounted() {
      this.show = true
    },
    methods: {
      // 子组件操控传值
      change() {
        // 下标加一
        this.index++;
        // 如果下标等于数组长度说明答题已完毕，跳转结果页面
        if (this.index == this.subject_list.length) {
          this.$router.push("/Result");
        }
      },
      // 点击答题进入题目页面
      Hides() {
        this.start_container = "start_container2";
        this.show2 = true
        setTimeout(() => {
          this.$router.push("/Card");
        }, 500)

      }
    }
  };

</script>
<style>
  @import url("../assets/css/index.css");

  .HomePage-enter-active {
    transition: all 2s ease;
  }

  .HomePage-enter,
  .HomePage-leave-to {
    opacity: 0;
  }

  .toCard-enter-active {
    transition: all 2s ease;
  }

  .toCard-enter,
  .toCard-leave-to {
    opacity: 0;
  }

</style>
