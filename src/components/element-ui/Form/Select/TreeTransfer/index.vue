<template>
  <div class="main">
    <div class="operate-container">
      <div>
        <span>{{ tip }}</span>
      </div>
      <div v-if="operateBtn">
        <slot name="header">
          <el-button size="mini" @click="buttonClick('top')">置顶</el-button>
          <el-button size="mini" @click="buttonClick('bottom')">置底</el-button>
          <el-button size="mini" @click="buttonClick('moveUp')">上移</el-button>
          <el-button size="mini" @click="buttonClick('moveDown')"
            >下移</el-button
          >
        </slot>
      </div>
    </div>
    <div class="transfer-container">
      <div class="left-transfer">
        <el-tree
          :class="{ selectPitch: isActive }"
          :data="showData"
          :props="defaultProps"
          node-key="id"
          @node-click="leftNodeClick"
        >
          <span slot-scope="{ node, data }">
            <span :title="node.label">
              <al-symbol-icon class="item-icon" :icon="data.icon" />
              {{ node.label }}
            </span>
          </span>
        </el-tree>
      </div>
      <div class="icon-container">
        <i class="el-icon-arrow-right" @click="toRight" />
        <i class="el-icon-arrow-left" @click="toLeft" />
        <i v-if="multiple" class="el-icon-d-arrow-right" @click="toRightAll" />
        <i v-if="multiple" class="el-icon-d-arrow-left" @click="toLeftAll" />
      </div>
      <div class="right-transfer">
        <ul v-if="selectData.length > 0">
          <li
            v-for="(item, index) in selectData"
            :key="index"
            class="select-item"
            :class="{ 'select-item-active': item.id === activeRightData.id }"
            @dblclick="dbClick(item.id, item)"
            @click="liClick(item.id, item)"
          >
            <al-symbol-icon class="item-icon" :icon="item.icon" />
            {{ item[defaultProps.label] }}
          </li>
        </ul>
        <div v-else class="empty">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import { vModelMixin } from '@/mixins'

