import {useQuery, useQueryClient} from "react-query";


const Index = () => {
    const queryClient = useQueryClient()

    // Queries
    const query = useQuery('todos', getTodos)

    return (
        <div>

        </div>
    );
};

export default Index;