
interface Props {
    children?:any
    isTrue:boolean;
}

const RenderConditional: React.FC<Props> = ({children, isTrue}) => {
        return isTrue ? children : null
}

export default RenderConditional