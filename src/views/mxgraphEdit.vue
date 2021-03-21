<template>
  <div>
    <div>
      <button small color="primary" @click="save">保存</button>
      <button small color="primary" @click="clear">清空</button>
    </div>
    <div ref="container" class="custom-container" />
  </div>
</template>

<script>
import mxgraph from '@/utils/mxgraph'
const { mxGraph, mxGraphModel, mxUtils, mxCell, mxToolbar, mxGeometry, mxEvent, mxCodec } = mxgraph
const MxGraph = mxGraph
const MxGraphModel = mxGraphModel
const MxUtils = mxUtils
const MxCell = mxCell
const MxToolbar = mxToolbar
const MxGeometry = mxGeometry
const MxEvent = mxEvent
const MxCodec = mxCodec

export default {
  name: 'MxgraphEdit',
  data() {
    return {
      model: null,
      graph: null
    }
  },
  mounted() {
    const json = localStorage.getItem('mxgraphjson') ? JSON.parse(localStorage.getItem('mxgraphjson')) : {}
    const xml = this.$x2js.js2xml(json)
    console.log(xml)
    console.log(json)

    console.log('MxgraphEdit')
    // 创建一个div作为toolbar的容器
    const tbContainer = document.createElement('div')

    tbContainer.style.position = 'absolute'
    tbContainer.style.overflow = 'hidden'
    tbContainer.style.padding = '2px'
    tbContainer.style.left = '0px'
    tbContainer.style.top = '0px'
    tbContainer.style.width = '24px'
    tbContainer.style.bottom = '0px'
    this.$refs.container.appendChild(tbContainer)
    // 创建一个mxToolbar
    const toolbar = new MxToolbar(tbContainer)

    toolbar.enabled = false
    // 创建一个div作为graph的容器
    const container = document.createElement('div')

    container.style.position = 'absolute'
    container.style.overflow = 'hidden'
    container.style.left = '24px'
    container.style.top = '0px'
    container.style.right = '0px'
    container.style.bottom = '0px'
    container.style.background = 'url("./mxgraph/images/grid.gif")'
    this.$refs.container.appendChild(container)
    this.model = new MxGraphModel()
    this.graph = new MxGraph(container, this.model)
    this.graph.setConnectable(true)
    this.graph.setMultigraph(false)

    const addVertex = (icon, w, h, style) => {
      const vertex = new MxCell(null, new MxGeometry(0, 0, w, h), style)

      vertex.setVertex(true)
      const img = this.addToolbarItem(this.graph, toolbar, vertex, icon)

      img.enabled = true
      this.graph.getSelectionModel().addListener(MxEvent.CHANGE, () => {
        const tmp = this.graph.isSelectionEmpty()

        MxUtils.setOpacity(img, (tmp) ? 100 : 20)
        img.enabled = tmp
      })
    }

    addVertex('./mxgraph/images/rectangle.gif', 100, 40, '')
    addVertex('./mxgraph/images/rounded.gif', 100, 40, 'shape=rounded')
    addVertex('./mxgraph/images/ellipse.gif', 40, 40, 'shape=ellipse')
    addVertex('./mxgraph/images/rhombus.gif', 40, 40, 'shape=rhombus')
    addVertex('./mxgraph/images/triangle.gif', 40, 40, 'shape=triangle')
    addVertex('./mxgraph/images/cylinder.gif', 40, 40, 'shape=cylinder')
    addVertex('./mxgraph/images/actor.gif', 30, 40, 'shape=actor')

    var doc = MxUtils.parseXml(xml)
    var codec = new MxCodec(doc)
    codec.decode(doc.documentElement, this.graph.getModel())
  },
  methods: {
    addToolbarItem(graph, toolbar, prototype, image) {
      const funct = function(graph, evt, cell, x, y) {
        graph.stopEditing(false)
        const vertex = graph.getModel().cloneCell(prototype)

        vertex.geometry.x = x
        vertex.geometry.y = y

        graph.addCell(vertex)
        graph.setSelectionCell(vertex)
      }
      const img = toolbar.addMode(null, image, function(evt, cell) {
        const pt = this.graph.getPointForEvent(evt)

        funct(graph, evt, cell, pt.x, pt.y)
      })

      MxEvent.addListener(img, 'mousedown', function(evt) {
        if (img.enabled === false) {
          MxEvent.consume(evt)
        }
      })
      MxUtils.makeDraggable(img, graph, funct)
      return img
    },
    save() {
      const codec = new MxCodec()
      const encodedModel = codec.encode(this.graph.getModel())
      const xml = mxUtils.getXml(encodedModel)
      const json = this.$x2js.xml2js(xml)
      localStorage.setItem('mxgraphxml', xml)
      localStorage.setItem('mxgraphjson', JSON.stringify(json))
      console.log(xml)
      console.log(json)
    },
    clear() {
      localStorage.removeItem('mxgraphxml')
      localStorage.removeItem('mxgraphjson')
      const json = localStorage.getItem('mxgraphjson') ? JSON.parse(localStorage.getItem('mxgraphjson')) : {}
      const xml = this.$x2js.js2xml(json)
      console.log(xml)
      console.log(json)
      this.graph.removeCells(this.graph.getChildVertices(this.graph.getDefaultParent()))
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
