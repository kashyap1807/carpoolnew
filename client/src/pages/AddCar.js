import { Col, Input, Row, Form } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addCar } from '../redux/actions/carsActions'

function AddCar() {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alertsReducer)

    function onFinish(values) {

        values.bookedTimeSlots= []
        dispatch(addCar(values))
        console.log(values)
    }


    return (

        <DefaultLayout>

            {loading && (<Spinner />)}

            <Row justify="center mt-5">

                <Col lg={12} sm={24} xs={24}  className='p-2'>
                    <Form className="bs1 p-2" layout='vertical' onFinish={onFinish}>

                        <h3>Publish A Ride </h3>
                        <hr />

                        <Form.Item name="name" label="Car name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="image" label="Image Url" >
                        {/* rules={[{ required: true }]} */}
                            <Input />
                        </Form.Item>

                        <Form.Item name="rentPerHour" label="Rent per hour /-" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="starting" label="Starting point" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="destination" label="Destination" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="capacity" label="Capacity" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="fuelType" label="Fuel Type" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <div className='text-right'>

                            <button className="btn1">ADD RIDE</button>

                        </div>

                    </Form>
                </Col>

            </Row>

            <br />
            <br />

        </DefaultLayout>
    )
}

export default AddCar

