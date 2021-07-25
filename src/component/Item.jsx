import s from './Items.module.css'
const Items = ({id, text, isCompleted, toggleCompleted}) => {
        return (
            <div onClick={() =>{toggleCompleted(id)}} className={isCompleted ? `${s.er}`: null} >
                {text}
            </div>
        )

}

export default Items;