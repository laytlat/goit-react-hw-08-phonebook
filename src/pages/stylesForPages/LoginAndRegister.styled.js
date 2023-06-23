import styled from '@emotion/styled';

export const StyledTitle = styled.h2`
  font-size: 30px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px;

  background-color: #deeafc;

  border-radius: 4px;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;

  font-size: 22px;
`;
export const StyledInput = styled.input`
  width: 200px;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;

  font-size: 20px;

  border-radius: 6px;

  :hover,
  :focus {
    color: red;
  }
`;
