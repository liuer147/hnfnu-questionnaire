<!--环形饼图-->
<template>
  <div ref="pie" class="e-chart-box" />
</template>

<script>
import * as echarts from 'echarts/core'
import { TitleComponent, TooltipComponent, LegendComponent, ToolboxComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
])
import { echartsMixin } from '../echartsMixins'

export default {
  name: 'PieChart',
  mixins: [echartsMixin],
  mounted() {
    this.initChart(this.$refs.pie)
  },
}
</script>
