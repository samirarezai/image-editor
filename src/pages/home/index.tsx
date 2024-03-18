import {useState} from "react";
import DrawApp from "@/features/drawApp";
import Tools from "@/features/tools";
import CropTool from "@/features/crop/cropTool.tsx";
import Upload from "@/features/upload";

const Index = () => {
    const [imgSrc, setImgSrc] = useState('');
    const [tool, setTool] = useState('');
    return (
        <div className="p-2">
            <div className="mb-3">
                <div className="mb-3">
                    <Upload setImgSrc={setImgSrc}/>
                </div>
                
                <div>
                    <Tools tool={tool} setTool={setTool}/>
                </div>
            </div>

            <div>
                {(tool === "" && !!imgSrc) ? <img
                    // ref={imgRef}
                    alt="Crop me"
                    src={imgSrc}
                    // style={{transform: `scale(${scale}) rotate(${rotate}deg)`}}
                    // onLoad={onImageLoad}
                /> : ""}
                {tool === "crop" ? <CropTool imgSrc={imgSrc} setImgSrc={setImgSrc} setTool={setTool}/> : ""}

            </div>
<div>
    <DrawApp/>
</div>
            <div>
                <div style={{fontSize: 12, color: '#666'}}>
                    If you get a security error when downloading try opening the
                    Preview in a new tab (icon near top right).
                </div>
                <a
                    href={imgSrc}
                    // ref={hiddenAnchorRef}
                    download="image.png"
                    style={{
                        // position: 'absolute',
                        // top: '-200vh',
                        // visibility: 'hidden',
                    }}
                >
                    Hidden download
                </a>
            </div>

        </div>
    );
};

export default Index;