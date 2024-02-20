const Index = () => {
    const value:string = "This is an example!";
    const jj = ()=>{
        let final= "";
        for(let i = value.length-1; i>-1 ; i--){
            final+=value[i]
        }
        return final
    }
console.log(jj())
    return (
        <div>
<p>
    check value:
</p>
        </div>
    );
};

export default Index;