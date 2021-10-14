import { TextField, Button } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';


const AddProduct = () => {
    const [kgApple, setKgApple] = useState({
        title: "",
        description: "",
        price: "",
        year: "",
        color: "",
        photo: "",
        brand: ""
    })
    const { createProduct } = useContext(adminContext)

    function handleInputs(e) {
        let newProduct = {
            ...kgApple,
            [e.target.name]: e.target.value
        }
        setKgApple(newProduct)
    }

    // console.log(kgApple)

    return (
        <div>
            <div className="add-inputs">
                <form>
                    <TextField value={kgApple.title} id="standard-basic" label="Название ноутбука" name="title" onChange={handleInputs} />
                    <TextField value={kgApple.description} id="standard-basic" label="Описание ноутбука" name="description" onChange={handleInputs} />
                    <TextField type="number" value={kgApple.price} id="standard-basic" label="Цена ноутбука" name="price" onChange={handleInputs} />
                    <TextField type="number" value={kgApple.year} id="standard-basic" label="Дата выпуска ноутбука" name="year" onChange={handleInputs} />
                    <TextField value={kgApple.color} id="standard-basic" label="Цвет ноутбука" name="color" onChange={handleInputs} />
                    <TextField value={kgApple.photo} id="standard-basic" label="Фото ноутбука" name="photo" onChange={handleInputs} />
                    <TextField value={kgApple.brand} id="standard-basic" label="Бренд ноутбука" name="brand" onChange={handleInputs} />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !kgApple.title.trim() ||
                                !kgApple.description.trim() ||
                                !kgApple.price.trim() ||
                                !kgApple.color.trim() ||
                                !kgApple.photo.trim() ||
                                !kgApple.brand.trim() ||
                                !kgApple.year.trim()) {
                                alert("Заполните")
                                return
                            }else{
                            createProduct({
                                title: kgApple.title.trim(),
                                description: kgApple.description.trim(),
                                price: kgApple.price.trim(),
                                color: kgApple.color.trim(),
                                photo: kgApple.photo.trim(),
                                brand: kgApple.brand.trim(),
                                year: kgApple.year.trim()
                            })

                            }
                        }}
                        variant="outlined"
                        color="primary"
                    >
                        Создать
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;