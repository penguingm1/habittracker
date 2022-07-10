import React, { useState, useContext } from 'react';
import { MainPageTheme } from './Mainpage';
import { format,parseISO } from 'date-fns'

const ScheduleForm = (props) => {

    const mainPageTheme = useContext(MainPageTheme)
    let selectedDay = format(mainPageTheme.selectedDay, 'dd-MMM');

    const [type, setType] = useState(''); 
    const [scheduleName, setScheduleName] = useState('');
    const [scheduleImportance, setScheduleImportance] = useState('');
    // const [scheduleGenre, setScheduleGenre] = useState('');
    // const [scheduleTarget, setScheduleTarget] = useState('');
    // const [scheduleDays, setScheduleDays] = useState('');

    // const handleChecked = (id) => {
    //     console.log("ok")
    //     setType(id)
    // }

    const titleChangeHandler = (event) =>{
        setScheduleName(event.target.value);
    }
    // const genreChangeHandler = (event) =>{
    //     setScheduleGenre(event.target.value);
    // }
    // const targetChangeHandler = (event) =>{
    //     setScheduleTarget(event.target.value);
    // }
    // const daysChangeHandler = (event) =>{
    //     setScheduleDays(event.target.value);
    // }

    const importanceChangeHandler = (event) =>{
        setScheduleImportance(event.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        const scheduleData = {
            name: scheduleName,
            type: upperFirstLetter(type),
            date: mainPageTheme.selectedDay.getTime(),
        }

        function upperFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        

        const scheduleObject = {
            ...scheduleData, 
            // id: Math.random().toString()
        }
        props.onNewSchedule(scheduleObject);

        console.log("scheduleobject: ", scheduleObject)

        
        

        setScheduleName('');
        setType('')
        // setScheduleGenre('');
        // setScheduleTarget('');
        // setScheduleDays('');
        // setScheduleImportance('');
    }

    return (
        <form className="form__content" onSubmit={submitHandler}>
            <div className="form__title">
                <span>New schedule for {selectedDay}</span>
            </div>
            <div className="form__query--1">
                <label>What's your schedule name?</label>
                <input type="text" placeholder="Playing sport, do exercise, eat clean..." className="queryform__style--1" onChange={titleChangeHandler} value={scheduleName}/>
            </div>
            <div className="form__checkbox--1">
                <input type="checkbox"/>
                <label className="queryform__style--1">Send notification automatically</label>
            </div>
            {/* <div className="form__query--1 mt-32">
                <label>Type of schedule:</label>
                <input type="text" placeholder="Deadline, regular activities..." className="queryform__style--1" onChange={importanceChangeHandler} value={scheduleImportance}/>
            </div> */}
            <div className="form__radio mt-32">
                <span>Task type: </span>
                
                <div className="radio__container">
                    <label className="radio__label">
                        <input type="radio" name="tasktype" onChange={() => setType('deadline')} value = {type === 'deadline'} checked = {type === 'deadline'}/>
                        <span className="radio__design"></span>
                        <span className="radio__text">Deadline</span>
                    </label>
                    
                    <label className="radio__label">
                        <input type="radio" name="tasktype" onChange={() => setType('event')} value = {type === 'event'} checked = {type === 'event'}/>
                        <span className="radio__design"></span>
                        <span className="radio__text">Event</span>
                    </label>
                    
                    <label className="radio__label">
                        <input type="radio" name="tasktype" onChange={() => setType('other')} value = {type === 'other'} checked = {type === 'other'}/>
                        <span className="radio__design"></span>
                        <span className="radio__text">Other</span>
                    </label>
                </div>
            </div>
            <div className="form__apply">
                <button className='form__apply--btn' type='submit'>
                    <span>Add new schedule</span>
                </button>
            </div>
        </form>
    )
        
}

export default ScheduleForm;