import React, { useState, FormEvent } from 'react';
import InputMask from 'react-input-mask';
import './FormBlock.css'


interface Errors {
    name?: string;
    phone?: string;
    isChecked?: string;
}

export const FormBlock: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validate = (): boolean => {
        const errors: Errors = {};
    
        if (!name) {
            errors.name = 'Имя обязательно для заполнения';
        } else if (/\d/.test(name)) {
            errors.name = 'Имя не должно содержать цифры';
        }
    
        if (!phone) {
            errors.phone = 'Телефон обязателен для заполнения';
        } else {
            // Удаление нецифровых символов из номера телефона
            const strippedPhone = phone.replace(/\D/g, '');
    
            if (strippedPhone.length !== 11) {
                errors.phone = 'Неправильный формат телефона';
            }
        }
    
        if (!isChecked) {
            errors.isChecked = 'Необходимо согласиться с условиями';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
    
    };
    
    


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await fetch('https://example.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, phone, isChecked }),
                });
                if (response.ok) {
                    setIsSubmitted(true);
                } else {
                    console.error('Ошибка при отправке данных');
                }
            } catch (error) {
                console.error('Ошибка при выполнении fetch:', error);
            }
        }
    };
    

    return (
        <section id='form' className='section__form'>
            <div className="container">
                <h2 className='zag__h2'>Отправить форму</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form__block_one'>
                        <div className={`form__control ${errors.name ? 'error' : ''}`}>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                placeholder='Имя'
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className={`form__control ${errors.phone ? 'error' : ''} form__control_margin`}>
                            <InputMask
                                mask="+7(999) 999-9999"
                                value={phone}
                                placeholder='Телефон'
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                id="phone"
                           />
                  
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                    </div>
                    <div className='form__block_two'>
                        <div className={`form__control ${errors.isChecked ? 'error' : ''}`}>
                            <label className='custom-checkbox'>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                Согласен, отказываюсь
                                <span className="checkmark"></span>
                            </label>
                            {errors.isChecked && <span className="error-message">{errors.isChecked}</span>}
                        </div>

                        <button className='form__btn form__control_margin' type="submit">Отправить</button>
                    </div>

                    {isSubmitted && <span className="success-message">Форма успешно отправлена!</span>}
                </form>
            </div>
        </section>
    );
};

