import Vue from 'vue'

export const breadcrumbBus = new Vue()

export const PAGE_LEVEL_SET = 'PAGE_LEVEL_SET'

export const breadcrumbMixins = {
  data() {
    return {
      mixins_eventName: '',
    }
  },
  mounted() {
    if (!this.mixins_eventName) console.error('请配置面包屑事件监听名')
    breadcrumbBus.$on(this.mixins_eventName, this.mixins_breadcrumbBus)
  },
  destroy() {
    breadcrumbBus.$off(this.mixins_eventName)
  },
  methods: {
    // 设置面包屑
    /**
     * 传入一个数组 { id: '', name: '' }
     * id 与 name 属性必填, 其他属性可以在回调监听中传入
     * @param {Array} data
     */
    mixins_setCrumbs(data) {
      breadcrumbBus.$emit(PAGE_LEVEL_SET, {
        eventName: this.mixins_eventName,
        crumbsList: data,
      })
    },
    // 需要子页面重写该方法
    mixins_breadcrumbBus(data) {},
  },
}

export const META_MANAGE_EVENT_NAME = 'metaManageEventName'
export const LATEST_METADATA_EVENT_NAME = 'latestMetadataEventName'
export const COLLECT_TASK_EVENT_NAME = 'collectTaskEventName'
export const DATA_ORIGIN_EVENT_NAME = 'dataOriginEventName'
export const CHANGE_SUBSCRIBE_EVENT_NAME = 'changeSubscribeEventName'
export const CHECK_TASK_EVENT_NAME = 'checkTaskEventName'
export const LATEST_STANDARD_EVENT_NAME = 'latestStandardEventName'
export const ORIGIN_STADNARD_EVENT_NAME = 'originStandardEventName'
export const SET_STADNARD_EVENT_NAME = 'setStandardEventName'
export const TASK_MANAGER_EVENT_NAME = 'taskManagerEventName'
// 用户管理
export const USER_EVENT_NAME = 'userEventName'
// 数据资产
export const ASSETS_EXCHANGE = 'assetsExchange' // 资产交换
export const ASSETS_DATA = 'assetsData'
export const ASSETS_LABEL = 'assetsLabel'
export const PUBLISH_STANDARD_EVENT_NAME = 'publishStandardEventName' // 已发布标准
export const ASSESS_SETTING_EVENT_NAME = 'assessSetting' // 评估任务主页
export const QUALITY_WORK_EVENT_NAME = 'qualityWorkEventName' // 质检工作
// 调度管理
export const DISPATCH_MANAGER_EVENT_NAME = 'dispatchManagerEventName'
// 规则模板管理
export const RULE_TEM_MANAGER_EVENT_NAME = 'ruleTemManagerEventName'
