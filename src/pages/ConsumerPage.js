import React from 'react';
import {ThemeConsumer } from '../ContextProvider';

function ConsumerPage() {
    return (
        <div>
            <ThemeConsumer>
                {
                    ctx => 
                    <div style={{color: ctx.color}}>文本</div>
                }

            </ThemeConsumer>
            

        </div>
    )
}

export default ConsumerPage;
