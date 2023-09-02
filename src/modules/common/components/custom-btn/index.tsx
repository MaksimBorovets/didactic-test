import { ButtonContainer } from './styles';

interface ICustomButtonProps {
  btnText: string;
  onClick: () => void;
  disabled?: boolean;

}

function CustomButton({ btnText, disabled, onClick}: ICustomButtonProps) {

  return (
    <ButtonContainer disabled={disabled || false} onClick={onClick} >
      {btnText}
    </ButtonContainer>
  );
}

export default CustomButton;
