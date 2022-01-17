import React, { Component } from 'react';
import styles from './DebitInputs.module.css';

export default class IncomeForm extends Component {
    state = {
        inputValue: '',
    };

    handleChange = e => {
        this.setState({
            inputValue: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { inputValue } = this.state;
        const { onSubmit } = this.props;
        onSubmit(inputValue);

        this.setState({
            inputValue: '',
        });
    };
    render() {
        const { inputValue } = this.state;
        return (
            <>
                <form action="" className={styles.form} onSubmit={this.handleSubmit}>
                    <div className={styles.div}>
                        <input
                            className={styles.descriptionInput}
                            type="text"
                            name="description"
                            placeholder='Описание дохода'
                            value={inputValue}
                            onChange={this.handleChange}
                        />
                        <select className={styles.select}>
                            <option value='' disabled selected>Категория дохода</option>
                            <option>ЗП</option>
                            <option>Доп.доход</option>
                            <option>Наследство</option>
                            <option>Казино</option>
                        </select>
                        {inputValue.length === 0 && (
                            <span className={styles.placeholder}>

                            </span>

                        )}
                    </div>
                    <input
                        className={styles.amountInput}
                        type="text"
                        name="amount"
                        placeholder="0.00"
                    />
                    <div className={styles.border}></div>
                    <div className={styles.iconCalculator}></div>
                </form>
            </>
        );
    }
}
