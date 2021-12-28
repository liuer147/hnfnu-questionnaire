<!--checkbox搜索组件-->
<template>
  <el-popover
    ref="popover"
    v-model="popoverShow"
    class="checkbox-search-form"
    popper-class="tree-popover"
    placement="bottom"
    width="240"
    trigger="click"
    :disabled="disabled"
  >
    <div class="checkbox-popover">
      <div class="checkbox-header">
        <el-checkbox
          v-model="checkAll"
          :disabled="!isCheckAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <el-input
          v-model="filterText"
          placeholder="输入关键字进行过滤"
          @change="selectFilter"
        />
      </div>
      <div class="checkbox-main">
        <p v-if="!getOptions.length" class="check-item-null">暂无数据</p>
        <el-checkbox-group
          v-else
          v-model="checkedItems"
          v-bind="$attrs"
          @change="handleCheckedItemsChange"
        >
          <el-checkbox
            v-for="(item, i) in getOptions"
            :key="i"
            :label="item.value"
          >
            <span v-if="isShowValue" class="code-text">{{ item.value }}</span>
            <span class="name-text">{{ item.caption }}</span>
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div slot="reference" class="click-input">
      <el-input
        v-model="inputShowText"
        class="checkbox-input"
        placeholder="请选择"
        :disabled="disabled"
      >
        <i
          slot="suffix"
          class="el-icon-arrow-down input-icon"
          :class="{ 'input-focus': popoverShow }"
        />
      </el-input>
    </div>
  </el-popover>
</template>
<script>
import { Popover as ElPopover } from 'element-ui'
import { Input as ElInput } from 'element-ui'
import { vModelMixin } from '@/mixins'

export default {
  name: 'CheckboxSearch',
  components: { ElPopover, ElInput },
  mixins: [vModelMixin],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    /**
     * 是否可以全选
     * 默认 true 可以全选
     */
    isCheckAll: {
      type: Boolean,
      default: true,
    },
    /**
     * 组件名
     * 默认为空
     */
    checkName: {
      type: String,
      default: '',
    },
    /**
     * 选项中是否显示value
     */
    isShowValue: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否禁用组件
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * input是否显示value
     * true 显示 Value  false 显示 caption
     */
    inputShowValue: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      popoverShow: false,
      // isFocus: false,
      filter: false, // 是否搜索
      filterText: '', // 搜索关键字
      checkAll: false,
      isIndeterminate: true,
      checkedItems: [], // 已选择的checkbox的value
      checkedData: [], // 选择的数据
      SelectNavTemporary: [],
      inputShowText: '', // 搜索框显示的内容
      firstGetData: true, // 第一次获取数据
    }
  },
  computed: {
    getOptions: {
      get() {
        if (!this.filter) {
          return this.options
        } else {
          return this.SelectNavTemporary
        }
      },
    },
  },
  watch: {
    options(newVal, oldVal) {
      // 数据改变,清空已选择的数组
      this.checkedItems = []
      this.checkedData = []
      if (this.firstGetData) {
        // 初始赋值
        if (this.vModelValue) {
          // 且有值,回显
          const valList = this.vModelValue.split(',')
          this.checkedItems = valList
          this.handleCheckedItemsChange(valList)
        }
        this.firstGetData = false
      } else {
        this.inputShowText = ''
        this.vModelValue = ''
      }
    },
  },
  created() {
    this.firstGetData = true
    if (this.vModelValue) {
      // 且有值,回显
      const valList = this.vModelValue.split(',')
      this.checkedItems = valList
      this.handleCheckedItemsChange(valList)
    }
  },
  methods: {
    // 全选
    handleCheckAllChange(val) {
      if (!val) {
        // 取消全选
        this.inputShowText = ''
        this.vModelValue = ''
        this.checkedItems = []
        this.checkedData = []
      } else {
        // 全选
        const valueArr = [] // 存放值的数组
        const inputArr = [] // input框显示的内容
        this.getOptions.map((item) => {
          valueArr.push(item.value)
          const text = this.inputShowValue ? item.value : item.caption
          inputArr.push(text)
        })
        this.checkedItems = valueArr
        this.inputShowText = inputArr.join(',')
        this.vModelValue = valueArr.join(',')
      }
      this.isIndeterminate = false
      const eventName = !this.checkName
        ? 'checkboxChange'
        : `checkboxChange-${this.checkName}`
      this.checkedData = !val ? [] : this.getOptions
      this.$emit('formItemEvent', {
        event: eventName,
        prop: { chooseList: this.checkedItems, chooseData: this.checkedData },
      })
    },
    // 选择
    handleCheckedItemsChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.getOptions.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.getOptions.length
      this.vModelValue = this.checkedItems.join(',')
      if (this.inputShowValue) {
        // input框显示value
        this.inputShowText = this.checkedItems.join(',')
      } else {
        // input框显示caption
        const inputArr = []
        this.checkedData = []
        this.getOptions.map((item) => {
          if (this.checkedItems.indexOf(item.value) > -1) {
            inputArr.push(item.caption)
            this.checkedData.push(item)
          }
        })
        this.inputShowText = inputArr.join(',')
      }
      const eventName = !this.checkName
        ? 'checkboxChange'
        : `checkboxChange-${this.checkName}`
      this.$emit('formItemEvent', {
        event: eventName,
        prop: { chooseList: value, chooseData: this.checkedData },
      })
    },
    // 同时搜索label与value
    selectFilter(val) {
      // 判断是否为空
      if (val) {
        this.filter = true
        this.SelectNavTemporary = this.options.filter((item) => {
          if (
            !!~item.caption.indexOf(val) ||
            !!~item.caption.toUpperCase().indexOf(val.toUpperCase()) ||
            !!~item.value.indexOf(val) ||
            !!~item.value.toUpperCase().indexOf(val.toUpperCase())
          ) {
            return true
          }
        })
      } else {
        // 赋值还原
        this.filter = false
        this.SelectNavTemporary = []
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.checkbox-search-form {
  // input框
  ::v-deep .click-input {
    position: relative;
    max-width: 200px;
    display: inline-block;
    .input-icon {
      position: absolute;
      height: 100%;
      line-height: 28px;
      width: 25px;
      font-size: 14px;
      text-align: center;
      right: 0px;
      color: #c0c4cc;
      transition: transform 0.3s;
      &.clear {
        right: 25px;
      }
    }
    .input-focus {
      transform: rotate(-180deg);
    }
  }
}
// checkbox弹窗
.checkbox-popover {
  .checkbox-header {
    line-height: 28px;
    display: flex;
    padding-bottom: 6px;
    border-bottom: 1px solid #d7dce3;
    ::v-deep .el-checkbox {
      .el-checkbox__label {
        padding: 0 15px 0 5px;
      }
    }
  }
  .checkbox-main {
    max-height: 300px;
    overflow-y: scroll;
    padding-top: 8px;
    .check-item-null {
      margin: 0;
      text-align: center;
      color: #999;
      font-size: 14px;
    }
    .el-checkbox-group {
      ::v-deep .el-checkbox {
        padding: 5px 10px;
        display: block;
        margin: 0px;
        .el-checkbox__label {
          font-size: 12px;
          .code-text {
            vertical-align: middle;
            display: inline-block;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .name-text {
            vertical-align: middle;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
