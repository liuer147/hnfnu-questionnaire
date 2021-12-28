<!--柱状图-->
<template>
  <div ref="bar" class="e-chart-box" />
</template>
<script>
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, BarChart, CanvasRenderer, LineChart])
import { echartsMixin } from '../echartsMixins'

export default {
  name: 'BarChart',
  mixins: [echartsMixin],
  mounted() {
    this.initChart(this.$refs.bar)
  },
}
</script>
