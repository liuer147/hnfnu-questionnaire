import * as echarts from 'echarts/core'

const echartsMixin = {
  data() {
    return {
      echartsNode: null,
    }
  },
  props: {
    /**
     * 图表配置
     */
    optionsData: {
      type: Object,
      default: () => {},
    },
    /**
     * 是否加载中
     * 默认 false 未加载 true 加载中
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    loading: {
      handler(newValue, oldValue) {
        if (newValue) {
          this.echartsNode.showLoading() // 显示加载动画
        } else {
          this.drawChart()
          this.echartsNode.hideLoading() // 隐藏加载动画
        }
      },
    },
  },
  methods: {
    initChart(dom) {
      this.echartsNode = echarts.init(dom)
      // 显示加载动画/加载
      this.loading ? this.echartsNode.showLoading() : this.drawChart()
    },
    drawChart() {
      this.echartsNode.setOption(this.optionsData)
    },
  },
}

export { echartsMixin }
