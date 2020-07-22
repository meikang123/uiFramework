
import Subhead from './modules/subhead'
import ContentLayout from './modules/contentLayout'

const commonComponents = [
  Subhead,
  ContentLayout
]

const install = (Vue) => {
  commonComponents.map(v => {
    Vue.component(v.name, v)
  })
}

export default install