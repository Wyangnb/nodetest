<template>
  <div class="ResultPage">
    <transition name="result">
      <div v-show="show" :class="result_container">
        <div class="xf">
          <div :class="top"></div>
          <div class="right"></div>
          <div class="Bottom"></div>
          <div class="left"></div>
        </div>
        <div class="result" @click="toResult">
          查看结果
        </div>
      </div>
    </transition>
    <transition name="result2">
      <div :class="result_content">
        <div class="result_title">
          {{results.title}}
        </div>
        <div class="border">
          <div class="result_name">
            <div class="by">
              根据你的测试情况，你获得
            </div>
            <div class="result_names">
              {{results.name}}
            </div>
          </div>
        </div>
        <div class="result_py">
          <div class="py_head">
          </div>
          <div class="py_content">
            明世隐评语：</br>
            {{results.py}}
          </div>
        </div>
        <div class="result_jg">
          {{results.jg}}
        </div>
        <div class="button_list">
          <div class="button1">告知好友</br>一起进入尧天</div>
          <div class="button2" v-if="show3" @click="toIndex">再测一次</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  //
  export default {
    data() {
      return {
        show: false,
        show2: false,
        show3: false,
        result_container: 'result_container2',
        result_content: 'result_content2',
        top: 'top',
        index: 0,
        list: [{
            title: '很遗憾，您未能进入尧天',
            name: '良友',
            py: '你生性淳厚以诚待人，不愿过分揣测人心，是做真诚好友的最佳人选。',
            jg: '遗憾'
          },
          {
            title: '很遗憾，您未能进入尧天',
            name: '门客',
            py: '你各项能力均衡，待以时机，在关键时刻定能为主上解决重要难题。',
            jg: '遗憾'
          },
          {
            title: '很遗憾，您未能进入尧天',
            name: '谋臣',
            py: '明世隐评语:你有足够知人识事的能力，能为主上提供有用且建设性的方案，是不可多得的谋臣。',
            jg: '遗憾'
          },
          {
            title: '恭喜你，成功进入尧天',
            name: '高人',
            py: '你不涉世事却知天下事，并有非凡洞察世事的能力，是睿智精明的大才。',
            jg: '通过'
          }
        ],
        results: {},
      }
    },
    mounted() {
      this.show = true
      this.result_container = 'result_container'
      this.index = sessionStorage.getItem('key')

    },
    methods: {
      toResult() {
        let index = parseInt(this.index)
        switch (parseInt(index)) {
          case 0:
          case 1:
            this.results = this.list[0]
            this.show3 = true
            break;
          case 2:
            this.results = this.list[1]
            this.show3 = true
            break;
          case 3:
            this.results = this.list[2]
            this.show3 = true
            break;
          case 4:
          case 5:
            this.results = this.list[3]
            break;
        }
        this.top = 'top2'
        setTimeout(() => {
          this.result_container = 'result_container2'
          this.result_content = 'result_content'
        }, 1000)
      },
      toIndex() {
        this.$router.replace('/')
      }
    }
  }

</script>
<style>
  @import url('../assets/css/index.css');

  .result-enter-active {
    transition: all 2s ease;
  }

  .result-enter,
  .result-leave-to {
    opacity: 0;
  }

</style>
