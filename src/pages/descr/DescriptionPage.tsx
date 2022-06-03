import React from 'react';
import {useLocation} from "react-router-dom";

export interface IState {
    name: string
}

const DescriptionPage: React.FC = () => {
    const {state} = useLocation()
    const _state = state as IState

    return (
        <div>
            {_state.name}
        </div>
    );
};

export default DescriptionPage;