import {useAddPostMutation, useGetAllPokemonQuery} from "@/services/pokemon/api.ts";
import {useNavigate} from "react-router-dom";


const Index = () => {
    const {data, error, isLoading} = useGetAllPokemonQuery('1');
    const [addPost] = useAddPostMutation();
    const navigate = useNavigate();

    return (
        <div>
            <button
                style={{background: "red", color: "white", padding: "10px", borderRadius: "10px"}}
                onClick={() => addPost({
                    "userId": 1,
                    "title": "samsam",
                    "body": "hello samsam"
                }).unwrap()
                    .then(() => {
                        navigate("/")
                    })
                    .catch(() => {
                    })}>
                add
            </button>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {
                        data.map((item, i) => <h3 key={i}>{item.title}</h3>)
                    }

                    {/*<img src={data.sprites.front_shiny} alt={data.body} />*/}
                </>
            ) : null}
        </div>
    );
};

export default Index;