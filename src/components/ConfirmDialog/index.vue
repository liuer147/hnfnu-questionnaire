<template>
  <al-dialog
    v-if="vModelValue"
    v-model="vModelValue"
    class="al-dialog"
    :handle-button="handleButton"
    title="提示"
    width="400px"
    @buttonClick="buttonClick($event)"
  >
    <div class="hint">{{ msg }}</div>
    <div v-if="isDetails" class="details" v-html="detailsText" />
  </al-dialog>
</template>

<script>
import { vModelMixin } from '@/mixins'
import AlDialog from '@/components/element-ui/Dialog'

export default {
  name: 'ConfirmDialog',
  components: { AlDialog },
  mixins: [vModelMixin],
  props: {
    msg: {
      type: String,
      default: '',
    },
    details: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isDetails: false,
      handleButton: [
        { prop: 'confirm', label: '确定' },
        {
          prop: 'details',
          label: '详情',
          type: '',
          icon: 'el-icon-caret-bottom',
          iconPosition: 'right',
        },
      ],
    }
  },
  computed: {
    detailsText() {
      return this.details && this.details.replace(/\n/g, '<br/>')
    },
  },
  watch: {
    details: {
      handler() {
        if (!this.details) this.handleButton.pop()
      },
    },
  },
  methods: {
    buttonClick(prop) {
      switch (prop) {
        case 'details':
          this.isDetails = !this.isDetails
          this.handleButton[1]['icon'] = this.isDetails ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
          break
        case 'confirm':
          this.vModelValue = false
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.al-dialog {
  ::v-deep {
    .dialog-body {
      padding: 0;
    }
  }
  .hint {
    padding: 10px;
    height: 200px;
  }
  .details {
    padding: 10px;
    height: 150px;
    overflow: scroll;
    background: #f1f2f7;
    bottom: 1px;
  }
}
</style>
