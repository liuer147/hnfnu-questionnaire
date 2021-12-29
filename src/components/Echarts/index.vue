<!--柱状图-->
<template>
  <div ref="eChart" class="e-chart-box" />
</template>
<script>
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { LineChart } from 'echarts/charts'
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { TitleComponent, TooltipComponent, LegendComponent, ToolboxComponent } from 'echarts/components'

echarts.use([
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  PieChart,
])

export default {
  name: 'EChart',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      echartsNode: null,
    }
  },
  watch: {
    loading: function (val) {
      if (val) {
        if (!this.echartsNode) this.initChart()
        this.echartsNode.showLoading()
      } else {
        this.echartsNode.setOption(this.options)
        this.echartsNode.hideLoading()
      }
    },
  },
  methods: {
    initChart() {
      const dom = this.$refs.eChart
      this.echartsNode = echarts.init(dom)
    },
    /**
     * 开始图形绘画
     * @param {Function} asyncFun 异步加载函数
     */
    drawChart(asyncFun) {
      if (!this.echartsNode) this.initChart()
      this.echartsNode.showLoading()
      asyncFun().then((options) => {
        this.echartsNode.setOption(options)
        this.echartsNode.hideLoading()
      })
    },
  },
}
</script>
