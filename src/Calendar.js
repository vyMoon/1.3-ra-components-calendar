import React from 'react';
import weekDays from './weekDays.js';
import monthes from './monthes';
import getCalendar from './getCalendar.js';
import PropTypes from 'prop-types';


function Calendar(props) {

  const now = {};
  now.obj = props.date;
  now.year = now.obj.getFullYear();
  now.month = now.obj.getMonth();
  now.date = now.obj.getDate();
  now.day = (now.obj.getDay() - 1 < 0) ? 6 : now.obj.getDay() - 1;
  
  const elements = getCalendar(now);
  
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{weekDays[now.day]}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{now.date}</div>
                    <div className="ui-datepicker-material-month">{monthes[now.month]}</div>
                    <div className="ui-datepicker-material-year">{now.year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{monthes[now.month]}</span>&nbsp;<span className="ui-datepicker-year">{now.year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        {weekDays.map( (el, ind) => {
                            return <th key={ind} scope="col" title={el}>{el.slice(0, 3)}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {elements}
                </tbody>
            </table>
        </div>
    )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date)
}

export default Calendar;