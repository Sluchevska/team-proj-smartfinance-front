import React, { Component } from 'react';
import styles from './CreditInputs.module.css';

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
                            placeholder='Описание товара'
                            value={inputValue}
                            onChange={this.handleChange}
                        />
                        <select className={styles.select} >
                            <option value='' disabled selected>Категория товара</option>
                            <option>Транспорт</option>
                            <option>Продукты</option>
                            <option>Здоровье</option>
                            <option>Алкоголь</option>
                            <option>Развлечения</option>
                            <option>Всё для дома</option>
                            <option>Техника</option>
                            <option>Коммуналка, связь</option>
                            <option>Спорт, хобби</option>
                            <option>Образование</option>
                            <option>Прочее</option>
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