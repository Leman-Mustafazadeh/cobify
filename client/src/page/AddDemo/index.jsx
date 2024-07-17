import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import styles from "./index.module.scss"
import { Button } from '@mui/material';
import {useFormik} from "formik"
import { getAll, post } from '../../API';
import { Demo } from '../../classes/Demo';
import { Space, Table, Tag } from 'antd';
import { DemoValidationSchema } from '../../validation/DemoValidationSchema';
import { ContextDemo } from '../../context/DemoContext';
const AddDemo = () => {
const {demos,setDemos} = useContext(ContextDemo)
    const columns = [
        {
          title: 'imgSrc',
          dataIndex: 'imgSrc',
          key: 'imgSrc',
        },
        {
          title: 'price',
          dataIndex: 'price',
          key: 'price',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'title',
          key: 'title',
          dataIndex: 'title',
        
        },
     
      ];
    const formik = useFormik({
        initialValues:{
            imgSrc:'',
            price:'',
            name:'',
            title:''
        },
        onSubmit:(values)=>{
            const newDemo = new Demo(values.imgSrc,values.price,values.name,values.title)
            post(newDemo)
            console.log(newDemo);
            formik.resetForm()
            setDemos((current)=>[...current,newDemo])
            
        },
        validationSchema:DemoValidationSchema
        

    })
  return (
   <><form onSubmit={formik.handleSubmit}>
        <h1>Add Demo</h1>
      <TextField  onChange={formik.handleChange} name='imgSrc' value={formik.values.imgSrc}  className={styles.text} type='url' id="outlined-basic" label="imgSrc" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.imgSrc}</span>
      <TextField value={formik.values.price}  onChange={formik.handleChange} name='price' className={styles.text} type='number' id="outlined-basic" label="price" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.price}</span>
      <TextField value={formik.values.name}  onChange={formik.handleChange} name='name' className={styles.text} type='text' id="outlined-basic" label="name" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.name}</span>
      <TextField value={formik.values.title}  onChange={formik.handleChange} name='title' className={styles.text} type='text' id="outlined-basic" label="title" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.title}</span>
      <Button  variant='contained' type='submit'>Submit</Button>
    </form>




<Table columns={columns} dataSource={demos} />;</> 
  )
}

export default AddDemo