export default {
  name: 'TreeTransfer',
  mixins: [vModelMixin],
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    defaultProps: {
      type: Object,
      default: () => {
        return {
          children: 'children',
          label: 'label',
        }
      },
    },
    multiple: {
      // 是否全选和全不选
      type: Boolean,
      default: true,
    },
    operateBtn: {
      // 是否操作
      type: Boolean,
      default: true,
    },
    tip: {
      type: String,
      default: ' 请指定该计划任务要调用的其它任务', // 请双击选择要调度的交换任务流
    },
    types: {
      // 类型判断,哪些push到可选数据
      type: String,
      default: '',
    },
    leftShow: {
      // 左侧能否看到右侧active数据 默认可以
      type: Boolean,
      Default: true,
    },
  },
  data() {
    return {
      selectData: [], // 右侧选中数据
      treeClickCount: 0, // 定义点击次数,默认0次
      timer: null,
      activeLeftData: {}, // 左侧高亮
      activeRightData: {}, // 右侧高亮
      catalogData: [], // 所有子目录
      isActive: false, // 左侧高亮class
    }
  },
  computed: {
    showData() {
      if (this.leftShow) {
        return this.data
      } else {
        // 左侧看不到择过滤
        return this.data.filter((item) => {
          return !this.selectData.some((it) => {
            return item.id === it.id
          })
        })
      }
    },
  },
  watch: {
    // selectData: {
    //   handler() {
    //     this.setModelValue()
    //   },
    // },
    modelValue: {
      handler() {
        console.log(43434)
        this.catalogData = []
        this.getCatalogData(this.data, this.catalogData)
        const arr = []
        this.catalogData.forEach((data) => {
          this.modelValue.forEach((item) => {
            if (data.id === item) {
              arr.push(data)
            }
          })
        })
        this.selectData = arr
      },
      deep: true,
      immediate: true,
    },
  },
  // created() {
  //   this.getCatalogData(this.data, this.catalogData)
  //   const arr = []
  //   this.catalogData.forEach(data => {
  //     this.modelValue.forEach(item => {
  //       if (data.id === item) {
  //         arr.push(data)
  //       }
  //     })
  //   })
  //   this.selectData = arr
  // },
  methods: {
    leftNodeClick(data) {
      // 节点点击事件
      this.isActive = true
      if (data.type === 'dir') {
        this.activeLeftData = {}
        return // 如果是文件夹 return
      }
      this.activeLeftData = data
      this.treeClickCount++
      if (this.treeClickCount >= 2) {
        return
      }
      this.timer = setTimeout(() => {
        // 计时器
        if (this.treeClickCount === 1) {
          this.treeClickCount = 0
        } else if (this.treeClickCount > 1) {
          this.treeClickCount = 0
          if (this.multiple) {
            // 多选push 单选替换
            this.addFn(data)
          } else {
            this.selectData.splice(0, 1, data)
          }
          console.log(this.selectData)
        }
      }, 300)
    },
    dbClick(id, data) {
      // 右侧双击 多选的时候右侧双击删除  单选高亮
      if (this.multiple) {
        this.deleteFn(data)
      } else {
        this.activeRightData = data
      }
    },
    liClick(id, data) {
      this.activeRightData = data
    },
    toRight() {
      // 左to右
      if (this.activeLeftData.id) {
        this.addFn(this.activeLeftData)
      }
    },
    setModelValue() {
      // 设置双向绑定
      this.modelValue.splice(0, this.modelValue.length)
      this.selectData.forEach((item) => {
        this.modelValue.push(item.id)
      })
    },
    toLeft() {
      // 右to左
      if (this.activeRightData.id) {
        this.deleteFn(this.activeRightData)
      }
    },
    toRightAll() {
      // 左all to右
      this.selectData.splice(0, this.selectData.length)
      this.catalogData.forEach((item) => {
        this.selectData.push(item)
      })
      this.setModelValue()
    },
    toLeftAll() {
      // 右all to左
      this.selectData.splice(0, this.selectData.length)
      this.setModelValue()
    },
    getCatalogData(data, arr) {
      // 递归获取所有目录
      data.forEach((item) => {
        if (item.type === this.types || !this.types) {
          arr.push(item)
        }
        if (item.children && item.children.length > 0) {
          this.getCatalogData(item.children, arr)
        }
      })
    },
    addFn(data) {
      // 添加
      const index = this.getIndex(data)
      if (index === -1) {
        this.selectData.push(data)
        this.setModelValue()
      }
    },
    deleteFn(data) {
      // 删除
      const index = this.getIndex(data)
      this.selectData.splice(index, 1)
      this.setModelValue()
      this.activeRightData = {}
    },
    buttonClick(prop) {
      switch (prop) {
        case 'top':
          this.top()
          break
        case 'bottom':
          this.bottom()
          break
        case 'moveUp':
          this.moveUp()
          break
        case 'moveDown':
          this.moveDown()
          break
      }
    },
    top() {
      // 置顶
      const arr = this.selectData
      const index = this.getIndex(this.activeRightData)
      if (index !== -1) {
        arr.splice(0, 0, arr.splice(index, 1)[0])
      }
    },
    bottom() {
      // 置底
      const arr = this.selectData
      const index = this.getIndex(this.activeRightData)
      if (index !== -1) {
        arr.splice(arr.length, 0, arr.splice(index, 1)[0])
      }
    },
    moveUp() {
      // 上移
      const arr = this.selectData
      const index = this.getIndex(this.activeRightData)
      if (arr.length > 1 && index > 0) {
        arr.splice(index - 1, 0, arr.splice(index, 1)[0])
      }
    },
    moveDown() {
      // 下移
      const arr = this.selectData
      const index = this.getIndex(this.activeRightData)
      if (arr.length > 1 && index !== arr.length - 1) {
        arr.splice(index + 1, 0, arr.splice(index, 1)[0])
      }
    },
    getIndex(data) {
      // 获取索引
      return this.selectData.findIndex((d) => d.id === data.id)
    },
  },
}
</script>

<style lang="scss" scoped>
$defaultSize: 16px;
.main {
  font-size: $defaultSize;
  height: 100%;
  display: flex;
  flex-direction: column;
  .operate-container {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    span {
      color: #727d95;
      font-size: 14px;
      line-height: 2;
    }
  }
  .transfer-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    .left-transfer {
      width: 45%;
      border: 1px #a0a0a0 solid;
      padding: 5px;
    }
    .icon-container {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      i {
        font-size: 25px;
        color: #238efe;
      }
    }
    .right-transfer {
      width: 45%;
      border: 1px #a0a0a0 solid;
      padding: 5px;
      overflow: auto;
      .select-item {
        height: 26px;
        color: #606266;
        font-size: $defaultSize;
        line-height: 26px;
        padding-left: 5px;
        cursor: Default;
        /*&:hover{*/
        /*  background: #F5F7FA;*/
        /*}*/
      }
      .select-item-active {
        background: #2b93ff;
        color: white;
      }
      .empty {
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: #909399;
        font-size: 14px;
      }
    }
  }
  .selectPitch {
    ::v-deep .el-tree-node.is-current > .el-tree-node__content {
      background-color: #4a9de7 !important;
      color: #fff !important;
    }
  }
}
</style>
