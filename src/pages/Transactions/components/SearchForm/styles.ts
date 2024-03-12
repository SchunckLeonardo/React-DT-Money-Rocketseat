import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${p => p.theme['gray-900']};
        color: ${p => p.theme['gray-300']};
        padding: 1rem;

        &::placeholder {
            color: ${p => p.theme['gray-500']};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        border: 1px solid ${p => p.theme['green-300']};
        color: ${p => p.theme['green-300']};
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;
        transition: all.2s;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        &:not(:disabled):hover {
            color: ${p => p.theme['white']};
            background: ${p => p.theme['green-500']};
            border-color: ${p => p.theme['green-500']};
        }
    }
`