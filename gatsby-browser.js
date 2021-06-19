import {createStore as reduxCreateStore } from "redux"
const React = require("react")
const { Provider } = require("react-redux")



 const wrapRootElement = ({ element }) => {
    
        const reducer = (state, action) => {
            if (action.type === `INCREMENT`) {
              return Object.assign({}, state, {
                count: state.count + 1,
              })
            }
            return state
          }
          
          const initialState = { count: 0 }
          
          const createStore = () => reduxCreateStore(reducer, initialState)
          const store = createStore()

  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}

export default wrapRootElement;