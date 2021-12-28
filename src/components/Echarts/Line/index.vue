<!--折线图-->
<template>
  <div ref="line" class="e-chart-box" />
</template>

<script>
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])
import { echartsMixin } from '../echartsMixins'

export default {
  name: 'LineChart',
  mixins: [echartsMixin],
  mounted() {
    this.initChart(this.$refs.line)
  },
}
</script>
