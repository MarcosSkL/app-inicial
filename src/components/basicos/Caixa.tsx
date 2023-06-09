export default function Caixa(props: any) {
    return (
        <div className={`
                bg-purple-400 flex 
                justify-center items-center 
                rounded-md w-64 h-64 text-5xl font-bold 
        `}>
            {props.children}
        </div>
    )
}