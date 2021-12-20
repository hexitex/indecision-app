import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModel';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    // handle delete all options
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    // handle delete one options
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option
            )
        }))

    };
    // handle picking options
    handlePick = () => {

        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.state.selectedOption = option;
        this.setState(() => ({
            selectedOption: option
        })
        )
    };
    // handle Adding otions
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid Value!'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        })
        )
    };
    handleModalOkay = (e) => {
        this.setState(() => ({ selectedOption: undefined }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }

        } catch (error) {

        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            //    console.log('Comp did update')
        }
    }
    componentWillUnmount() {
        console.log('comp will unmount')
    }

    render() {

        const subTitle = "Put your life in the hands of a computer!";

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />

                        <AddOptions
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>
                <OptionModal handleModalOkay={this.handleModalOkay} selectedOption={this.state.selectedOption} />
            </div>
        )
    }
};
export default IndecisionApp;