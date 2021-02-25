import {
     isMonday,
     isFriday,
     isSaturday,
     isSunday,
     isThursday,
     isTuesday,
     isWednesday,
     getMonth,
     getDate,
     getYear
} from 'date-fns';
export const SetThisWeek = () => {
     let thisWeek = {};
     const todaysDate = new Date();
     const isTodayMonday = isMonday(todaysDate);
     const isTodayTuesday = isTuesday(todaysDate);
     const isTodayWednesday = isWednesday(todaysDate);
     const isTodayThursday = isThursday(todaysDate);
     const isTodayFriday = isFriday(todaysDate);
     const isTodaySaturday = isSaturday(todaysDate);
     const isTodaySunday = isSunday(todaysDate);

     if (isTodayMonday) {
          thisWeek = {
               monday: 'today',
               tuesday: 'upcoming',
               wednesday: 'upcoming',
               thursday: 'upcoming',
               friday: 'upcoming',
               saturday: 'upcoming',
               sunday: 'upcoming'
          };
     } else if (isTodayTuesday) {
          thisWeek = {
               monday: 'yesterday',
               tuesday: 'today',
               wednesday: 'upcoming',
               thursday: 'upcoming',
               friday: 'upcoming',
               saturday: 'upcoming',
               sunday: 'upcoming'
          };
     } else if (isTodayWednesday) {
          thisWeek = {
               monday: 'yesterday',
               tuesday: 'yesterday',
               wednesday: 'today',
               thursday: 'upcoming',
               friday: 'upcoming',
               saturday: 'upcoming',
               sunday: 'upcoming'
          };
     } else if (isTodayThursday) {
          thisWeek = {
               monday: 'yesterday',
               tuesday: 'yesterday',
               wednesday: 'yesterday',
               thursday: 'today',
               friday: 'upcoming',
               saturday: 'upcoming',
               sunday: 'upcoming'
          };
     } else if (isTodayFriday) {
          thisWeek = {
               monday: 'yesterday',
               tuesday: 'yesterday',
               wednesday: 'yesterday',
               thursday: 'yesterday',
               friday: 'today',
               saturday: 'upcoming',
               sunday: 'upcoming'
          };
     } else if (isTodaySaturday) {
          thisWeek = {
               monday: 'yesterday',
               tuesday: 'yesterday',
               wednesday: 'yesterday',
               thursday: 'yesterday',
               friday: 'yesterday',
               saturday: 'today',
               sunday: 'upcoming'
          };
     } else if (isTodaySunday) {
          thisWeek = {
               monday: 'yesterday',
               tuesday: 'yesterday',
               wednesday: 'yesterday',
               thursday: 'yesterday',
               friday: 'yesterday',
               saturday: 'yesterday',
               sunday: 'today'
          };
     }

     return thisWeek;
};

export const formatTimeForCalendar = (
     fromHours,
     fromMinutes,
     fromPeriod,
     toHours,
     toMinutes,
     toPeriod,
     when
) => {
     let startTime = '';
     let endTime = '';

     if (fromPeriod == 'am') {
          startTime = `${Number(fromHours)}:${Number(fromMinutes)}`;
     } else {
          startTime = `${Number(fromHours) + 12}:${Number(fromMinutes)}`;
     }
     if (toPeriod == 'am') {
          endTime = `${Number(toHours)}:${Number(toMinutes)}`;
     } else {
          endTime = `${Number(toHours) + 12}:${Number(toMinutes)}`;
     }

     return { startTime, endTime };
};

export const formatDateForCalendar = (startTime, endTime, when, week) => {
     let day = '';
     let month = '';
     let year = '';
     let theStartDate = '';
     let theEndDate = '';
     if (when === 'today') {
          day = getDate(new Date());
          month = getMonth(new Date());
          year = getYear(new Date());
     }

     let d = new Date();

     if (week === 'monday') {
          d.setDate(d.getDate() + ((1 + 7 - d.getDay()) % 7));
          day = getDate(d);
          month = getMonth(d);
          year = getYear(d);
     } else if (week === 'sunday') {
          d.setDate(d.getDate() + ((1 + 6 - d.getDay()) % 7));
          day = getDate(d);
          month = getMonth(d);
          year = getYear(d);
     } else if (week === 'saturday') {
          d.setDate(d.getDate() + ((1 + 5 - d.getDay()) % 7));
          day = getDate(d);
          month = getMonth(d);
          year = getYear(d);
     } else if (week === 'friday') {
          d.setDate(d.getDate() + ((1 + 4 - d.getDay()) % 7));
          day = getDate(d);
          month = getMonth(d);
          year = getYear(d);
     } else if (week === 'thursday') {
          d.setDate(d.getDate() + ((1 + 3 - d.getDay()) % 7));
          day = getDate(d);
          month = getMonth(d);
          year = getYear(d);
     } else if (week === 'wednesday') {
          d.setDate(d.getDate() + ((1 + 2 - d.getDay()) % 7));
          day = getDate(d);
          month = getMonth(d);
          year = getYear(d);
     } else if (week === 'tuesday') {
          d.setDate(d.getDate() + ((1 + 1 - d.getDay()) % 7));
          day = getDate(d);
          month = getMonth(d);
          year = getYear(d);
     }

     let stringStartDate = `${month}/${day}/${year} ${startTime}`.toString();
     let endStringDate = `${month}/${day}/${year} ${endTime}`.toString();
     theStartDate = new Date(stringStartDate);
     theEndDate = new Date(endStringDate);

     return { theStartDate, theEndDate };
};
