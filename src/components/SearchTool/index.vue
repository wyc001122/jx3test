<template>
  <div class="search-tool">
    <el-row v-bind="$attrs" class="search-list">
      <transition-group mode="out-in" name="height-transform">
        <el-col v-for="item,index in this.$slots.default.slice(0,isOpened? this.$slots.default.length : 4)" :key="index" :span="item.data.attrs['span']||6">
          <div class="search-item">
            <div class="component" tabindex="1">
              <div v-if="item.data.attrs['custom-label']" class="component-text">
                {{item.data.attrs['custom-label']}}
              </div>
              <Vnodes :vnode="item"></Vnodes>
            </div>
          </div>
        </el-col>
      </transition-group>
    </el-row>
    <div class="search-btn">
      <el-button type="primary" @click="$emit('search')">搜索</el-button>
      <el-button @click="$emit('reset')">重置</el-button>
      <span class="showMore" :class="{isOpened,isNeed:this.$slots.default.length>4}" @click="isOpened = !isOpened">{{isOpened?'收起':'展开'}}<i class="el-icon-arrow-down"></i> </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpened: false, // 是否展开
    };
  },
  inheritAttrs: false,
  components: {
    Vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnode,
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
/* height-transform */
.height-transform-enter-active {
  transition: all 0.5s;
}
.height-transform-leave-active {
  transition: all 0s;
}

.height-transform-enter {
  opacity: 0;
  height: 0;
  transform: translateY(-30px);
}

.height-transform-leave-to {
  opacity: 0;
  height: 0;
  transform: translateY(30px);
}

.search-tool {
  padding: 20px;
  padding-bottom: 5px;
  display: flex;
  transition: height 0.3s;
  background: #fff;
  box-shadow: $base-shadow;
  // border-radius: 4px;
  outline: 1px solid;
  ::v-deep {
    .el-input__inner {
      border: none;
      height: 26px;
      line-height: 26px;
    }
  }
}
.component {
  position: relative;
  padding: 7px 0;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  &:not(:focus):hover {
    border-color: #c0c4cc;
  }
  &:focus {
    border-color: #409eff;
    outline: 0;
  }
  .component-text {
    user-select: none;
    pointer-events: none;
    position: absolute;
    line-height: 12px;
    height: 12px;
    z-index: 2;
    top: 0;
    left: 0.8em;
    transform: translateY(-50%);
    padding: 0 5px;
    background: #fff;
    font-size: 14px;
    color: $--color-text-regular;
    white-space: nowrap;
    // &.isFocus {
    //   top: 0;
    //   left: 2em;
    // }
  }
}

.search-list {
  flex: 1;
  .search-item {
    padding-bottom: 15px;
    padding-right: 10px;
  }
}

.search-btn {
  user-select: none;
  .showMore {
    margin: 0 10px;
    color: $--color-text-secondary; // 次要文字颜色
    opacity: 0;
    pointer-events: none;
    &.isNeed {
      pointer-events: visible;
      cursor: pointer;
      opacity: 1;
    }
    &.isOpened {
      i {
        transform: rotate(180deg);
      }
    }
  }
}
</style>