import styled from "styled-components";

export const StyledToggleSwitch = styled.label`
  // Used https://www.w3schools.com/howto/howto_css_switch.asp
  // to make a custom toggle switch
  & {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 22px;
  }

  /* Hide default HTML checkbox */
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.inactiveToggleSwitch};
    transition: 0.3s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.activeToggleSwitch};
  }

  input:focus + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.activeToggleSwitch};
  }

  input:checked + span:before {
    transform: translateX(22px);
  }
`;
