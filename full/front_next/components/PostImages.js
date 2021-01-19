import React,{useCallback,useState} from 'react';
import {PlusOutlined} from "@ant-design/icons"
import ZoomImg from "../my_utils/ZoomImg"
import {backAddress} from "../back"

function PostImages({images}){
    const [isZoom,setIsZoom] = useState(false);

    const onZoomToggle = useCallback(()=>{
        console.log("togge");
        setIsZoom(prev=>!prev);
    },[])

    let html_imgs;

    if(images.length === 1) html_imgs = <img role="presentation" src={`${backAddress}/${images[0].src}`} alt={images[0].src} onClick={onZoomToggle} />;
    if(images.length === 2)
     html_imgs = (
        <>
            <img style={{display:"inline-block",width:"50%"}} onClick={onZoomToggle} src={`${backAddress}/${images[0].src}`} alt=""/>
            <img style={{display:"inline-block",width:"50%"}} onClick={onZoomToggle} src={`${backAddress}/${images[1].src}`} alt=""/>
        </>);
    if(images.length > 2)
     html_imgs = (
        <>
        <img style={{display:"inline-block",width:"50%"}} onClick={onZoomToggle} src={`${backAddress}/${images[0].src}`} alt=""/>
        <div
            role="presetation"
            style={{display:"inline-block",width:"50%",textAlign:"center",verticalAlign:"middle"}}
            onClick={onZoomToggle}
        >
            <PlusOutlined />
            <br/>
            {images.length-1}의 사진 더보기
        </div>
    </>
     );
   
    return (
    <>
        {isZoom && <ZoomImg images={images} onZoomToggle={onZoomToggle} />}
        {html_imgs}
    </>
    )
}

export default PostImages;