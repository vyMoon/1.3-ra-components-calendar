import React from 'react';

const getCalendar = (now) => {

    const last = new Date(now.year, now.month + 1, 0).getDate();
    const first = new Date(now.year, now.month, 1)
    const firstDay = first.getDay() === 0 ? 6 : first.getDay() - 1;
    // determines the number of days of the previous month to complete the first week
    let start = 1 - firstDay;
    const elements = [];
  
    for (; start <= last;) {
      
      const weekElements = [];
      
      for (let i = 0; i < 7; i++) {
        // if the day is day of previous month or next monts adds the class name
        let className = (0 < start && start <= last) ? '' : 'ui-datepicker-other-month';
        if (start === now.date) {
          className = 'ui-datepicker-today';
        }
        
        const day = (
          <td key={start} className={className} >
            { (new Date(now.year, now.month, start)).getDate() }
          </td>
        )
        
        weekElements.push(day)
        
        start++
      }
      
      const weekRow = (
        <tr key={`row-${start}`}>{weekElements}</tr>
      )
      elements.push(weekRow)
    }
    
    return elements;
}

export default getCalendar;