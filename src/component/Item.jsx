import s from './Items.module.css'
import styled from "styled-components";

const Items = ({id, text, isCompleted, toggleCompleted, deleteToDo}) => {
    const StyledForItem = styled.div`
      margin-top: 1rem;
  display: flex;
      &:hover{
        cursor: pointer;
      }
      padding: 1rem;
`;
    const StyledForItemDelete = styled.div`
      margin-left: 2rem;
      background-color: red;
      color: #fff;
      padding-top: 3px;
      text-align: center;
      vertical-align: center;
      padding-bottom: 3px;
      padding-left: 6px;
      padding-right: 6px;
      border-radius: 3px;

`;
    const TextDiv = styled.div`
        text-wrap: normal;
`;
    return (
        <>
        <StyledForItem props={'erf'}>
            <TextDiv onClick={() => toggleCompleted(id)} className={isCompleted ? `${s.er}` : null}>
                {text}
            </TextDiv>
            <StyledForItemDelete onClick={() => {
                deleteToDo(id)
            }}>Х
            </StyledForItemDelete>
        </StyledForItem>
        </>
    )

}

export default Items;