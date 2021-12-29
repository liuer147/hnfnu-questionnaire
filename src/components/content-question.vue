<template>
  <div class="radio-question">
    <h2 class="title">{{ title }}</h2>
    <div class="options">
      <span class="options-item" v-for="(item, index) of options" :key="item.text">
        <i
          :class="{
            'is-true': isTrue(index),
            'item-icon': !isMultiple,
            'multiple-icon': isMultiple,
          }"
        />
        <label class="item-title" :class="{ 'is-true': isTrue(index) }">{{ item.text }}</label>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radio-question',
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    answer: {
      type: Array,
      required: true,
    },
    typeId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isMultiple() {
      return this.typeId === 1
    },
  },
  methods: {
    isTrue(val) {
      return this.answer.includes(val)
    },
  },
}
</script>

<style lang="scss" scoped>
.radio-question {
  width: 100%;
  padding: 10px 50px;
  .title {
    margin: 0 0 10px;
  }
  .options {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    .options-item {
      display: flex;
      margin: 0 0 10px;
      .item-icon {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 8px;
        border: 1px solid #666;
        &.is-true {
          background-color: #1296db;
          border: 1px solid #1296db;
        }
      }
      .multiple-icon {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 3px;
        margin-right: 8px;
        border: 1px solid #666;
        &.is-true {
          background-color: #1296db;
          border: 1px solid #1296db;
        }
      }
      .item-title.is-true {
        color: #1296db;
      }
    }
  }
}
</style>
