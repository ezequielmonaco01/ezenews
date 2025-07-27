import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FilterModal } from "./FilterModal";

interface CalendarFilterProps {
  visible: boolean;
  onClose: () => void;
  onDateSelect: (startDate: Date, endDate?: Date) => void;
  initialStartDate?: Date;
  initialEndDate?: Date;
}

export const CalendarFilter: React.FC<CalendarFilterProps> = ({
  visible,
  onClose,
  onDateSelect,
  initialStartDate,
  initialEndDate,
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    initialStartDate || null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(
    initialEndDate || null
  );
  const [isSelectingRange, setIsSelectingRange] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const generateCalendarDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      days.push(currentDate);
    }
    return days;
  };

  const handleDatePress = (date: Date) => {
    if (!isSelectingRange) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else {
      if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
        setSelectedStartDate(date);
        setSelectedEndDate(null);
      } else {
        if (date < selectedStartDate) {
          setSelectedEndDate(selectedStartDate);
          setSelectedStartDate(date);
        } else {
          setSelectedEndDate(date);
        }
      }
    }
  };

  const isDateInRange = (date: Date) => {
    if (!selectedStartDate) return false;
    if (!selectedEndDate)
      return date.toDateString() === selectedStartDate.toDateString();
    return date >= selectedStartDate && date <= selectedEndDate;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const handleConfirm = () => {
    if (selectedStartDate) {
      onDateSelect(selectedStartDate, selectedEndDate || undefined);
    }
  };

  const handleCancel = () => {
    setSelectedStartDate(initialStartDate || null);
    setSelectedEndDate(initialEndDate || null);
  };

  return (
    <FilterModal
      visible={visible}
      onClose={onClose}
      title="Seleccionar Fecha"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    >
      {/* Toggle para rango */}
      <View style={styles.rangeToggle}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !isSelectingRange && styles.toggleButtonActive,
          ]}
          onPress={() => setIsSelectingRange(false)}
        >
          <Text
            style={[
              styles.toggleText,
              !isSelectingRange && styles.toggleTextActive,
            ]}
          >
            Una fecha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            isSelectingRange && styles.toggleButtonActive,
          ]}
          onPress={() => setIsSelectingRange(true)}
        >
          <Text
            style={[
              styles.toggleText,
              isSelectingRange && styles.toggleTextActive,
            ]}
          >
            Rango de fechas
          </Text>
        </TouchableOpacity>
      </View>

      {/* Navegación del mes */}
      <View style={styles.monthNavigation}>
        <TouchableOpacity
          onPress={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
        >
          <MaterialIcons name="chevron-left" size={24} color="#2563eb" />
        </TouchableOpacity>
        <Text style={styles.monthTitle}>
          {currentMonth.toLocaleDateString("es-ES", {
            month: "long",
            year: "numeric",
          })}
        </Text>
        <TouchableOpacity
          onPress={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
        >
          <MaterialIcons name="chevron-right" size={24} color="#2563eb" />
        </TouchableOpacity>
      </View>

      {/* Días de la semana */}
      <View style={styles.weekDays}>
        {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {/* Calendario */}
      <View style={styles.calendar}>
        {generateCalendarDays(currentMonth).map((date, index) => {
          const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
          const isSelected = isDateInRange(date);

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.calendarDay,
                !isCurrentMonth && styles.otherMonthDay,
                isSelected && styles.selectedDay,
              ]}
              onPress={() => isCurrentMonth && handleDatePress(date)}
            >
              <Text
                style={[
                  styles.calendarDayText,
                  !isCurrentMonth && styles.otherMonthText,
                  isSelected && styles.selectedDayText,
                ]}
              >
                {date.getDate()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Fechas seleccionadas */}
      {selectedStartDate && (
        <View style={styles.selectedDates}>
          <Text style={styles.selectedDatesTitle}>
            {isSelectingRange ? "Rango seleccionado:" : "Fecha seleccionada:"}
          </Text>
          <Text style={styles.selectedDatesText}>
            {formatDate(selectedStartDate)}
            {selectedEndDate && ` - ${formatDate(selectedEndDate)}`}
          </Text>
        </View>
      )}
    </FilterModal>
  );
};

const styles = StyleSheet.create({
  rangeToggle: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 6,
  },
  toggleButtonActive: {
    backgroundColor: "#2563eb",
  },
  toggleText: {
    color: "#666",
    fontWeight: "500",
  },
  toggleTextActive: {
    color: "white",
  },
  monthNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textTransform: "capitalize",
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  weekDay: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    width: 40,
    textAlign: "center",
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  calendarDay: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderRadius: 20,
  },
  otherMonthDay: {
    opacity: 0.3,
  },
  selectedDay: {
    backgroundColor: "#2563eb",
  },
  calendarDayText: {
    fontSize: 14,
    color: "#333",
  },
  otherMonthText: {
    color: "#ccc",
  },
  selectedDayText: {
    color: "white",
    fontWeight: "bold",
  },
  selectedDates: {
    backgroundColor: "#f8fafc",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  selectedDatesTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 5,
  },
  selectedDatesText: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "bold",
  },
});
