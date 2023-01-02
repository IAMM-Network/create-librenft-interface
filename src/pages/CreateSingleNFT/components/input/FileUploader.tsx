import React from 'react';
import styled from 'styled-components';

interface fileUploaderProps {
  handleFile: any
  accept?: string
  placeholder?: string
  disabled?: boolean
}

const Button = styled.button<{disabled?: boolean}>`
    background: transparent;
    border: 1px solid #8b40f4;
    border-color: ${props => props.disabled ? '#696969' : '#8b40f4'};
    border-radius: 8px;
    box-sizing: border-box;
    color: white;
    margin-top: 0.5rem;
    padding: 1rem;
    text-align: left;

    ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props => props.disabled ? '#696969' : 'white'};
    opacity: 1; /* Firefox */
    }
`;
const FileUploader: React.FC<fileUploaderProps> = props => {
  const hiddenFileInput: React.RefObject<HTMLInputElement> = React.createRef();
  const handleClick = () => {
      hiddenFileInput.current!.click();
  };
  const handleChange = (event:any) => {
    props.handleFile(event);
  };
  return (
    <>
      <Button disabled={props.disabled} onClick={handleClick}>
        {props.placeholder}
      </Button>
      <input 
             disabled={props.disabled}
             type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
             accept={props.accept}
             placeholder={props.placeholder}
      /> 
    </>
  );
};

export default FileUploader;