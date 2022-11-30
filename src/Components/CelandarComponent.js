//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dateFormatter } from '../Common/utils';

const CelandarComponent = (props) => {
    const {initialDate ,dayPressHandler =()=>{} } = props
    return (
        <View style={styles.container}>
            <Calendar
            //   style={{
            //     marginHorizontal:10
            //     // height: 350,
            //   }}
                // Initially visible month. Default = now
                initialDate={initialDate}
                theme={{
                    selectedDayBackgroundColor: 'pink',
                    selectedDayTextColor: '#ffffff',
                    dayTextColor: '#000',
                }}
                
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                // minDate={''}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                // maxDate={'2012-05-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={dayPressHandler}
                // Handler which gets executed on day long press. Default = undefined
                // onDayLongPress={day => {
                //     console.log('selected day', day);
                // }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                // onMonthChange={month => {
                //     console.log('month changed', month);
                // }}
                // Hide month navigation arrows. Default = false
                hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={direction => direction==="right"? <Icon name="arrow-right" size={30} color="#900" />:<Icon name="arrow-left" size={30} color="#900" />}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={false}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable left arrow. Default = false
                disableArrowLeft={false}
                // Disable right arrow. Default = false
                disableArrowRight={false}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                disableAllTouchEventsForDisabledDays={true}
                // Replace default month and year title with custom one. the function receive a date as parameter
                renderHeader={date => {
                 return <View style={styles.celanderHeader}>
                     <Text style={styles.dateText}>{dateFormatter('MMM DD YYYY' , date)}</Text>
                 </View>
                }}
                // Enable the option to swipe between months. Default = false
                enableSwipeMonths={false}
            />      
              </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex:1
    },
    celanderHeader:{
    },
    dateText:{
        fontSize:16,
        fontWeight:"900"
    }
});

export default CelandarComponent;
