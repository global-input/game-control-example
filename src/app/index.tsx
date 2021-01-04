import React from "react";

import { useConnectMobile, ConnectWindow, ConnectButton } from './mobile-ui';
import { PageContainer, Title, P, DisplayCanvas, A, AppFooter, MessageButton, MessageLink } from './app-layout';
import * as game from "./game";

const App: React.FC = () => {
    const {mobile,listeners} = useConnectMobile();

    const onCanvas = (canvas: any) => {
        game.initGame(canvas, listeners);
    };

    return (
        <PageContainer>
            <Title>Global Input App Mobile Control Example</Title>
            <MessageLink href="https://github.com/global-input/game-control-example">Source Code</MessageLink>
            <ConnectButton mobile={mobile}/>
            <ConnectWindow mobile={mobile}/>
                <DisplayCanvas onCanvas={onCanvas} />

        </PageContainer>
    );
}


export const DisplayApplicationInfo = () => (
    <P>
        This example application (with <A href="https://github.com/global-input/game-control-example">its source code</A>) demonstrates how web applications can use the <A href="https://github.com/global-input/global-input-react">extension library</A> to implement <a href="https://globalinput.co.uk/global-input-app/mobile-input-control">mobile control</a> as part of the mobile integration.
    </P>
);
export default App;