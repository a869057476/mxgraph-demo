<!--
 * @Descripttion:
 * @version:
 * @Author: huangwei
 * @Date: 2020-06-24 14:15:55
 * @LastEditors: huangwei
 * @LastEditTime: 2021-02-15 21:22:24
-->
<template>
  <div ref="container" class="custom-container" />
</template>

<script>
import mxgraph from '@/utils/mxgraph'
const { mxGraph, mxCodec, mxUtils } = mxgraph
const MxGraph = mxGraph
const MxCodec = mxCodec
const MxUtils = mxUtils

export default {
  name: 'MxgraphView',
  data() {
    return {
      model: null,
      graph: null
    }
  },
  mounted() {
    console.log('MxgraphView')
    // const xml1 = localStorage.getItem('mxgraphxml') ? localStorage.getItem('mxgraphxml') : ''
    const json = localStorage.getItem('mxgraphjson') ? JSON.parse(localStorage.getItem('mxgraphjson')) : {}
    const xml = this.$x2js.js2xml(json)
    console.log(xml)
    console.log(json)
    const container = this.$refs.container
    var graph = new MxGraph(container)

    // Enables rubberband selection
    // new mxRubberband(graph);

    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    // var parent = graph.getDefaultParent()

    // Adds cells to the model in a single step
    graph.getModel().beginUpdate()
    try {
      // var xml = '<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="Doubleclick" vertex="1" parent="1"><mxGeometry x="20" y="20" width="80" height="30" as="geometry"/></mxCell><mxCell id="3" value="Right-/Shiftclick" vertex="1" parent="1"><mxGeometry x="200" y="150" width="120" height="30" as="geometry"/></mxCell><mxCell id="4" value="Connect/Reconnect" vertex="1" parent="1"><mxGeometry x="200" y="20" width="120" height="30" as="geometry"/></mxCell><mxCell id="5" value="Control-Drag" vertex="1" parent="1"><mxGeometry x="20" y="150" width="100" height="30" as="geometry"/></mxCell><mxCell id="6" value="Tooltips" edge="1" parent="1" source="2" target="3"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="7" value="" edge="1" parent="1" source="3" target="4"><mxGeometry relative="1" as="geometry"/></mxCell></root></mxGraphModel>'
      var doc = MxUtils.parseXml(xml)
      var codec = new MxCodec(doc)
      codec.decode(doc.documentElement, graph.getModel())
    } finally {
      // Updates the display
      graph.getModel().endUpdate()
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
