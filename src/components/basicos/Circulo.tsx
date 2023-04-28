interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: any) {
    return (
        <div className={`
            flex font-black justify-center 
            items-center h-64 w-64 
            text-1xl bg-cyan-500 rounded-full
            ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.texto}

        </div>
    )
    
}