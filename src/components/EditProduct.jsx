import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { adminContext } from '../contexts/AdminContext';
import { useHistory, useParams } from 'react-router';

const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editKgApple, setEditKgApple] = useState(productToEdit)
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        setEditKgApple(productToEdit)
    }, [productToEdit])

    useEffect(() => {
        getProductToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editKgApple,
            [e.target.name]: e.target.value
        }
        setEditKgApple(obj)
    }
    return (
        <div>
            {
                editKgApple ? (
                    <div className="add-inputs">
                        <form>
                            <TextField value={editKgApple.title} id="standard-basic" label="Название ноутбука" name="title" onChange={handleInputs} />
                            <TextField value={editKgApple.description} id="standard-basic" label="Описание ноутбука" name="description" onChange={handleInputs} />
                            <TextField type="number" value={editKgApple.price} id="standard-basic" label="Цена ноутбука" name="price" onChange={handleInputs} />
                            <TextField type="date" value={editKgApple.year} id="standard-basic" label="Дата выпуска ноутбука" name="year" onChange={handleInputs} />

                            <TextField value={editKgApple.color} id="standard-basic" label="Цвет ноутбука" name="color" onChange={handleInputs} />
                            <TextField value={editKgApple.photo} id="standard-basic" label="Модель ноутбука" name="photo" onChange={handleInputs} />
                            <TextField value={editKgApple.brand} id="standard-basic" label="Бренд ноутбука" name="brand" onChange={handleInputs} />
                            <Button
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (
                                        !editKgApple.title.trim() ||
                                        !editKgApple.description.trim() ||
                                        // !editKgApple.price.trim() ||
                                        !editKgApple.color.trim() ||
                                        !editKgApple.photo.trim() ||
                                        !editKgApple.brand.trim() ||
                                        !editKgApple.year.trim()
                                    ) {
                                        alert("Заполните все поля")
                                        return
                                    }
                                    saveEditedProduct(editKgApple)
                                    history.push('/admin')
                                }}
                                variant="outlined"
                                color="primary"
                            >
                                Сохранить изменения
                            </Button>
                        </form>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>

    );
};

export default EditProduct;