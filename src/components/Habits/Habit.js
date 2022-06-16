import React from "react";
import Checkbox from "./Checkbox";
import fire from "../../img/fire.png";
import { useState, useEffect } from 'react';
import medal from "../../img/gold-medal.png";
import calendar from "../../img/calendar.png";

const Habit = (props) =>{
    // const [weeks, setWeeks] = useState(props.weeks)


    // const onAddWeek = () =>{
    //     setWeeks(weeks+1);
    // }

    const [checkedId, setCheckedId] = useState([])
    

    const addId = (id) => {
        setCheckedId((prevIds) =>{
            return [...prevIds, id]
        })
        console.log("after setchecked")
    }

    useEffect(() => {
        let habitObject = {
            name: props.name,
            id: props.id,
            checkedId: checkedId
        }

        props.onUpdateChecked(props.habit, checkedId);

    },[checkedId, props.id, props.name]);

    const removeId = (id) => {
        setCheckedId(
           checkedId.filter((item) => item !== id)
        )
        // props.removeDay(id);
    }

    // console.log("checkedId: ", checkedId)

    return (
        <React.Fragment key = {`habit-${props.id}`}>
            <div className="habitname__container" >
                <div className="habit__name">
                    <span>{props.name}</span>
                </div>
                <div className="habit__button">
                    <div className="habit__button--add">
                        <button className="weekadd" 
                        // onClick={onAddWeek}
                        >
                            Add a week
                        </button>
                    </div>
                </div>
            </div>
            <div className="habit__checkboxes--container">
                {/* {[...Array(weeks)].map((e, i) =>( */}
                    <>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id*7-6}`} id={`${props.daterange[0]}-${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id*7-5}`} id={`${props.daterange[1]}-${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id*7-4}`} id={`${props.daterange[2]}-${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id*7-3}`} id={`${props.daterange[3]}-${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id*7-2}`} id={`${props.daterange[4]}-${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id*7-1}`} id={`${props.daterange[5]}-${props.name}`}></Checkbox>
                        <Checkbox checkedId = {checkedId} daterange = {props.daterange} onAddId = {addId} onRemoveId = {removeId} key={`box-${props.id*7}`} id={`${props.daterange[6]}-${props.name}`}></Checkbox>
                    </>   
                {/* ))} */}
            </div>
            <div className="habit__info" >
                <div className="current__container">
                    <div className="current__img">
                        <img src={fire} alt=""/>
                    </div>
                    <div className="current__data">
                        <span>03</span>
                    </div>
                </div>
                <div className="record__container">
                    <div className="record__img">
                        <img src={medal} alt=""/>
                    </div>
                    <div className="record__data">
                        <span>05</span>
                    </div>
                </div>
                <div className="total__container">
                    <div className="total__img">
                        <img src={calendar} alt=""/>
                    </div>
                    <div className="total__data">
                        <span>{checkedId.length}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Habit;