import React from 'react';
import moment from 'moment';
import '../../node_modules/moment/locale/ru';
// import PropTypes from 'prop-types';

moment.updateLocale('ru', {week: {dow: 1}});

/* Calendar.propTypes = {
    date: PropTypes.shape({
      curDay: PropTypes.number,
      curMonth: PropTypes.string,
      curMontha: PropTypes.string,
      curDayOfWeek: PropTypes.string,
      curYear: PropTypes.number,
      startDay: PropTypes.string,
      endDay: PropTypes.string
    })
  } */

  const startDay = moment().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');
  
  const curDay = moment().format('DD');
  const curMonth = moment().format('MMMM');
  const curMontha = moment().format('D MMMM').split(' ');
  const curYear = moment().format('YYYY');
  const curDayOfWeek = moment().format('dddd'); 

function  Calendar({date}) { 

  function isCurDay(Day) {
      if (curDay ==  Day) {
        return true;
      }
    }

//console.log(startDay.format("YYYY-MMMM-DD"));
//console.log(endDay.format("YYYY-MMMM-DD"));
//console.log(curDay);
  
   return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{curDayOfWeek}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{curDay}</div>
          <div className="ui-datepicker-material-month">{curMontha[1]}</div>
          <div className="ui-datepicker-material-year">{curYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{curMonth}</span>&nbsp;<span className="ui-datepicker-year">{curYear}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col className="ui-datepicker-week-end"></col>
        <col className="ui-datepicker-week-end"></col>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="ui-datepicker-other-month">26</td>
          <td className="ui-datepicker-other-month">27</td>
          <td className="ui-datepicker-other-month">28</td>
          <td className={isCurDay(1)?"ui-datepicker-today":null}>1</td>
          <td className={isCurDay(2)?"ui-datepicker-today":null}>2</td>
          <td className={isCurDay(3)?"ui-datepicker-today":null}>3</td>
          <td className={isCurDay(4)?"ui-datepicker-today":null}>4</td>
        </tr>
        <tr>
          <td className={isCurDay(5)?"ui-datepicker-today":null}>5</td>
          <td className={isCurDay(6)?"ui-datepicker-today":null}>6</td>
          <td className={isCurDay(7)?"ui-datepicker-today":null}>7</td>
          <td className={isCurDay(8)?"ui-datepicker-today":null}>8</td>
          <td className={isCurDay(9)?"ui-datepicker-today":null}>9</td>
          <td className={isCurDay(10)?"ui-datepicker-today":null}>10</td>
          <td className={isCurDay(11)?"ui-datepicker-today":null}>11</td>            
        </tr>
        <tr>
          <td className={isCurDay(12)?"ui-datepicker-today":null}>12</td>
          <td className={isCurDay(13)?"ui-datepicker-today":null}>13</td>
          <td className={isCurDay(14)?"ui-datepicker-today":null}>14</td>
          <td className={isCurDay(15)?"ui-datepicker-today":null}>15</td>
          <td className={isCurDay(16)?"ui-datepicker-today":null}>16</td>
          <td className={isCurDay(17)?"ui-datepicker-today":null}>17</td>
          <td className={isCurDay(18)?"ui-datepicker-today":null}>18</td>
        </tr>
        <tr>
          <td className={isCurDay(19)?"ui-datepicker-today":null}>19</td>
          <td className={isCurDay(19)?"ui-datepicker-today":null}>20</td>
          <td className={isCurDay(21)?"ui-datepicker-today":null}>21</td>
          <td className={isCurDay(22)?"ui-datepicker-today":null}>22</td>
          <td className={isCurDay(23)?"ui-datepicker-today":null}>23</td>
          <td className={isCurDay(24)?"ui-datepicker-today":null}>24</td>
          <td className={isCurDay(25)?"ui-datepicker-today":null}>25</td>
        </tr>
        <tr>
          <td className={isCurDay(26)?"ui-datepicker-today":null}>26</td>
          <td className={isCurDay(27)?"ui-datepicker-today":null}>27</td>
          <td className={isCurDay(28)?"ui-datepicker-today":null}>28</td>
          <td className={isCurDay(29)?"ui-datepicker-today":null}>29</td>
          <td className={isCurDay(30)?"ui-datepicker-today":null}>30</td>
          <td className={isCurDay(31)?"ui-datepicker-today":null}>31</td>
          <td>1</td>
        </tr>          
        </tbody>
      </table>
  </div>
  );
}

export default Calendar;
