import React,{useState,useCallback} from 'react';
import styled from "styled-components"
import {backAddress} from "../back"

const BackgroundZoomImg = styled.div`
    display:flex;
    item-align:center;
    justify-content:center;
    position:fixed;
    top:0;
    left:0;
    widht:100%;
    height:100%;
    background-color:rgba(0,0,0,0.9);
`

function ZoomImg({images,onZoomToggle}){
    const [curIdx,setCurIdx] = useState(0);
    console.log("idx",curIdx,images);

    const getNextIdx = useCallback((e)=>{
        e.stopPropagation();
        console.log("click");
        setCurIdx((curIdx+1)%images.length);
    },[curIdx]);

    return (
        <BackgroundZoomImg onClick={onZoomToggle}>   
            <img src={`${backAddress}/${images[curIdx].src}`} onClick={getNextIdx} alt=""/>
        </BackgroundZoomImg>
    )
}

export default ZoomImg;