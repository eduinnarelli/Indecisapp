import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>

        <div className="widget-header">

            <h3 className="widget-header__title">Suas Opções</h3>

            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remover Tudo
            </button>
            
        </div>


        {props.options.length == 0 && 

            <p className="widget__message">
                Adicione uma opção para começar!
            </p>

        }

        {
            props.options.map( (opt, index) =>
                <Option
                    key={opt}
                    optionText={opt}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )
        }

    </div>
);

export default Options;