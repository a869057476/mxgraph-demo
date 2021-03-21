<!--
 * @Descripttion:
 * @version:
 * @Author: huangwei
 * @Date: 2020-06-27 17:15:16
 * @LastEditors: huangwei
 * @LastEditTime: 2021-02-15 21:29:16
-->
<template>
  <div ref="graphContainer" class="custom-container" />
</template>

<script>
import mxgraph from '@/utils/mxgraph'
const { mxGraph, mxClient, mxCodec, mxUtils } = mxgraph
export default {
  name: 'MxgraphTest',
  data() {
    return {
      model: null,
      graph: null
    }
  },
  mounted() {
    console.log('MxgraphTest')
    if (!mxClient.isBrowserSupported()) {
      // 判断是否支持mxgraph
      mxUtils.error('Browser is not supported!', 200, false)
    } else {
      // 再容器中创建图表
      const container = this.$refs.graphContainer
      const MxGraph = mxGraph
      const MxCodec = mxCodec
      var graph = new MxGraph(container)
      // 生成 Hello world!
      var parent = graph.getDefaultParent()
      graph.getModel().beginUpdate()
      try {
        var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 200, 80, 30)
        var v2 = graph.insertVertex(parent, null, 'World', 200, 150, 80, 30)
        var v3 = graph.insertVertex(parent, null, 'everyBody!', 300, 350, 60, 60)
        graph.insertEdge(parent, null, '', v1, v2)
        graph.insertEdge(parent, null, '', v2, v3)
        graph.insertEdge(parent, null, '', v1, v3)
      } finally {
        // Updates the display
        graph.getModel().endUpdate()
      }
      // 打包XML文件
      const encoder = new MxCodec()
      const xx = encoder.encode(graph.getModel())
      // 保存到getXml参数中
      this.getXml = mxUtils.getXml(xx)
    }
  }
}
</script>
<style scoped>
.custom-container {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}
</style>
