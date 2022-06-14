import { useState, Fragment, useCallback } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Calendar, CalendarProps } from "react-native-calendars";
import moment from "moment";

const INITIAL_DATE = moment().format("LLLL").toString();

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(INITIAL_DATE);

  const onDayPress: CalendarProps["onDayPress"] = useCallback(
    (day) => {
      setSelectedDate(day.dateString);
    },
    [selectedDate]
  );

  const addMonths = (numOfMonths: number, date = new Date()) => {
    date.setMonth(date.getMonth() + numOfMonths);
    return date;
  };

  const renderCalendar = () => {
    return (
      <Fragment>
        <Calendar
          style={[styles.calendar]}
          hideExtraDays
          disableAllTouchEventsForDisabledDays
          current={INITIAL_DATE}
          minDate={INITIAL_DATE}
          maxDate={addMonths(3).toString()}
          onDayPress={onDayPress}
          markingType={"custom"}
          markedDates={{
            "2022-06-17": {
              disabled: true,
            },
            "2022-06-20": {
              disabled: true,
            },
            "2022-06-24": {
              disabled: true,
            },
            "2022-06-27": {
              disabled: true,
            },
            "2022-07-01": {
              disabled: true,
            },
            "2022-07-04": {
              disabled: true,
            },
            "2022-07-08": {
              disabled: true,
            },
            "2022-07-11": {
              disabled: true,
            },
            "2022-07-15": {
              disabled: true,
            },
            "2022-07-18": {
              disabled: true,
            },
            "2022-07-22": {
              disabled: true,
            },
            "2022-07-25": {
              disabled: true,
            },
            "2022-07-29": {
              disabled: true,
            },
            "2022-08-01": {
              disabled: true,
            },
            "2022-08-05": {
              disabled: true,
            },
            "2022-08-08": {
              disabled: true,
            },
            "2022-08-09": {
              disabled: true,
            },
            "2022-08-12": {
              disabled: true,
            },
            "2022-08-15": {
              disabled: true,
            },
            "2022-08-19": {
              disabled: true,
            },
            "2022-08-22": {
              disabled: true,
            },
            "2022-08-26": {
              disabled: true,
            },
            "2022-08-29": {
              disabled: true,
            },
            "2022-09-02": {
              disabled: true,
            },
            "2022-09-05": {
              disabled: true,
            },
            "2022-09-09": {
              disabled: true,
            },
            "2022-09-12": {
              disabled: true,
            },
            "2022-09-16": {
              disabled: true,
            },

            "2022-06-14": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-15": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-16": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-18": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-19": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-21": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-22": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-23": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
            "2022-06-29": {
              disabled: true,
              customStyles: {
                text: {
                  color: "red",
                },
              },
            },
          }}
          theme={{
            textSectionTitleColor: "black",
            todayTextColor: "black",
            todayBackgroundColor: "#7EC1FF",
            monthTextColor: "#404040",
            backgroundColor: "green",
          }}
        />
      </Fragment>
    );
  };

  const calendarView = () => {
    return <Fragment>{renderCalendar()}</Fragment>;
  };

  return <ScrollView showsVerticalScrollIndicator={false}>{calendarView()}</ScrollView>;
};

export default CalendarComponent;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 50,
    marginBottom: 10,
  },
});
