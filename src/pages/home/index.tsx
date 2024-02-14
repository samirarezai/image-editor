import CropTool from "@/features/crop/cropTool.tsx";
import Upload from "@/features/upload";
import {useState} from "react";
import Tools from "@/features/tools";

const Index = () => {
    const [imgSrc, setImgSrc] = useState('');
    const [tool, setTool] = useState('crop');
    return (
        <div className="p-2">
            <div className="mb-3">
                <div className="mb-3">
                    <Upload setImgSrc={setImgSrc}/>
                </div>
                
                <div>
                    <Tools setTool={setTool}/>
                </div>
            </div>

            <div>
                {tool === "crop" ? <CropTool imgSrc={imgSrc}/> : ""}
            </div>

        </div>
    );
};

export default Index;