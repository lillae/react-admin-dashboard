import React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';

const EditableRow = ({ editForm, saveEditHandler, cancelHandler }) => {
  return (
    <StyledRow>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter name'
          value={editForm.name}
          name='name'
          onChange={saveEditHandler}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='Enter description'
          value={editForm.Description}
          name='Description'
          onChange={saveEditHandler}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='$'
          name='Price'
          value={editForm.Price}
          onChange={saveEditHandler}
        />
      </td>
      <td>
        <input
          type='text'
          required='required'
          placeholder='%'
          name='Discount'
          value={editForm.Discount}
          onChange={saveEditHandler}
        />
      </td>
      <td>
        <Button type='submit' className='btn save' outlined={true}>
          Save
        </Button>
        <Button
          type='button'
          className='btn cancel'
          outlined={true}
          onClick={cancelHandler}
        >
          Cancel
        </Button>
      </td>
    </StyledRow>
  );
};

const StyledRow = styled.tr`
  max-width: 700px;
  width: 100%;
  margin: 0px auto;
  input {
    width: 100%;
  }
  td {
    max-width: 100%;
  }
  .btn {
    width: 100%;
    margin-bottom: 5px;
  }
  .save,
  .cancel {
    background: #00000026;
    color: white;
    &:hover {
      background: #ffffff0d;
      color: white;
      border: 1px solid #5638ec;
      transition: color 200ms ease-in-out;
    }
  }
`;

export default EditableRow;
