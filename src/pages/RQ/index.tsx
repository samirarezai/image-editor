import {useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchTodoList} from "@/services/rqApi";


const Index = () => {

    // Queries
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetchTodoList(),
    })

    console.log(data)

    return (
        <div>
            fsdf
        </div>
    );
};

export default Index;