import React, {Dispatch, SetStateAction} from "react";

interface propsList {
    setImgSrc: Dispatch<SetStateAction<string>>;
}

const Index = ({setImgSrc}: propsList) => {

    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={onSelectFile}/>
        </div>
    );
};

export default Index;