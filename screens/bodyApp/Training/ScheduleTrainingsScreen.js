import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { addDays, format, getDate, startOfWeek, addWeeks, getMonth, isSameDay } from 'date-fns'
import { fr } from 'date-fns/locale';
import Icon from 'react-native-vector-icons/Feather'
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'fr';

export default function ScheduleTrainingsScreen() {

  const [currentDate, setCurrentDate] = useState(new Date());

  const [month, setMonth] = useState('')

  const date = new Date()

  useEffect(() => {
    setMonth(`${format(currentDate, 'MMM', { locale: fr })} ${currentDate.getFullYear()}`)
  }, [currentDate])

  const handlePrevWeek = () => {
    setCurrentDate((prevDate) => addWeeks(prevDate, -1));
  };

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => addWeeks(prevDate, 1));
  };


  const weekDays = getWeekDays(currentDate);

  const [selectedDayIndex, setSelectedDayIndex] = useState(date.getDay() - 1);



  // Obtenez le numéro de semaine de l'année
  const weekNumber = Math.ceil((currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000 / 7);
  const weekRemainder = weekNumber % 4

  const [weekLetter, setWeekLetter] = useState('')

  useEffect(() => {
    findWeekLetter()

  }, [currentDate])

  const findWeekLetter = () => {
    if (weekRemainder === 1) {
      setWeekLetter('A')
    } else if (weekRemainder === 2) {
      setWeekLetter("B")
    }
    else if (weekRemainder === 3) {
      setWeekLetter("C")
    } else {
      setWeekLetter("D")
    }

  }
  const navigateToWeek = targetLetter => {
    const letters = ["A", "B", "C", "D"]
    const currentIndex = letters.indexOf(weekLetter)
    const targetIndex = letters.indexOf(targetLetter)


    if (currentIndex !== -1 && targetIndex !== -1) {
      const weeksToChange = targetIndex - currentIndex
      setWeekLetter(letters[targetIndex])
      setCurrentDate(prevDate => addWeeks(prevDate, weeksToChange))
    }
  }

  const [activeCalendar, setActiveCalendar] = useState(false)
  const [selected, setSelected] = useState('');
  console.log("🚀 ~ file: ScheduleTrainingsScreen.js:112 ~ ScheduleTrainingsScreen ~ selected:",  selected)
  return (
    <View style={styles.container}>
      <View style={styles.monthCalendarContainer}>

        <TouchableOpacity onPress={handlePrevWeek} activeOpacity={0.5}>
          <Icon name="arrow-left" style={{ paddingLeft: 10, paddingVertical: 10, transform: [{ translateY: -4 }] }} size={25} color='orange' />
        </TouchableOpacity>
        {['A', 'B'].map(letter => (
          <TouchableOpacity activeOpacity={1} onPress={() => navigateToWeek(letter)} key={letter} style={[styles.weekABCD, weekLetter === letter && { backgroundColor: "#2D9BF0" }]}>
            <Text style={weekLetter === letter && { color: 'white' }}>{letter}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => setActiveCalendar(!activeCalendar)}><Text style={{ fontSize: 18 }}>{month}</Text></TouchableOpacity>

        {['C', 'D'].map(letter => (
          <TouchableOpacity activeOpacity={1} onPress={() => navigateToWeek(letter)} key={letter} style={[styles.weekABCD, weekLetter === letter && { backgroundColor: "#2D9BF0" }]}>
            <Text style={weekLetter === letter && { color: 'white' }}>{letter}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{ paddingRight: 10, paddingVertical: 10, transform: [{ translateY: -4 }] }} onPress={handleNextWeek} activeOpacity={0.5}>
          <Icon name="arrow-right" size={25} color='orange' />
        </TouchableOpacity>

      </View>
      <View style={{ zIndex: 10 }}>
        {activeCalendar && (
          <Calendar style={styles.calendar} onDayPress={day => {
            setSelected(day.dateString);
            setActiveCalendar(false);
            setCurrentDate(new Date(day.year, day.month - 1, day.day));
            setSelectedDayIndex((new Date(day.dateString).getDay() + 6) % 7);
          }}
            markedDates={{
              [selected]: { selected: true, disableTouchEvent: true }
            }}
            firstDay={1}
            initialDate={date}
          />
        )}
      </View>
      <View style={styles.weekCalendarContainer}>
        {weekDays.map((day, index) => {
          const sameDay = isSameDay(date, day.date)
          return (
            <TouchableOpacity activeOpacity={1} onPress={() => {
              setSelectedDayIndex(index)
              setSelected(day.date.toISOString().split('T')[0])
            }} style={[styles.weekDay, selectedDayIndex === index && { backgroundColor: 'orange', borderRadius: 50 }]} key={index}>
              <Text style={[styles.dayText, selectedDayIndex === index && { color: 'white' }, sameDay && { color: "#2D9BF0" }]}>{day.day}</Text>
              <Text style={[selectedDayIndex === index && { color: 'white' }]}>{day.formatted.slice(0, -1)}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  monthCalendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginTop: 5
  },
  weekABCD: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#2D9BF0'
  },
  weekCalendarContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginTop: 10,
    position: 'absolute',
    top: 45,
    width: "100%"
  },
  weekDay: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dayText: {
    fontSize: 17,
    marginBottom: 3,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  calendar: {
    marginHorizontal: 19,
    borderRadius: 10
  }
});


export const getWeekDays = (date) => {
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const final = []

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i)
    final.push({
      formatted: format(date, 'EEE', { locale: fr }),
      date,
      day: getDate(date),
    })
  }

  return final;
}


// TODO: Personnaliser le calendar