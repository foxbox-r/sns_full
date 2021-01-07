import React from 'react';
import "antd/dist/antd.css"
import wrapper from "../store/configureStore"
import withReduxSaga from "next-redux-saga";

function _app({Component}){

    return (
        <>
            <Component />
        </>
    )
}

export default wrapper.withRedux(withReduxSaga(_app));