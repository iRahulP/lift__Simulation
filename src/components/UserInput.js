import React from 'react'
import './UserInput.css';
import { Button,Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const UserInput = (props) => {

    const [ floors, setFloors ]= useState('');
    const [ lifts, setLifts ]= useState('');

    const [loading, setLoading] = useState(false);

    const continueToNext = (e) => {
        e.preventDefault();
        
        setLoading(true)
        setTimeout(() => { 
            const check = floors && lifts;
            console.log(check);
            if (check){
                props.nextStep();
            }
            else{
                setFloors('');
                setLifts('');
            }    
            setLoading(false)
        }, 1000)
    }

    return (
            <form className="user-info" onSubmit={continueToNext}>
                <h3>Lift Simulation</h3>

                <div>
                    <label htmlFor="floors">
                        Enter Floors:
                    </label>
                    <input 
                        type="number" 
                        name="floors"
                        min='1' 
                        value={floors}
                        onChange={(e) => {
                            setFloors(e.target.value)
                        }}
                        required
                    />
                </div>
    
                <div>
                    <label htmlFor="lifts">
                        Enter Lifts:
                    </label>
                    <input 
                        type="number" 
                        name="lifts"
                        min='1' 
                        value={lifts}
                        onChange={(e) => {
                            setLifts(e.target.value)
                        }}
                        required
                        />
                </div>

                <Button 
                    variant="primary"
                    className="button"
                    disabled={ !floors || !lifts }
                    type="submit"
                >
                { !loading ?  
                    "Submit" 
                    : 
                     <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                } 
                </Button>
            </form>
        )
    }

export default UserInput;
