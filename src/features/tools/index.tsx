import {Dispatch, SetStateAction} from "react";

interface propsList {
    setTool: Dispatch<SetStateAction<string>>;
    tool:string;
}

const Index = ({tool,setTool}:propsList) => {
    return (
        <div>
            <label htmlFor="cars">Choose:</label>

            <select name="cars" id="cars" value={tool} onChange={(e) => {
                setTool(e.target.value)
            }}>
                <option value=""></option>
                <option value="crop">crop</option>

                {/*<option value="rotate">rotate</option>*/}
                {/*<option value="audi">Audi</option>*/}
            </select>
        </div>
    );
};

export default Index;