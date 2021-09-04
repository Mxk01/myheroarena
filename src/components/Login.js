import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login</h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>
                        <Button className='w-100'type='submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text center mt-2'>
                Need an account? <Link to='/sign-up'>Sign Up</Link>
            </div>
         </div>
    )
}

export default Login