import {Dispatch, SetStateAction} from "react";

interface propsList {
    setTool: Dispatch<SetStateAction<string>>;
}

const Index = ({setTool}:propsList) => {
    return (
        <div>
            <label htmlFor="cars">Choose:</label>

            <select name="cars" id="cars" onChange={(e)=>{
                setTool(e.target.value)
            }}>
                <option value="crop">crop</option>
                <option value="scale">scale</option>
                {/*<option value="rotate">rotate</option>*/}
                {/*<option value="audi">Audi</option>*/}
            </select>
        </div>
    );
};

export default Index;